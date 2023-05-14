import React, { useState } from 'react';
import styled from 'styled-components';
import DropMenu from './DropMenu.js';
import {  Link } from "react-router-dom";
import HbMenu from '../icon/HbMenu.js';
import Logoicon from '../icon/Logoicon.js';

import ReactDOM from 'react-dom';
//rsc
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 3rem;
    height: 1.5rem;
  }

  > img:hover {
    cursor: pointer;
  }

  > h1 {
    font-size: 1.5rem; //32px
  }
  > h1:hover {
    cursor: pointer;
  }
`;
const Wrap = styled.div`
  position: relative;
  width: 5rem;
  height: 1.5rem;
   .hbmenu {
    position: relative;
    cursor: pointer;
  }
`;
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const dropmenuHandler = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <Container>
      <Logo>
       <Link to="/"> <Logoicon width="55" height="30"  /></Link>
       <Link to="/"><h1> COZ Shopping</h1></Link>
      </Logo>
      <Wrap>
       <div  onClick={dropmenuHandler}>
        <HbMenu
          className="hbmenu"
          width="30"
          height="30"
          fill="black" 
        />
        </div>
       
        {displayMenu ? ReactDOM.createPortal(<DropMenu /> ,document.getElementById("hbMeun-root")) : null}
      </Wrap>
    </Container>
  );
};

export default Header;
