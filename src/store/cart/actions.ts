import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "./cartSlice";
import { RootState } from "..";

export interface CartApiData {
  items: Item[];
  total: number;
  amount: number;
}

export const addItem = createAction<Item>("cart/addItem");
export const removeItem = createAction<number>("cart/removeItem");
export const removeAll = createAction<number>("cart/removeAll");
export const deleteCart = createAction("cart/deleteCart");

//remember to run the command npx json-server --watch db.json --port 5000
// Create an asyncThunk to fetch cart data from the server
export const fetchCartData = createAsyncThunk<CartApiData>(
  "cart/fetchCartData",
  async () => {
    const response = await fetch("http://localhost:5000/cart");
    const data: CartApiData = await response.json();
    return data;
  }
);

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async (action, { getState }) => {
    const state = getState() as RootState;
    const { isLoading, ...cart } = state.cart;

    const response = await fetch("http://localhost:5000/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    const data = await response.json();
    return data;
  }
);
