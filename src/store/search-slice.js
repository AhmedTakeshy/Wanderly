import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchResult: [], history: [] };
const searchSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    getData(state, action) {
      state.searchResult.push(action.payload);
    },
    history(state, action) {
      state.history.push(action.payload);
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
