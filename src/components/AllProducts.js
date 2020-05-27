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
    text-shadow: grey 0.1em 0.1em 0.2em;
`;

const SelectHeight = styled.select`
    height: 30px;
    border-radius: 10px;
    border: none;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
`;

export const AllProducts = (props) => {
    const {products=[]} = props;
    const {buyProduct} = props;
    const {onChangeOrder} = props;

    return(
        <div> 
            <Header>
                <ShadowTitle>Pedras Preciosas</ShadowTitle>
                <p>Quantidade de Produtos: {products.length} </p>
                <SelectHeight onChange={onChangeOrder}>
                    <option value="increasing">Preço: Crescente</option>
                    <option value="decreasing">Preço: Decrescente</option>
                </SelectHeight>
            </Header>
            <ProductGrid>
                {products.map((product) => (
                    <OneProduct
                        key={product.name}
                        product={product}
                        onAddToCart={() => buyProduct(product)}
                    />
                ))}
            </ProductGrid>
        </div>
    )
}
  
export default AllProducts;