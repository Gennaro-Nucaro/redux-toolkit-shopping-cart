import { createSlice } from "@reduxjs/toolkit";
import { addItemReducer, deleteCartReducer, removeAllReducer, removeItemReducer } from "./reducers";
import { addItem, removeItem, removeAll, deleteCart } from "./actions";

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
}

const initialState: CartState = {
  items: [],
  total: 0,
  amount: 0,
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
  },
});
export { addItem, removeItem, removeAll, deleteCart };

export default cartSlice.reducer;
