import React from 'react';
import styled from 'styled-components';

const SideBarBox = styled.div`
    min-height: 60vh;
    border-radius: 20px;
    border: none;
    background-color: #C98474;
    padding: 20px;
    text-align: center;
    color: #22252C;
`;

export const SideBar = (props) => {
    return (
        <SideBarBox>
            <p>Filtros</p>
        </SideBarBox>
    )
}

export default SideBar;