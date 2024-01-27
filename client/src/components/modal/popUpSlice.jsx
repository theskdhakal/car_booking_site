import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupShow: false,
};

const popupShowSlice = createSlice({
  name: "popupShow",
  initialState,
  reducers: {
    setPopupShow: (state, { payload }) => {
      state.popupShow = payload;
    },
  },
});

const { reducer, actions } = popupShowSlice;

export const { setPopupShow } = actions;

export default reducer;
