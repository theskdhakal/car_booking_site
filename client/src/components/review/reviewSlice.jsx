import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const reviewslice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setreviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

const { reducer, actions } = reviewslice;

export const { setreviews } = actions;

export default reducer;
