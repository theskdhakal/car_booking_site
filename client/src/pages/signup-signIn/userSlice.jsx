import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, setUsers } = actions;

export default reducer;
