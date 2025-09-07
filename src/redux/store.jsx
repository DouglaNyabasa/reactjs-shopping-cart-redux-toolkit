import cartReducer from "./cartsSlice";
import { productsApi } from "./productApi";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer  from "./productSlice";




const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


export default store;
