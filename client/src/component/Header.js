import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropMenu from './DropMenu.js';
import HbMenu from '../icon/HbMenu.js';
import Logoicon from '../icon/Logoicon.js';

// 스타일링
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  position: sticky; //스티키와 fixed의 차이점 블로깅
  top:0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 0 5%;
  background-color: white;
  z-index: 8;
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
// header 컴포넌트
const Header = () => {
  // 햄버거 메뉴 활성화 상태
  const [displayMenu, setDisplayMenu] = useState(false);

  const dropmenuHandler = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <Container>
      {/* 좌측 영역 */}
      <Logo>
        <Link to="/">
          {' '}
          <Logoicon width="55" height="30" />
        </Link>
        <Link to="/">
          <h1> COZ Shopping</h1>
        </Link>
      </Logo>

      {/* 우측영역 */}
      <Wrap>
        <div onClick={dropmenuHandler}>
          <HbMenu className="hbmenu" width="30" height="30" fill="black" />
        </div>
        {displayMenu
          ? ReactDOM.createPortal(
              <DropMenu />,
              document.getElementById('hbMeun-root'),
            )
          : null}
      </Wrap>
    </Container>
  );
};

export default Header;
