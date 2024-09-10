import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import {
  addItemReducer,
  deleteCartReducer,
  fetchCartDataFulfilledReducer,
  removeAllReducer,
  removeItemReducer,
  saveCartFulfilledReducer,
  startLoadingReducer,
  stopLoadingReducer,
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
      .addCase(fetchCartData.fulfilled, fetchCartDataFulfilledReducer)
      .addCase(saveCart.fulfilled, saveCartFulfilledReducer)
      .addMatcher(isPending, startLoadingReducer)
      .addMatcher(isRejected, stopLoadingReducer);
  },
});
export { addItem, removeItem, removeAll, deleteCart };

export default cartSlice.reducer;
