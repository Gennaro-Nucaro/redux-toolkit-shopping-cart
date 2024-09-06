import { createSlice } from "@reduxjs/toolkit";

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
});

// export const { } = cartSlice.actions

export default cartSlice.reducer;
