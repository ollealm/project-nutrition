import React from "react";
<<<<<<< HEAD
import { BarcodeScanner } from "components/BarcodeScanner";

const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    });
};

export const App = () => {
  return (
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>
      <BarcodeScanner onDetected={onDetected}></BarcodeScanner>
    </div>
  );
};
=======
import { Provider } from 'react-redux';
import { ScanBarcode } from "components/ScanBarcode";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { barcodeReducer } from 'reducers/barcodeReducer';
import thunk from 'redux-thunk';


import { useDispatch, useSelector } from 'react-redux';

// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

const reducers = combineReducers(barcodeReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));




export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
    </Provider>


  );
};




{/* <ScanBarcode onDetected={onDetected} /> */ }
{/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */ }
>>>>>>> pie chart and save
