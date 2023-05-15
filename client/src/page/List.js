import React from 'react';
import styled from "styled-components";
import Filter from './ListComponent/Filter';
import ListEl from './ListComponent/ListEl';
const Container = styled.div`
width: 80rem;
border: 1px solid red;
margin: 0 auto;
`;
const List = () => {
    return (
        <Container>
            <Filter/>
            <ListEl/>

        </Container>
    );
};

export default List;