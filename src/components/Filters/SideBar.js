import React from 'react'
import styled from 'styled-components'

const SideBarBox = styled.div`
    min-height: 60vh;
    border-radius: 20px;
    border: none;
    background-color: #C98474;
    padding: 20px;
    text-align: center;
    color: #22252C;
`

const FieldSearch = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const InputValue = styled.input`
    margin-top: 5px;
    border: none;
    border-bottom: solid 1px;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
`

export const SideBar = (props) => {

    const returnUpdatedMinValue = event => {
        const value = Number(event.target.value)

        const updatedValues = {
            "minValue": value,
        }

        props.onChangeValue(updatedValues)
    }

    const returnUpdatedMaxValue = event => {
        const value = Number(event.target.value)

        const updatedValues = {
            "maxValue": value,
        }

        props.onChangeValue(updatedValues)
    }
    
    return (
        <SideBarBox>
            <h2>Filtros</h2>

            <FieldSearch>
                <label>Valor Mínimo:</label>
                <InputValue
                    type="number"
                    name="minVal"
                    min={0}
                    onChange={returnUpdatedMinValue}
                />
            </FieldSearch>

            <FieldSearch>
                <label>Valor Máximo:</label>
                <InputValue
                    type="number"
                    name="maxVal"
                    onChange={returnUpdatedMaxValue}
                />
            </FieldSearch>

            <FieldSearch>
                <label>Buscar Produto:</label>
                <InputValue
                    type="text"
                    name="searchNome"
                    value={props.searchProductValue}
                    onChange={props.newSearchValue}
                />
            </FieldSearch>

        </SideBarBox>
    )
}

export default SideBar;