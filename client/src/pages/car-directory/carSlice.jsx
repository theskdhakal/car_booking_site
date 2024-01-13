import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, { payload }) => {
      state.cars = payload;
    },
  },
});

const { reducer, actions } = carSlice;

export const { setCars } = actions;

export default reducer;
