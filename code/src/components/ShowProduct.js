import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { barcodeReducer } from 'reducers/barcodeReducer'
import { PieChart } from 'components/PieChart';
import styled from 'styled-components';
import { Button } from 'lib/Buttons';

export const ShowProduct = () => {
  const product = useSelector(store => store.reducer.product)
  const { product_name: name } = product
  const { fat_100g: fat, carbohydrates_100g: carb, sugars_100g: sugar, proteins_100g: protein } = product.nutriments
  const dispatch = useDispatch();

  const saveCurrent = () => {
    dispatch(barcodeReducer.actions.saveProduct(product))
  }

  return (
    <Wrapper>
      <div>
        <H3>{name}</H3>
        <table>
          <tbody>
            <Tr>
              <Th>Nutrients</Th>
              <Th>Per 100g</Th>
            </Tr>
            <Tr>
              <Td>Calories</Td>
              <Td>{product.nutriments['energy-kcal_value'] ? `${product.nutriments['energy-kcal_value']} kcal` : '-'}</Td>
            </Tr>
            <Tr>
              <Td>Fat</Td>
              <Td>{fat ? `${fat} g` : '-'}</Td>
            </Tr>
            <Tr>
              <Td>Carbohydrates</Td>
              <Td>{carb ? `${carb} g` : '-'}</Td>
            </Tr>
            <Tr>
              <Td>Sugars</Td>
              <Td>{sugar ? `${sugar} g` : '-'}</Td>
            </Tr>
            <Tr>
              <Td>Fiber</Td>
              <Td>{product.nutriments.fiber_100g ? `${product.nutriments.fiber_100g} g` : '-'}</Td>
            </Tr>
            <Tr>
              <Td>Proteins</Td>
              <Td>{protein ? `${protein} g` : '-'}</Td>
            </Tr>
          </tbody>
        </table>
        <AddButton type="button" onClick={() => saveCurrent()}>
          Add
        </AddButton>
      </div>
      <div>
        <PieChart product={product} size="300px" />
        <Square color="#2D3142">Sugars</Square>
        <Square color="#BFC0C0">Carbohydrates</Square>
        <Square color="#546A76">Proteins</Square>
        <Square color="#030027">Fat</Square>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 40px auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Tr = styled.tr`
  &:nth-child(even) {
  background-color: #ddd;
}
`

const Th = styled.th`
  text-align: left;
  &:nth-child(even) {
  text-align: right;
}

`

const Td = styled.td`
  width: 130px;
  padding: 5px 0;
  &:nth-child(even) {
  text-align: right;
}
`

const H3 = styled.h3`
  margin-top: 0;
`

const AddButton = styled(Button)`
  margin: 30px 0; 
`

const Square = styled.div`
  margin: 5px 0 0 35px;
  &::before {
    content: "";
    background-color: ${props => props.color};
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -25px;
  }
`