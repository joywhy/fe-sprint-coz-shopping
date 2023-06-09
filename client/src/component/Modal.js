import React from 'react';
import styled from 'styled-components';
import CancelIcon from '../icon/CancelIcon';
import Star from '../icon/Star';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 10;
  > .CardModal {
    width: 60%;
    height: 60%;
    filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5)); //어떤 영향?
    border-radius: 1rem;

    > .backImg {
      position: relative;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      //#d9d9d9
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      .x-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
      
    }
  }
`;
const BottomWrap =styled.div`
position: absolute;
bottom: 1rem;
left: 1rem;
display: flex;
align-items: baseline;
color: #FFFFFF;
>h3{
    margin-left: 0.5rem;
    font-size: 1.5rem;
}
;

`;

const Modal = (props) => {
    const {
      ModalHandler,
      imgUrl,
      title,
      brandImg,
      type,
      brandName,
      markedHandler,
      isMarked
    }= props;

  return (
    <Backdrop onClick={ModalHandler}> 
      <div className="CardModal">
        <div className="backImg" style={type === "Brand" ? { backgroundImage: `url(${brandImg})` } : { backgroundImage: `url(${imgUrl})` }}>
        {/* 상단우측 x  버튼  */}
        <div className="x-icon" onClick={ModalHandler}>
            <CancelIcon width="24" height="24" />
          </div>
          {/* 하단 북마크 아이콘과 타이틀 */}
          <BottomWrap>
            {isMarked? 
          <div onClick={markedHandler}>
          <Star width="24" height="24" fill="#FFD361" className="starcard"  />
          </div>
          :  
          <div  onClick={markedHandler}>
          <Star width="24" height="24" fill="gray" className="starcard"/> 
          </div>
          }
            <h3>{type === "Brand" ?  brandName  : title }</h3>
          </BottomWrap>
        </div>
      </div>
    </Backdrop>
  );
};

export default Modal;
