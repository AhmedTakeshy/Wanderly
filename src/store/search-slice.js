import { createSlice } from "@reduxjs/toolkit";

const initialState = { hotelsData: [], searchHistory: [] };
const searchSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    addHotelsData(state, action) {
      state.hotelsData.push(action.payload);
    },
    addSearchData(state, action) {
      state.searchHistory.push(action.payload);
    },
    addSearchImg(state, action) {
      const index = state.searchHistory.length - 1;
      state.searchHistory[index].url = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
