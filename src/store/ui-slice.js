import { createSlice } from "@reduxjs/toolkit";

const initialState = { black: false, cookies: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    changeColor(state, action) {
      state.black = action.payload;
    },
    changeCookies(state, action) {
      state.cookies = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
