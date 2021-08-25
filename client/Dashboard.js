import React, { useEffect, useState, useContext } from 'react';


const Dashboard= ({search}) => {
  const [searchText, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
    console.log(event.target.value)
  }

  return (
    <form>
      <input type="text" placeholder="start your search here"
        onChange={(event)=>{console.log('hello'); handleChange(event)}}/>
      <input type="submit"
        onClick={(event)=>{
          event.preventDefault();
          search(searchText);
        }}/>
    </form>
  )
}

export default Dashboard;