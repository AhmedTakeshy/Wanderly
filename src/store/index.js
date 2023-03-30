import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import searchReducer from "./search-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
  },
});
export default store;
