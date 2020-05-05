import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const barcodeReducer = createSlice({
  name: 'barcodeReducer',
  initialState: {
    product: null,
    productsArray: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload; //json.product from API
    },
    saveProduct: (state, action) => {
      state.productsArray.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.productsArray.splice(action.payload, 1);
    },
  },
})

//Thunk
export const getProduct = (code) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        if (json.status === 1) {
          dispatch(barcodeReducer.actions.setProduct(json.product))
        } else {
          console.log('Code not valid, try again')
        }
        dispatch(ui.actions.setLoading(false));
      });
  };
};
