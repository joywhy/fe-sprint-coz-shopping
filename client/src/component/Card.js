import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Star from '../icon/Star';
import Modal from './Modal';
import Backdrop from './Backdrop';
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
const Card = (props) => {
  const type= props.type;
  const title= props.title;
  const imgUrl= props.imgUrl;
  const discount= props.discount;
  const price= props.price;
  const brandName= props.brandName;
  const follower= props.follower;
  const brandImg= props.brandImg;
  const subTitle= props.subTitle;

  const [isOpenModal,SetIsOpenModal]=useState(false);
 const ModalHandler=()=>{
  SetIsOpenModal(!isOpenModal);
  
 }
 const [isMarked,setIsMarked] =useState(false);
 const markedHandler =(event)=>{
  event.stopPropagation();//부모 엘리먼트에게도 이벤트가 전파되는 것을 방지
  setIsMarked(!isMarked);
 }
  return (

    <article >
      {/* 모달창 */}
      {isOpenModal
          ? ReactDOM.createPortal(
              <Modal ModalHandler={ModalHandler} imgUrl={imgUrl} title={title} brandImg={brandImg} type={type} brandName={brandName} markedHandler={markedHandler} isMarked={isMarked}/>,
              document.getElementById('modal-root'),
            )
          : null}
              {isOpenModal
          ? ReactDOM.createPortal(
              <Backdrop ModalHandler={ModalHandler}/>,
              document.getElementById('backdrop-root'),
            )
          : null}  

      <Container onClick={ModalHandler}  >
        <div className="imgwrap">
          {type === 'Brand' ?<Cardimg src={brandImg} /> : <Cardimg src={imgUrl} /> }
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
  
        {type === 'Product' ? (// 컴포넘트
          <div className='deswrap'>
            <Des>
              <h3>{title}</h3>
              <p className="discount"> {discount} %</p>
            </Des>
            <Des>
              <div></div>
              <p>{price} 원</p>
            </Des>
          </div>
        ) : type === 'Category' ? (
          <div>
            <Des>
              <h3># {title}</h3>
            </Des>
          </div>
        ) : type === 'Brand' ? (
          <div>
            <Des>
              <h3>{brandName}</h3>
              <p>관심고객수</p>
            </Des>
            <Des>
              <div></div>
              <p>{follower}</p>
            </Des>
          </div>
        ) : type === 'Exhibition' ? (
          <div>
            <Des>
              <h3>{title}</h3>
              <p></p>
            </Des>
            <Des>
              <div>{subTitle}</div>
            
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
