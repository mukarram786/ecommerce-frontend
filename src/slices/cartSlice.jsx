import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    emptyCart:  (state, action) => {
      state.products = [];
    }
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
