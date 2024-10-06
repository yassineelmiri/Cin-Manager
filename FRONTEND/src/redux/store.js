import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/aurhSlice"; // Correction : "aurhSlice" -> "authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
