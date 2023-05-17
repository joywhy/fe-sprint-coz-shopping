import React from 'react';
import styled from "styled-components";
const Container =styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(255, 255, 255, 0.4);;
z-index: 9;
`;
const Backdrop = ({ModalHandler}) => {
    return (
        <Container  >
            {/* onClick={ModalHandler}  Conatiner 에 ModalHandler를 적용하고 싶었으나 z-index 가 높은
            Modal 컴포넌트 내에 있는 Container 가 완전히 겹쳐서 ModalHandler가 동작하지 않는 것으로 예상됩니다.
            */}
        </Container>
    );
};

export default Backdrop;