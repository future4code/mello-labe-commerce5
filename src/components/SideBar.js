import React from 'react'
import styled from 'styled-components'

const SideBarBox = styled.div`
    min-height: 60vh;
    border-radius: 20px;
    border: none;
    background-color: #C98474;
    padding: 20px;
    text-align: start;
    color: #22252C;
`

const FieldSearch = styled.div`
    margin: 10px 0;

`

export const SideBar = (props) => {

    return (
        <SideBarBox>
            <h2>Filtros:</h2>

            <FieldSearch>
                <label>Valor Mínimo:</label>
                <input
                    type="number"
                    name="minVal"
                />
            </FieldSearch>

            <FieldSearch>
                <label>Valor Máximo:</label>
                <input
                    type="number"
                    name="maxVal"
                />
            </FieldSearch>

            <FieldSearch>
                <label>Buscar Produto:</label>
                <input
                    type="text"
                    name="busca"
                />
            </FieldSearch>

        </SideBarBox>
    )
}

export default SideBar;