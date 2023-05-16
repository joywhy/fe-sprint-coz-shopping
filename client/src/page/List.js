import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Filter from './ListComponent/Filter';
import ListEl from './ListComponent/ListEl';

//스타일링
const Container = styled.div`
  width: 80rem;
  height: auto;
  margin: 0 auto;
`;

const List = () => {
  const products = useSelector((state) => state.products);
  const [filtercategory, setfilterCategory] = useState('All');
  const filterarray = ['All', 'Product', 'Category', 'Exhibition', 'Brand'];

  const filterHandler = (idx) => {
    setfilterCategory(filterarray[idx]);
  };
  const filterData = products.filter((el) => {
    if (filtercategory === 'All') {
      return el;
    } else {
      return el.type === filtercategory;
    }
  });

  return (
    <Container>
      {/* 카테고리 분류 */}
      <Filter
        filterHandler={(idx) => {
          filterHandler(idx);

        }}
      />
      {/* 필터링된 데이터 영역 */}
      <ListEl filterData={filterData} />
    </Container>
  );
};

export default List;
