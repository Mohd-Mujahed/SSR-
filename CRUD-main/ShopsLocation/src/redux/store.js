import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shopDetailsReducer from "./slices/shopDetailsSlice";

const rootReducer = combineReducers({
  shopDetails: shopDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
