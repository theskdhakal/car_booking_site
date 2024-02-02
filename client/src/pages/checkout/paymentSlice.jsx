import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payment: {},
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayment: (state, { payload }) => {
      state.payment = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;

export const { setPayment } = actions;

export default reducer;
