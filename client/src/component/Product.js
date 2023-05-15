
import React from 'react';
import {Card,Container,Cardimg} from './Card';
const Product = () => {
    return (
        <Container>
            <div>
        <Cardimg src="./img.jpg" />
        {/* fill="#DFDFDF" */}
        <Star width="24" height="24" fill="#FFD361" className="starcard" />
      </div>

        </Container>
    );
};

export default Product;