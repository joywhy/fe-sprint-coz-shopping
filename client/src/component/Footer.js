import React from 'react';

import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  > p {
    font-weight: 400;
    font-size: 12px;
    color: #888888;
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </Container>
  );
};

export default Footer;
