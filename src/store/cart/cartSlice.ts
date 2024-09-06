import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the item exists, only increment its quantity
        state.items[existingItemIndex].qty += 1;
      } else {
        // Add the item
        state.items.push(action.payload);
      }

      // Update the total and amount
      state.total = state.items.reduce((total, item) => total + item.qty, 0);
      state.amount = state.items.reduce((amount, item) => amount + (item.price * item.qty), 0);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
