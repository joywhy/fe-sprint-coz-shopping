import React, { useEffect } from 'react';
import Card from '../component/Card';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  margin: 0 76px;
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
  const productList = useSelector(state=>state.products);
  const bookmarkList = useSelector(state=>state.bookmark);
//console.log(bookmarkList);
 // useEffect
//console.log(bookmarkList);
  // for (let key in obj) {
  //   const value = obj[key]
  
  //   console.log(key)
  //   console.log(value)
  // }

  // let newData = {};

  // for (let key in data) {
  //   if (data.hasOwnProperty(key) && data[key].age <= 11) {
  //     newData[key] = data[key];
  //   }
  // }

  let datafilter = productList.filter((product, idx) => {
    return product.id <4;
  });
  
  let bookmarkfilter = bookmarkList.filter((product, idx) => {
    return product.id <4;
    
  });
console.log(bookmarkfilter);
  return (
    <Container>
      <Article>
        <h2>상품리스트</h2>
        <div>
          {datafilter.map((product,idx) => {
            //console.log(product.id);
            for(let i =0; i<bookmarkList.length;i++){

              if(product.id ===bookmarkList[i].id){
                //console.log("동작");
                let marked =true;
                //console.log(marked);
                return <Card product={product} key={idx} marked={marked}/>;
              }
            }
            let Marked =false;
            return <Card product={product} key= {idx} Marked={Marked} />;
           // console.log(el);
            
            // if(bookmarkList[]){

            // }else{
            //   return <Card product={product} key= {idx}  />;
            // }

          })}
        </div>
      </Article>
      <Article>
        <h2>북마크 리스트</h2>
        <div>
          {bookmarkfilter.map((product,idx) => {
             <Card product={product} key={idx} />;
             
          })}
        </div>
      </Article>
    </Container>
  );
};

export default Main;
