import React from 'react';
import Card from '../component/Card';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  margin: 0 76px;
  //border: 1px solid red;
  margin-top: 24px;
`;
const Article = styled.article`
  > h2 {
    width: auto;
    display: flex;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Main = () => {
  const productList = useSelector(state=>state.products)

  let datafilter = productList.filter((product, idx) => {
    return product.id <4;//Exhibition Product Category Brand
  });
  return (
    <Container>
      <Article>
        <h2>상품리스트</h2>
        <div>
          {datafilter.map((product, idx) => {
           // console.log(el);
            return <Card product={product} key= {idx} />;
          })}
        </div>
      </Article>
    </Container>
  );
};

export default Main;
