import { createSlice } from "@reduxjs/toolkit";

const initialState = { locHistory: [] };
const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addLocation(state, action) {
      state.locHistory.push(action.payload);
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
