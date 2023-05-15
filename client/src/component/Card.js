import React from 'react';
import styled from 'styled-components';
import Star from '../icon/Star';
const Container = styled.div`
  width: 264px;
  height: 264px;
  position: relative;

  > .imgwrap {
    position: relative;
    margin-bottom: 6px;
    > .starcard {
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

  border-radius: 12px;
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
const Card = ({ type, title, imgUrl, discount, price ,brandName,follower,brandImg,subTitle}) => {
  return (
    <article>
      <Container>
        <div className="imgwrap">
          {type === 'Brand' ?<Cardimg src={brandImg} /> : <Cardimg src={imgUrl} /> }
          <Star width="24" height="24" fill="#FFD361" className="starcard" />
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
