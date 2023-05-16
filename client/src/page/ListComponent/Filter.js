import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 30rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;
const H2 = styled.h2`
  font-weight: 400;
  font-size: 1rem;
`;

const Filter = ({ filterHandler,categoryList,filterarray }) => {
  return (
    <Container>
      {categoryList.map((category, idx) => (
        <div key ={idx} onClick={() => {filterHandler(filterarray[idx])}} >
          <img src={`/filterIm${idx}.jpg`} />
          <H2>{category}</H2>
        </div>
      ))}
    </Container>
  );
};

export default Filter;
