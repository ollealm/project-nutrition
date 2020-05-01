import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { barcodeReducer } from 'reducers/barcodeReducer'
import { PieChart } from "components/PieChart";
import styled from 'styled-components';
import { ButtonBracket } from 'lib/Buttons';


export const ListSaved = () => {
  const productsArray = useSelector(store => store.reducer.productsArray);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {productsArray.map((product, index) => (
        <ChartContainer>
          <h4>
            {product.product_name}
            <Remove type="button" onClick={() => dispatch(barcodeReducer.actions.removeProduct(index))}>
              -
            </Remove>
          </h4>
          <Click onClick={() => dispatch(barcodeReducer.actions.setProduct(product))}>
            <PieChart product={product} size="150px" />
          </Click>
        </ChartContainer>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  margin: 20px 0;
  @media (min-width: 768px) {
    width: 25%;
  }
`

const Click = styled.div`
  cursor: pointer;
`

const Remove = styled(ButtonBracket)`
  display: inline;
  margin-left: 5px;
`