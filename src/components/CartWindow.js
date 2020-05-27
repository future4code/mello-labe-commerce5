import React from 'react';
import styled from 'styled-components';

const CartBox = styled.div`
    border: none;
    border-radius: 20px;
    overflow: hidden;
    background-color: #C98474;
    text-align: center;
    padding: 20px;
    color: #22252C;
`;

export const CartWindow = (props) => {
    return (
        <CartBox>
            <p>Carrinho</p>
        </CartBox>
    )
}

export default CartWindow;