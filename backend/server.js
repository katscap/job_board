const express = require('express');
const passport = require('passport');
const axios = require('axios');
const passportSetup = require('../config/passport-setup.js');
const {API_KEY} = require('../config/config.js')
const app = express()
const port = 3000
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


const createConfig = ({search}) => {
  let splitTerms = search.split(' ')
  let query = ''
  for (var i = 0; i < splitTerms.length; i++) {
    let term = splitTerms[i]
    query+=term
    if (i !== splitTerms.length-1) {
      query+= '%20'
    }
  }
  return {
    method: 'get',
    url: `https://remotive.io/api/remote-jobs?search=${query}&limit=30`,
    headers: {
      'User-Agent':'Axios 0.21.1'
    }
  }
}

app.get('/jobs', (req, res) => {
  let config = createConfig(req.query)
  axios(config)
    .then((response) => {
      console.log(response.data)
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
})



// auth google
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}))

// callback route for google redirect
app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})