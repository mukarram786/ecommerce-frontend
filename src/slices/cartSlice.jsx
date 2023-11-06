import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [{
    name: "dsdsdsd",
    quantity: "10"
  },
  {
    name: "dsdsdsd",
    quantity: "10"
  }],
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
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

// Action creators are generated for each case reducer function
// export const { addCartItem, removeCartItem } = cartSlice.actions;

// export default cartSlice.reducer;

// store.dispatch(
//   addCartItem({
//     productHash: 'product1',
//     productItem: { name: 'Product 1', price: 10.99 },
//   })
// );

// store.dispatch(
//   addCartItem({
//     productHash: 'product2',
//     productItem: { name: 'Product 2', price: 15.99 },
//   })
// );

// store.dispatch(
//   addCartItem({
//     productHash: 'product3',
//     productItem: { name: 'Product 3', price: 8.99 },
//   })
// );
