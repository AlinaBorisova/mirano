import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';
import orderReducer from './OrderSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  }
});

export default store;