import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from "styled-components";
import Filter from './ListComponent/Filter';
import ListEl from './ListComponent/ListEl';
const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`;

const Bookmark = () => {
   // const dispatch = useDispatch();

    const BookmarkList = useSelector((state)=>state.bookmark);
    //console.log(BookmarkList);
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
    const filterData = BookmarkList.filter((product) => {
      if (filtercategory === categoryEnum.ALL) { //전체 카테고리시 
        return true;
      } else {
        return product.type === filtercategory;
      }
      
    });
  //console.log(filterData);
    return (
        <Container>
        {/* 카테고리 분류 */}
        <Filter filterHandler={(category) => { filterHandler(category) } } 
        categoryList={categoryList}
        filterarray={filterarray}
        filtercategory={filtercategory}
        />
        {/* 필터링된 데이터 영역 */}
        <ListEl filterData={filterData}  />
      </Container>
    );
};

export default Bookmark;