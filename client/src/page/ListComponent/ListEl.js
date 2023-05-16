import React from 'react';
import styled from "styled-components";
import Card from '../../component/Card';

const Container =styled.div`
margin-top: 2rem;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

const ListEl = ({filterData}) => {
    return (
        <Container>
            {filterData.map((el, idx) => {
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
        </Container>
    );
};

export default ListEl;