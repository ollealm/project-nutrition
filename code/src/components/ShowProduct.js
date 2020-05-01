import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { barcodeReducer } from 'reducers/barcodeReducer'
import { ListSaved } from "components/ListSaved";
import { PieChart } from "components/PieChart";


// import { barcodeReducer } from 'reducers/barcodeReducer'
import styled from 'styled-components';

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
    <div>
      <p>{name}</p>
      <p>Kcal: {product.nutriments["energy-kcal_value"]}</p>
      <p>Fat: {fat}</p>
      <p>Carbohydrates: {carb}</p>
      <p>Sugars:{sugar}</p>
      <p>Fiber: {product.nutriments.fiber_100g}</p>
      <p>Proteins: {protein}</p>
      <PieChart product={product} size="300px" />
      <button type="button" onClick={() => saveCurrent()}>
        Add
      </button>
      {productsArray.length > 0 && (<div><ListSaved /></div>)}


    </div>
  )
}
