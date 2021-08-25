import React, { useEffect, useState, useContext } from 'react';
import Job from './Job.js';
import Styled from 'styled-components';

const Right = Styled.div`
 display: flex;
 flex-direction: column;
 height: 450px;
overflow: auto;
::-webkit-scrollbar {display:none;}
`


const JobList = ({jobs, setDisplay}) => {
  console.log('jobs in joblist', jobs)
  return (
    <Right>
      {jobs.map((job)=><Job job={job} setDisplay={setDisplay}/>)}
    </Right>
  )
}

export default JobList;