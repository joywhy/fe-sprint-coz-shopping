import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Star from '../icon/Star';
import Boxicon from '../icon/Boxicon';
const Container = styled.div`
  position: absolute;
  bottom: -9rem;
  right: 0;
  width: 12rem;
  height: auto;

  > div {
    position: absolute;
    top: -0.5rem;
    right: 2rem;
    width: 1rem;
    background-color: white;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid white;
    transform: rotate(135deg);
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
  }
  > ul {
    background-color: white;
    width: 100%;
    padding-top: 10px;

    border-radius: 0.5rem;
    box-shadow: 0px 0px 6px 0px #00000040;

    > li {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      padding-left: 15px;
      padding-right: 5px;

      .star {

      }
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

const DropMenu = () => {
  return (
    <Container>
      {/* <img src="./Polygon.png" alt="꾸밈" /> */}
      <div className="polygon"></div>
      <ul>
        <li> 000님,안녕하세요</li>
        <li>
          <Link to="/products/list">
            {' '}
            <Boxicon
              width="20"
              height="20"
              fill="none"
              className="Boxicon"
            />{' '}
            상품 리스트 페이지{' '}
          </Link>
        </li>
        <li>
          <Link to="/bookmark">
            {' '}
            <Star width="20" height="20" fill="gray" className="star" /> 북마크
            페이지
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DropMenu;
