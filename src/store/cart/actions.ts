import { createAction } from '@reduxjs/toolkit';
import { Item } from './cartSlice';

export const addItem = createAction<Item>('cart/addItem');
export const removeItem = createAction<number>('cart/removeItem');
export const removeAll = createAction<number>('cart/removeAll');
export const deleteCart = createAction('cart/deleteCart');