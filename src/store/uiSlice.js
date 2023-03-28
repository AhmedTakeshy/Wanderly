import { createSlice } from "@reduxjs/toolkit";

const initialState = { black: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    changeColor(state) {
      state.black = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
