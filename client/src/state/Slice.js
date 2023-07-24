import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    removeState: (state) => {
      state.token = "";
      state.user = {};
    },
  },
});

export const { setUser, setToken, removeState } = slice.actions;
export default slice.reducer;
