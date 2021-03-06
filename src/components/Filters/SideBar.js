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
    margin: 5px 0;
    padding: 5px;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    width: 10vw;
    background: transparent;
    
    /*hide arrows from number input */
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
`

const InputText = styled.input`
    margin: 5px 0;
    padding: 5px;
    border: none;
    border-bottom: solid 1px;
    outline: none;
    width: 10vw;
    background: transparent;
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

            <h3>Filtros</h3>
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
                <InputText
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