import { PayloadAction } from "@reduxjs/toolkit";
import { CartState, Item } from "./cartSlice";

const updateTotals = (state: CartState) => {
    state.total = state.items.reduce((total, item) => total + item.qty, 0);
    state.amount = state.items.reduce((amount, item) => amount + (item.price * item.qty), 0);
};

export const addItemReducer = (state: CartState, action: PayloadAction<Item>) => {
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

    if (existingItemIndex !== -1) {
        // Se l'elemento esiste, incrementa solo la quantità
        state.items[existingItemIndex].qty += 1;
    } else {
        // Aggiunge l'elemento
        state.items.push(action.payload);
    }

    updateTotals(state);
};

export const removeItemReducer = (state: CartState, action: PayloadAction<number>) => {
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
    if (existingItemIndex !== -1) {
        // Decrementa o rimuove l'elemento in base alla quantità
        if (state.items[existingItemIndex].qty > 1) {
            state.items[existingItemIndex].qty -= 1;
        } else {
            state.items.splice(existingItemIndex, 1);
        }
    }
    updateTotals(state);
};

export const removeAllReducer = (state: CartState, action: PayloadAction<number>) => {
    state.items = state.items.filter(item => item.id !== action.payload);
    updateTotals(state);
};

export const deleteCartReducer = (state: CartState) => {
    state.items = [];
    state.total = 0;
    state.amount = 0;
};
