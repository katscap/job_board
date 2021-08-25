import React, { useEffect, useState, useContext } from 'react';
import NavBar from './NavBar.js';
import Search from './Search.js';
import Dashboard from './Dashboard.js';
import axios from 'axios';
import {rows} from './dummyData.js'


const App = () => {
  const [currentPage, setPage] = useState('search')
  const [jobs, setJobs] = useState(rows)

  const search = (terms) => {
    let splitTerms = terms.split(' ')
    let query = '/jobs?search='
    for (var i = 0; i < splitTerms.length; i++) {
      let term = splitTerms[i]
      query+=term
      if (i !== splitTerms.length-1) {
        query+= '%20'
      }
    }
    axios.get(query)
      .then((response)=>{setJobs(response.data.jobs)})
      .catch((error)=>{console.log(error)})
  }

  const display = (state) => {
    if (currentPage === 'search') {
      return <Search search={search} jobs={jobs}/>
    } else if (currentPage === 'dashboard') {
      return <Dashboard/>
    }
  }

  return (
    <div>
      <NavBar/>
      {display(currentPage)}
    </div>
  )
}

export default App;

// write a function that will return a component depending on state.