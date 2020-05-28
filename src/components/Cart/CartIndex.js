import React from 'react';
import styled from 'styled-components';
import { CartItens } from './CartItens';

const CartWrapper = styled.div`
    border: none;
    border-radius: 20px;
    overflow: hidden;
    background-color: #C98474;
    text-align: center;
    padding: 20px;
    color: #22252C;
`
const Title = styled.h3`
    margin: 10px 5px;
`
const ShoppingList = styled.ul`
    list-style: none;
    margin: 10px 0;
    padding: 10px 0;
`

export class CartIndex extends React.Component {

    getCartList() {
        const shoppingList = this.props.productsOnCart.map((list) => {
            const shownLabel =`${list.quantity} x ${list.product.name}`
            const individualQuantity = list.quantity * list.product.value
            const totalValue = `R$${individualQuantity}`
            
            return (
                <CartItens 
                    key={list.product.name}
                    productShownName = {shownLabel}
                    quantityPerItem = {totalValue}
                    onDelete={() => this.props.deleteItens(list.product)}
                />
            )
        })
        return shoppingList
    }

    getCartTotal(){
        return this.props.productsOnCart.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.product.value * currentProduct.quantity
        }, 0)
    }

    render(){
        const shoppingList = this.getCartList()
        const shoppingTotal = this.getCartTotal()
        return(
            <CartWrapper>
                <Title>Carrinho de Compras</Title>
                <ShoppingList>
                    {shoppingList}
                </ShoppingList>
                <p>Total: <b>R$ {shoppingTotal}</b></p>
            </CartWrapper>
        )
    }
}
export default CartIndex;