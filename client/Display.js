import React, { useEffect, useState, useContext } from 'react';
import Styled from 'styled-components';

const Tile = Styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 50%;
overflow: auto;
border: 1px solid #189AB4;
padding: 10px;
::-webkit-scrollbar {display:none;}
`
const Title = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 16px;
font-weight: bold;
`
const Name = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 14px;
`
const Details = Styled.div`
font-family: 'Arial', sans-serif;
font-size: 14px;
`



const Display = ({display}) => {

  return (
    <Tile onClick={(event)=>{display()}}>
      <Title>{display.title}</Title>
      <Name>{display.company_name}</Name>
      <Details>
        <div dangerouslySetInnerHTML={{__html: display.description}}/>
      </Details>
    </Tile>
  )
}

export default Display;