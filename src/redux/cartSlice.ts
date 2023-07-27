import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

type StateType = {
  products: {id: number; count: number}[];
};

const initialState: StateType = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existingProduct = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (existingProduct !== -1) {
        state.products[existingProduct].count += 1;
      } else {
        state.products.push({id: action.payload, count: 1});
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const existingProduct = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (state.products[existingProduct].count > 1) {
        state.products[existingProduct].count -= 1;
      } else {
        state.products = state.products.filter(el => el.id !== action.payload);
      }
    },
  },
});

export const {add, remove} = cartSlice.actions;

export const selectCartCount = (state: RootState) =>
  state.cart.products.reduce((acc, item) => acc + item.count, 0);

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
