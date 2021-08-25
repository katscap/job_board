import React, { useEffect, useState, useContext } from 'react';
import JobList from './JobList.js';
import Styled from 'styled-components';
import Display from './Display.js'

const Main = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const SpaceH = Styled.div`
  width: 5px;
`

const Bar = Styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  height: 25px;
  width: 30%;
`

const Submit = Styled.input`
  background-color: #D4F1F4;
  border: 1px solid #75E6DA;
  margin: 20px;
  border-radius: 10px;
  height: 25px;

`


const Search = ({search, jobs}) => {
  const [searchText, setText] = useState('')
  const [display, setDisplay] = useState({})


  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <form>
        <Bar type="text" placeholder="start your search here"
          onChange={(event)=>{handleChange(event)}}
          onKeyUp={(event)=>{
            event.preventDefault();
            if(event.key === 'Enter') {
              search(searchText);
            }
          }}></Bar>
        <Submit type="submit"
          placeholder="search"
          onClick={(event)=>{
            event.preventDefault();
            search(searchText);
          }}></Submit>
      </form>
      <Main>
        <JobList jobs={jobs} setDisplay={setDisplay}/>
        <SpaceH></SpaceH>
        <Display display={display}/>
      </Main>
    </div>
  )
}

export default Search