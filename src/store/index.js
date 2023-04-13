import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import searchReducer from "./search-slice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  ui: uiReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;

export let persistor = persistStore(store);
