import { createSlice } from "@reduxjs/toolkit";
import {
  addItemReducer,
  deleteCartReducer,
  removeAllReducer,
  removeItemReducer,
} from "./reducers";
import {
  addItem,
  removeItem,
  removeAll,
  deleteCart,
  fetchCartData,
  saveCart,
} from "./actions";

export interface Item {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface CartState {
  items: Item[];
  total: number;
  amount: number;
  isLoading: boolean;
}

const initialState: CartState = {
  items: [],
  total: 0,
  amount: 0,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem, addItemReducer)
      .addCase(removeItem, removeItemReducer)
      .addCase(removeAll, removeAllReducer)
      .addCase(deleteCart, deleteCartReducer)
      //get cart
      .addCase(fetchCartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        // Handle the fulfilled state by setting the cart data
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.amount = action.payload.amount;
        state.isLoading = false;
      })
      .addCase(fetchCartData.rejected, (state) => {
        state.isLoading = false;
      })
      //save cart
      .addCase(saveCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveCart.fulfilled, (state) => {
        // Handle the fulfilled state by setting the cart data
        state.isLoading = false;
        alert("cart saved !!!");
      })
      .addCase(saveCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export { addItem, removeItem, removeAll, deleteCart };

export default cartSlice.reducer;
