import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/aurhSlice"; // Utilisez une importation nommée
import postReducer from "./slices/postSlice";
import reservationReducer from "./slices/reservationSlice";  // Importer le slice de réservation

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    reservation: reservationReducer,
  },
});

export default store;
