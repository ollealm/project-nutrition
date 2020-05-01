import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner'
import { getProduct } from 'reducers/barcodeReducer'
import { ShowProduct } from "components/ShowProduct";


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const product = useSelector(store => store.reducer.product)


  const dispatch = useDispatch();

  const onDetected = (code) => {
    if (product && product.id === code) { // Don't fetch same product twice
      // dont fetch
      return;
    }
    console.log(`Code: ${code}`);
    setShowScanner(false)
    dispatch(getProduct(code))


  };



  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={onDetected} />
      )}

      <div>
        <label>
          {" "}
        Test codes here:{" "}
          <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        </label>
        <p>
          {" "}
          7310865071927, 7310865066206 Type 7311070347272
      </p>
      </div>
      {product && (<ShowProduct />)}

    </>
  )
}