import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner'
import { getProduct, barcodeReducer } from 'reducers/barcodeReducer'
import { ShowProduct } from 'components/ShowProduct';
import { ListSaved } from 'components/ListSaved';
import { Button, ButtonBracket } from 'lib/Buttons';
import styled from 'styled-components';

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const product = useSelector(store => store.reducer.product)
  const productsArray = useSelector(store => store.reducer.productsArray)

  const dispatch = useDispatch();

  const onDetected = (code) => {
    setShowScanner(false);
    if (product && product.id === code) { // Don't fetch same product twice
      console.log('Code same as current product');
      return;
    };
    if (productsArray.length > 0 && productsArray.find(product => product.id === code)) {
      console.log('Code in saved products');
      dispatch(barcodeReducer.actions.setProduct(productsArray.find(product => product.id === code)))
      return;
    };
    console.log(`New code: ${code}`);
    dispatch(getProduct(code));
  };

  return (
    <Wrapper>
      <Code>
        {!showScanner && (
          <Button type="button" onClick={() => setShowScanner(true)}>
            Start scanner
          </Button>
        )}
        <Manual>
          <label>
            Or enter barcode:{' '}
            <Input type="text" onChange={(e) => onDetected(e.target.value)} />
          </label>
          <Links>
            <ButtonBracket onClick={() => dispatch(getProduct(7311070347272))}>Giflar</ButtonBracket>
            <ButtonBracket onClick={() => dispatch(getProduct(7300156573186))}>Milk</ButtonBracket>
            <ButtonBracket onClick={() => dispatch(getProduct(7318693440007))}>Potatos</ButtonBracket>
          </Links>
        </Manual>
      </Code>

      {showScanner && (
        <BarcodeScanner onDetected={onDetected} />
      )}

      {product && (<ShowProduct />)}
      {productsArray.length > 0 && (<ListSaved />)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  max-width: 750px;
  margin: auto;
`

const Manual = styled.div`
  text-align: center;
  width:fit-content;
`

const Code = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  flex-direction: column;
  height: 150px;
  width: 80%;
  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0;
  padding: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover {
    border: 1px solid #000;
    outline: none;
  }
  &:focus {
    border: 1px solid #000;
    box-shadow: 0 0 2px 2px #bbb;
  }
  &:focus ~ button {
    border: 1px solid #000;
    outline: none;
    color: #000;
  }
  &::placeholder {
    color: #ccc;
  }
`;

const Links = styled.div`
  margin-left: auto;
  text-align: right;
  width: fit-content;

  @media (max-width: 488px) {
    margin: auto;
  }
`