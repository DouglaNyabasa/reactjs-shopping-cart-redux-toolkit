import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  cartItems: [],
  cartTotalQuantinty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantinty += 1;
        toast.info(`increased  ${state.cartItems[itemIndex].name}  Quantity`,{
            position: "bottom-left"
        })
      } else {
        const temptProduct = { ...action.payload, cartQuantinty: 1 };
        state.cartItems.push(temptProduct);
         toast.success(`${action.payload.name} added to cart` ,{
            position: "bottom-left"
        })
      }
      
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
