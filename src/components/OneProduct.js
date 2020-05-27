import React from 'react';
import styled from 'styled-components';

const ProductPhoto = styled.img`
    width: 100%;
`;

const AddProduct = styled.button`
    background-color: #056571;
    color: white;
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;

    :hover {
        background-color: #414141;
    }
`;

const Box = styled.div`
    padding: 5px;
    background-color: white;
    border-radius: 20px;
    text-align: center;
`;

function OneProduct(props) {
    const {product} = props;
    const {onAddToCart} = props;

    return (
        <Box> 
            <ProductPhoto
            src={product.urlPhoto}
            alt="Stone"
            />
            <p>{product.name}</p>
            <p>R${product.value}</p>
            <AddProduct onClick={onAddToCart}>Comprar</AddProduct>
        </Box>
    )
}

export default OneProduct;