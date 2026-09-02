import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Configure store with slices
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});