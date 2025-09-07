import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import  { productsFetch } from "./redux/productSlice";




store.dispatch(productsFetch());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
