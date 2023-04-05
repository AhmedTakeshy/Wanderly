import { createSlice } from "@reduxjs/toolkit";

const initialState = { addHotelsData: [] };
const searchSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    addHotelsData(state, action) {
      state.addHotelsData.push(action.payload);
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
