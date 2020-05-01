import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { barcodeReducer } from 'reducers/barcodeReducer'
import styled from 'styled-components';
import { PieChart } from "components/PieChart";


export const ListSaved = (getPercentage) => {
  const productsArray = useSelector(store => store.reducer.productsArray);

  const dispatch = useDispatch();

  return (
    <div>
      {productsArray.map((product, index) => (
        <div>{product.product_name}
          <PieChart product={product} size="150px" />
          <button type="button" onClick={() => dispatch(barcodeReducer.actions.removeProduct(index))}>
            -
          </button>
        </div>
      ))}

    </div>
  )
}
