import React, { useEffect, useState, useContext } from 'react';
import Styled from 'styled-components';

const Nav = Styled.div`
  Display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100px;
  padding: 20px;
  padding-top: 10%;
  font-family: 'Source Code Pro', monospace;
  font-size: 50px;
  background-color: #05445E;
  color: white;
`

const Options = Styled.div`
  &:hover {
    color: #B1D4E0;
    cursor: pointer;
  }
`

const OptionCont = Styled.div`
  Display: flex;
  flex-direction: row;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`

const SpaceH = Styled.div`
  width: 20px;
`



const NavBar = (props) => {
  return (
    <Nav>
      Remote Job Board
      <OptionCont>
        <Options> Dashboard </Options>
        <SpaceH></SpaceH>
        <div> | </div>
        <SpaceH></SpaceH>
        <Options> Search </Options>
        <SpaceH></SpaceH>
        <div> | </div>
        <SpaceH></SpaceH>
        <Options> Login </Options>
      </OptionCont>
    </Nav>
  )
}

export default NavBar;