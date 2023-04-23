import { createSlice } from "@reduxjs/toolkit";

const initialState = { auth: false };
const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    authenticate(state, action) {
      state.auth = action.payload;
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
