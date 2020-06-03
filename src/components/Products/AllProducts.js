import React from 'react';
import styled from 'styled-components';

import OneProduct from './OneProduct';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    height: 10vh;
    background-color: #414141;
    padding-right: 20px;
    padding-left: 20px;
    color: white;
    border-radius: 10px;
`;

const ShadowTitle = styled.h2`
    text-shadow: silver 5px 5px 10px;
`;

const SelectHeight = styled.select`
    height: 30px;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
`;

export const AllProducts = (props) => {
    const {products} = props;
    const {addProduct} = props;
    const {onChangeOrder} = props;

    return(
        <div> 
            <Header>
                <ShadowTitle>Pedras Preciosas</ShadowTitle>
                <p>Quantidade de Produtos: {products.length} </p>
                <div>
                    <label>Ordernar Por:</label>
                    <SelectHeight onChange={onChangeOrder}>
                        <option value="empty"></option>
                        <option value="increasing">Menor Valor</option>
                        <option value="decreasing">Maior Valor</option>
                        <option value="name">Nome A-Z</option>
                        <option value="nameReverse">Nome Z-A</option>
                    </SelectHeight>
                </div>
            </Header>
            <ProductGrid>
                {products.map((product) => (
                    <OneProduct
                        key={product.name}
                        product={product}
                        onAddToCart={() => addProduct(product)}
                    />
                ))}
            </ProductGrid>
        </div>
    )
}
  
export default AllProducts;