import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    emptyCart: (state, action) => {
      state.products = [];
    },

    updateProductQuantity: (state, action) => {
      debugger
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.products[productIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, emptyCart, updateProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;
