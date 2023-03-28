import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
  },
});
export default store;
