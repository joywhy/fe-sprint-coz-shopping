import React from 'react';
import Card from '../component/Card';
import styled from 'styled-components';

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

const Main = ({ data }) => {
  let datafilter = data.filter((el, idx) => {
    return el.id <4;//Exhibition Product Category Brand
  });
  return (
    <Container>
      <Article>
        <h2>상품리스트</h2>
        <div>
          {datafilter.map((el, idx) => {
           // console.log(el);
            let type = el.type;
            let title = el.title;
            let imgUrl =el.image_url;
            let discount = el.discountPercentage;
            let subTitle = el.sub_title;
            let price = el.price;
            let brandName = el.brand_name;
            let follower = el.follower;
            let brandImg =el.brand_image_url;            ;

            return <Card key ={idx} type={type} title={title} imgUrl={imgUrl} discount={discount} price={price}
            brandName={brandName} follower={follower} brandImg={brandImg}
            subTitle={subTitle}
            />;
          })}
        </div>
      </Article>
    </Container>
  );
};

export default Main;
