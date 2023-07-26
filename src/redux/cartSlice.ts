import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

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
      const tmp = state.products;
      const existingProduct = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (existingProduct !== -1) {
        tmp[existingProduct].count += 1;
        state.products = tmp;
      } else {
        tmp.push({id: action.payload, count: 1});
      }
      state.products = tmp;
    },
    remove: (state, action: PayloadAction<number>) => {
      const tmp = state.products;
      const existingProduct = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (tmp[existingProduct].count > 1) {
        tmp[existingProduct].count -= 1;
        state.products = tmp;
      } else {
        state.products = tmp.filter(el => el.id !== action.payload);
      }
    },
  },
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;
