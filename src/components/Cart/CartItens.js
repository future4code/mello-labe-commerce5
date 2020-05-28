import React from 'react';
import deleteIcon from '../../images/delete.svg';
import styled from 'styled-components';

const ListWrapper = styled.li`
    display: flex;
    justify-content: space-around;
    margin: 10px 5px;
    border-bottom: solid 1px #414141;

<<<<<<< HEAD
`;

=======
`
>>>>>>> master
const RemoveItem = styled.span`
    background-image: "../../images/delete.svg";
    padding: 0 20px;
    transition: 0.5s;
<<<<<<< HEAD

    :hover{
        color: #056571;
}
`;
=======
    color: red;

    :hover{
        color: blue;
}
`
>>>>>>> master

export function CartItens(props){
    return(
        <ListWrapper>
            {props.productShownName}
<<<<<<< HEAD
            <RemoveItem><img src={deleteIcon} alt="Excluir Produto" /></RemoveItem>
=======
            <RemoveItem><img src={deleteIcon} /></RemoveItem>
>>>>>>> master
            {props.quantityPerItem}
        </ListWrapper>
    )
}