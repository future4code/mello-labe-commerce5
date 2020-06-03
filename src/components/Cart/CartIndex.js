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
`;

const Title = styled.h3`
    margin: 10px 5px;
`;

const ShoppingList = styled.ul`
    list-style: none;
    outline: none;
    margin: 10px 0;
    padding: 10px 0;
`;

const EmptyCartButton = styled.p`
    background-color: transparent;
    color: #22252C;
    border: none;
    cursor: pointer;
    font-size: 12px;

    :hover {
        color: red;
    }
`;

const TotalP = styled.p`
    color: #056571;
    font-size: 20px;
`;

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
                    onDelete={() => this.props.removeProductOnCart(list.product)}
                />
            )
        })
        return shoppingList
    }

    getCartTotal() {
        return this.props.productsOnCart.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.product.value * currentProduct.quantity
        }, 0)
    }

    render() {
        const shoppingTotal = this.getCartTotal()
        const shoppingList = (this.props.productsOnCart.length === 0) ? <p>Seu carrinho está vazio.</p> : this.getCartList()

        return(
            <CartWrapper>
                <Title>Carrinho de Compras</Title>
                <ShoppingList>
                    {shoppingList}
                </ShoppingList>
                <EmptyCartButton onClick={this.props.emptyCart}><u>Limpar Carrinho</u></EmptyCartButton>
                <TotalP>Total: <b>R$ {shoppingTotal}</b></TotalP>
            </CartWrapper>
        )
    }
}
export default CartIndex;