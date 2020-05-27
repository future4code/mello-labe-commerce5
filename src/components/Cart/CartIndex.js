import React, {Component} from 'react';
import styled from 'styled-components';
import { CartItens } from './CartItens';

const CartWrapper = styled.div`
    border: solid 1px black;
    min-height: 80vh;
`
const Title = styled.h3`
    margin: 10px 5px;
`
const ShoppingList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export class CartIndex extends Component {

    render(){
        return(
            <CartWrapper>
                <Title>Carrinho de compras:</Title>
                <ShoppingList>
                    {/* {list} */}
                </ShoppingList>
                <p>Total: <b>R$</b></p>
            </CartWrapper>
        )
        }
}
export default CartIndex;