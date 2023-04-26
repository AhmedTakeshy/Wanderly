import { createSlice } from "@reduxjs/toolkit";

const initialState = { locHistory: [], destinations: [] };
const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addLocation(state, action) {
      state.locHistory.push(action.payload);
    },
    addDestination(state, action) {
      // check if destination already exists
      const existingDestination = state.destinations.find(
        (destination) => destination.id === action.payload.id
      );
      if (!existingDestination) {
        state.destinations.push(action.payload);
      }
    },
    removeDestination(state, action) {
      // check if destination already exists
      const existingDestination = state.destinations.find(
        (destination) => destination.id === action.payload.id
      );
      if (existingDestination) {
        state.destinations = state.destinations.filter(
          (destination) => destination.id !== action.payload.id
        );
      }
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
