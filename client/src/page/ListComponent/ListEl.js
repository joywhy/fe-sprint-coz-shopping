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
            return <Card product={el} key= {idx}/>;
          })}
        </Container>
    );
};

export default ListEl;