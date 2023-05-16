import React,{useState} from 'react';
import FilterEl from './FilterEl';
import styled from "styled-components";

const Container =styled.div`
width: 30rem;
display: flex;
margin:  0 auto;
justify-content: space-between;
`;

const Filter = ({filterHandler}) => {
//카테고리 이름 목록
const [category,setCategory] = useState(["전체","상품","카테고리","기획전","브랜드"]);

//Exhibition Product Category Brand

    return (
        <Container>
            {category.map((el, idx)=>
                <FilterEl key ={idx} data={el} idx={idx} filterHandler={()=>{filterHandler(idx)}} />
                // onClick={()=>filterHandler(idx)}
            )}
        </Container>
    );
};

export default Filter;