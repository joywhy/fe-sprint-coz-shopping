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
  width: max-content;
  margin: 0 auto;
`;

const Filter = (props) => {
   const filterHandler=props.filterHandler;
   const categoryList=props.categoryList;
   const filterarray=props.filterarray;
   const filtercategory=props.filtercategory;
  return (
    <Container>
      {categoryList.map((category, idx) => (
        <div key ={idx} onClick={() => {filterHandler(filterarray[idx])}} >
          <img src={`/filterIm${idx}.jpg`} />
          <H2 style ={filtercategory ===filterarray[idx]? {color:"#412DD4",borderBottom: "3px solid #412DD4",fontWeight: "700"}:null}>{category}</H2>
        </div>
      ))}
    </Container>
  );
};

export default Filter;
