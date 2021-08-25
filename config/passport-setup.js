const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { optionsG } = require('./config.js')

passport.use(
  new GoogleStrategy(
    optionsG, (accessToken, refreshToken, profile, done) => {
      console.log('profile', profile)
    }
  )
)
