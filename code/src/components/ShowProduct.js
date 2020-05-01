import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { barcodeReducer } from 'reducers/barcodeReducer'
import { PieChart } from "components/PieChart";
import styled from 'styled-components';
import { Button } from 'lib/Buttons';


export const ShowProduct = () => {
  const product = useSelector(store => store.reducer.product)
  const { product_name: name } = product
  const { fat_100g: fat, carbohydrates_100g: carb, sugars_100g: sugar, proteins_100g: protein } = product.nutriments
  const productsArray = useSelector(store => store.reducer.productsArray)
  const dispatch = useDispatch();

  const saveCurrent = () => {
    dispatch(barcodeReducer.actions.saveProduct(product))
  }

  return (
    <Wrapper>
      <div>
        <H3>{name}</H3>

        <Tr>
          <Th>Nutrients</Th>
          <Th>Per 100g</Th>
        </Tr>
        <Tr>
          <Td>Kcal</Td>
          <Td>{product.nutriments["energy-kcal_value"]}</Td>
        </Tr>
        <Tr>
          <Td>Carbohydrates</Td>
          <Td>{carb}</Td>
        </Tr>
        <Tr>
          <Td>Sugars</Td>
          <Td>{sugar}</Td>
        </Tr>
        <Tr>
          <Td>Fiber</Td>
          <Td>{product.nutriments.fiber_100g}</Td>
        </Tr>
        <Tr>
          <Td>Proteins</Td>
          <Td>{protein}</Td>
        </Tr>
        <AddButton type="button" onClick={() => saveCurrent()}>
          Add
        </AddButton>
      </div>
      <div>
        <PieChart product={product} size="300px" />
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
  &:nth-child(odd) {
  background-color: #ddd;
}
`

const Th = styled.th`
  text-align: left;
`

const Td = styled.td`
  width: 130px;
  padding: 5px 0;
`

const H3 = styled.h3`
  margin-top: 0;
`

const AddButton = styled(Button)`
  margin-top: 20px; 
`