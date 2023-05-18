import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Filter from './ListComponent/Filter';
import ListEl from './ListComponent/ListEl';

//스타일링
const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`;

const List = () => {
  const productList = useSelector((state) => state.products);
  const bookmarkList = useSelector((state)=>state.bookmark);
  
  const [filtercategory, setfilterCategory] = useState('All');
  const filterarray = ['All', 'Product', 'Category', 'Exhibition', 'Brand'];
  
  const categoryEnum = {
  ALL: "All",
  PRODUCT: "Product",
  CATEGORY: "Category",
  EXHIBITION: "Exhibition",
  BRAND: "Brand",
  };
  Object.freeze (categoryEnum);

  const categoryList = [
        '전체',
        '상품',
        '카테고리',
        '기획전',
        '브랜드',
      ];


  const filterHandler = (category) => {
    setfilterCategory(category);
  };
  const filterData = productList.filter((product) => {
    if (filtercategory === categoryEnum.ALL) {
      return product;
    } else {
      return product.type === filtercategory;
    }
  });

  return (
    <Container>
      {/* 카테고리 분류 */}
      <Filter filterHandler={(category) => { filterHandler(category) } } 
      categoryList={categoryList}
      filterarray={filterarray}
      filtercategory={filtercategory}
      />
      {/* 필터링된 데이터 영역 */}
      <ListEl filterData={filterData} />
    </Container>
  );
};

export default List;
