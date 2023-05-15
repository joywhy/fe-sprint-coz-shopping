import React from 'react';
import styled from "styled-components";
const H2 =styled.h2`
font-weight: 400;
font-size: 1rem;
`;
const FilterEl = ({data,idx}) => {
    
    return (
        <div>
            <img src={`/filterIm${idx}.jpg`} />
            
            <H2>{data}</H2>
        </div>
    );
};

export default FilterEl;