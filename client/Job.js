import React, { useEffect, useState, useContext } from 'react';
import Styled from 'styled-components';

const Tile = Styled.div`
display: flex;
flex-direction: column;
border: 1px solid #189AB4;
margin-bottom: 10px;
padding: 10px;
width: 90%;
`
const Title = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 18px;
color: #05445E;
font-weight: bold;

`
const Name = Styled.div`
font-family: 'Arial', sans-serif;
color: #189AB4;
font-size: 16px;
`

const Details = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 14px;
`

const Add = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 14px;
background-color: #05445E;
color: white;
width: 130px;
padding: 10px;
margin-top: 10px;
text-align: center;
&:hover {
  background-color: #189AB4;
  cursor: pointer;
}
`

const Job = ({job, setDisplay}) => {

  return (
    <Tile onClick={(event)=>{setDisplay(job)}}>
      <Title>{job.title}</Title>
      <Name>{job.company_name}</Name>
      <Details><b>Job ID:</b> {job.id}</Details>
      <Details><b>Job Type:</b> {job.job_type}</Details>
      <Details><b>Location:</b> {job.candidate_required_location}</Details>
      <Details><b>Category:</b> {job.job_type}</Details>
      <Details><b>Apply now on Remotive:</b> {job.url}</Details>
      <Add onClick={()=>{console.log('add me')}}>Add To Dashboard</Add>
    </Tile>
  )
}

export default Job;


// once the add to dashboard is clicked, trigger a function that will query the server. The server should find the dashboard collection and add a document for the job selected.

// clicking dashboard should render all the jobs in the dashboard collection.