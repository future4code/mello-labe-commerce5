import React from 'react';
import deleteIcon from '../../images/delete.svg';
import styled from 'styled-components';

const ListWrapper = styled.li`
    display: flex;
    justify-content: space-around;
    margin: 10px 5px;
    border-bottom: solid 1px #414141;

`
const RemoveItem = styled.span`
    background-image: "../../images/delete.svg";
    padding: 0 20px;
    transition: 0.5s;
    color: red;

    :hover{
        color: blue;
}
`

export function CartItens(props){
    return(
        <ListWrapper>
            {props.productShownName}
            <RemoveItem><img src={deleteIcon} /></RemoveItem>
            {props.quantityPerItem}
        </ListWrapper>
    )
}