import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isOrderOpen: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openOrder(state) {
      state.isOrderOpen = true;
    },
    closeOrder(state) {
      state.isOrderOpen = false;
    },
  }
});

export const {openOrder, closeOrder} = orderSlice.actions;
export default orderSlice.reducer;