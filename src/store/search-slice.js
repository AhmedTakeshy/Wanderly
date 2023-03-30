import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchResult: [] };
const searchSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    getData(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
