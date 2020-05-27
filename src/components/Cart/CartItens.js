import React from 'react';
import deleteIcon from '../../images/delete.svg';
import styled from 'styled-components';

const ListWrapper = styled.li`

`
const RemoveItem = styled.img`
    padding-right: 20px;
    transition: 0.5s;
    color: white;
    :hover{
        color: blue;
    }
`

export function CartItens(props){
    return(
        <ListWrapper>
            {props.itemLabel}
            <RemoveItem src={deleteIcon} />
        </ListWrapper>
    )
}