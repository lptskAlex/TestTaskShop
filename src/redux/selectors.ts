import {RootState} from './store';

export const selectCartCount = (state: RootState) =>
  state.cart.products.length &&
  state.cart.products?.reduce((a, b) => a + b.count, 0);

export const selectCart = (state: RootState) => state.cart;
