import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingslice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setbookings: (state, { payload }) => {
      state.bookings = payload;
    },
  },
});

const { reducer, actions } = bookingslice;

export const { setbookings } = actions;

export default reducer;
