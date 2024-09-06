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

// Helper function to update total items and total amount
function updateTotals(state: CartState) {
  state.total = state.items.reduce((total, item) => total + item.qty, 0);
  state.amount = state.items.reduce((amount, item) => amount + item.price * item.qty, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds an item to the cart or increments its quantity if it already exists
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the item exists, only increment its quantity
        state.items[existingItemIndex].qty += 1;
      } else {
        // Add the item
        state.items.push(action.payload);
      }

      updateTotals(state);
    },
    // Removes one unit of an item or the item itself if quantity is 1
    removeItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (existingItemIndex !== -1) {
        // Decrease or remove item based on quantity
        if (state.items[existingItemIndex].qty > 1) {
          state.items[existingItemIndex].qty -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
      updateTotals(state);
    },
    // Removes all units of a specific item from the cart
    removeAll: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateTotals(state);
    },
    // Completely clears the cart
    deleteCart: (state) => {
      state.items = [];
      state.total = 0;
      state.amount = 0;
    },
  },
});

export const { addItem, removeItem, removeAll, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
