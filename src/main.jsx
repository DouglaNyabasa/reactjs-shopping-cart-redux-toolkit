import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from "./redux/productSlice";
// import cartReducer, { getTotals } from "./redux/cartSlice";
import { productsApi } from "./redux/productApi";

const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
    
  </StrictMode>,
)
