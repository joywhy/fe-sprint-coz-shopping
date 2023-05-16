import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Star from '../icon/Star';
import Boxicon from '../icon/Boxicon';
//스타일링
const Container = styled.div`
  position: fixed;
  top: 4rem;
  right: 4rem;
  width: 12rem;
  height: auto;
  z-index: 10;
  > div {
    position: absolute;
    top: -0.5rem;
    right: 2rem;
    width: 1rem;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid white;
    transform: rotate(135deg);
    background-color: white;
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
  }
  > ul {
    width: 100%;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0px 0px 6px 0px #00000040;
    padding-top: 10px;
    > li {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      padding-left: 15px;
      padding-right: 5px;
    }
    > li:nth-child(2) {
      border-top: 0.5px solid gray;
      cursor: pointer;
    }
    > li:nth-child(3) {
      border-top: 0.5px solid gray;
      cursor: pointer;
    }
  }
`;

const DropMenu = ({dropmenuHandler}) => {
  return (
    <Container>
      <div className="polygon"></div>
      <ul>
        <li> 000님,안녕하세요</li>
        <li onClick={dropmenuHandler}>
          <Link to="/products/list">
            <Boxicon width="20" height="20" fill="none"  className="Boxicon" />
            상품 리스트 페이지
          </Link>
        </li>
        <li onClick={dropmenuHandler}>
          <Link to="/bookmark">
            <Star width="24" height="24" fill="#DFDFDF" className="star" /> 
            북마크 페이지
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DropMenu;
