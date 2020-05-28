import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.li`
    display: flex;
    justify-content: space-around;
    margin: 10px 5px;
    border-bottom: solid 1px #414141;
`;

const RemoveItem = styled.svg`
    width: 20px;
    height: 20px;
    fill: black;

    :hover{
        fill: red;
}
`

const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export function CartItens(props){

    return(
        <ListWrapper>
            {props.productShownName}
            <RemoveButton onClick={props.onDelete}>
                <RemoveItem xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </RemoveItem>
            </RemoveButton>

            {props.quantityPerItem}
        </ListWrapper>
    )
}