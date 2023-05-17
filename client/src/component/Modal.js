import React from 'react';
import styled from 'styled-components';
import CancelIcon from '../icon/CancelIcon';
import Star from '../icon/Star';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  > .CardModal {
    width: 744px;
    height: 480px;
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
        //border: 1px solid red;
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
    const ModalHandler = props.ModalHandler;
    const imgUrl = props.imgUrl;
    const title = props.title;
    const brandImg = props.brandImg;
    const type = props.type;
    const brandName = props.brandName;

  return (
    <Container>
      <div className="CardModal">
        <div className="backImg" style={type === "Brand" ? { backgroundImage: `url(${brandImg})` } : { backgroundImage: `url(${imgUrl})` }}>
            {/* 상단우측 x 버튼 background-image: {type==="Brand"?`url(/img.jpg)`:``}; */}
          <div className="x-icon" onClick={ModalHandler}>
            <CancelIcon width="24" height="24" />
          </div>
          {/* 하단 북마크 아이콘과 타이틀 */}
          <BottomWrap>
            <div className="star-icon">
              <Star width="24" height="24" fill="#FFD361" />
            </div>
            <h3>{type === "Brand" ?  brandName  : title }</h3>
          </BottomWrap>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
