import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Star from '../icon/Star';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../store/bookmarkSlice';
const Container = styled.div`
  width: 264px;
  height: 264px;
  position: relative;

  > .imgwrap {
    position: relative;
    margin-bottom: 6px;
     .starcard {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }
`;
const Cardimg = styled.img`
  display: block;
  box-sizing: border-box;
  width: 264px;
  height: 210px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  position: relative;
`;
const Des = styled.div`
  display: flex;
  justify-content: space-between;
  >h3{
    font-weight: 800;
    font-size: 16px;
  }
  > .discount {
    font-weight: 800;
    font-size: 16px;
    color: #452cdd;
  }
`;
const Card = ({product}) => {
  const dispatch = useDispatch();

  const [isOpenModal,SetIsOpenModal]=useState(false);
 const ModalHandler=()=>{
  SetIsOpenModal(!isOpenModal);
  
 }
 const isMarkedProduct =product.marked;
 console.log(product.marked);
 
 const [isMarked,setIsMarked] =useState(isMarkedProduct);

 const markedHandler =(event)=>{
  event.stopPropagation();//부모 엘리먼트에게도 이벤트가 전파되는 것을 방지
  setIsMarked(!isMarked);

  dispatch(toggleBookmark(product));
 }
  return (

    <article >
      {/* 모달창 */}
      {isOpenModal
          ? ReactDOM.createPortal(
              <Modal ModalHandler={ModalHandler} imgUrl={product.image_url} title={product.title} brandImg={product.brand_image_url} type={product.type} brandName={product.brandName} markedHandler={markedHandler} isMarked={isMarked}/>,
              document.getElementById('modal-root'),
            )
          : null}

      <Container onClick={ModalHandler}  >
        <div className="imgwrap">
          {product.type === 'Brand' ?<Cardimg src={product.brand_image_url} /> : <Cardimg src={product.image_url} /> }
          {/* 북마크 아이콘 */}
          {isMarked? 
          <div onClick={markedHandler}>
          <Star width="24" height="24" fill="#FFD361" className="starcard"  />
          </div>
          :  
          <div  onClick={markedHandler}>
          <Star width="24" height="24" fill="gray" className="starcard"/> 
          </div>
          }
        </div>
  
        {product.type === 'Product' ? (// 컴포넘트
          <div className='deswrap'>
            <Des>
              <h3>{product.title}</h3>
              <p className="discount"> {product.discount} %</p>
            </Des>
            <Des>
              <div></div>
              <p>{product.price} 원</p>
            </Des>
          </div>
        ) : product.type === 'Category' ? (
          <div>
            <Des>
              <h3># {product.title}</h3>
            </Des>
          </div>
        ) : product.type === 'Brand' ? (
          <div>
            <Des>
              <h3>{product.brandName}</h3>
              <p>관심고객수</p>
            </Des>
            <Des>
              <div></div>
              <p>{product.follower}</p>
            </Des>
          </div>
        ) : product.type === 'Exhibition' ? (
          <div>
            <Des>
              <h3>{product.title}</h3>
              <p></p>
            </Des>
            <Des>
              <div>{product.subtitle}</div>
            
            </Des>
          </div>
        ) : null
        }
        {}
      </Container>
    </article>
  );
};

export default Card;
