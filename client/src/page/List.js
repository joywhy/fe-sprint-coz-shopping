import React ,{useState}from 'react';
import styled from "styled-components";
import Filter from './ListComponent/Filter';
import ListEl from './ListComponent/ListEl';
const Container = styled.div`
width: 80rem;
height: auto;
//border: 1px solid red;
margin: 0 auto;
`;
const List = ({data}) => {
    const [showData,setShowData] = useState("전체");

    const filterData = data.filter((el, idx,arr)=>{
      return el.type ==="Product";
    });

    return (
        <Container>
            <Filter/>
            <ListEl filterData={filterData}/>

        </Container>
    );
};

export default List;