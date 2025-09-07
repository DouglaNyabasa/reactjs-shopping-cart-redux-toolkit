import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "./redux/productSlice.jsx"

const store = configureStore({
  reducer:{
    products : productReducer
  },
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
    
  </StrictMode>,
)
