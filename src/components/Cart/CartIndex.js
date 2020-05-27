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

    getCartList(){
        const shoppingList = this.props.cart.map(itens => {
            const productName = `${itens.quantity}x ${itens.product.name}`

            return(
                <CartItens
                    key={itens.product.name}
                    productName={productName}
                    onDelete={() => this.props.removeCartItem(itens.product)}
                />
            )
        })
        return shoppingList
    }

    getCartTotal(){
        return this.props.cart.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.product.value * currentProduct.quantity
        }, 0)
    }

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