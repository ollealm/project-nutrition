import React from 'react';
import { Provider } from 'react-redux';
import { ScanBarcode } from 'components/ScanBarcode';
import { Header } from 'components/Header';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { barcodeReducer } from 'reducers/barcodeReducer';
import { ui } from 'reducers/ui';
import { LoadingIndicator } from 'components/LoadingIndicator';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  ui: ui.reducer,
  reducer: barcodeReducer.reducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ScanBarcode />
      <LoadingIndicator />
    </Provider>
  );
};