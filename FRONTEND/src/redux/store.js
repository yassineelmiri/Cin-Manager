// C:\Users\yassi\Desktop\projectJS3\cinemanager\FRONTEND\src\redux\store.js
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice"; // Utilisez l'importation nommée ici
import postReducer from "./slices/postSlice";
import reservationReducer from "./slices/reservationSlice"; // Importer le slice de réservation
import salleReducer from "./slices/salleSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    reservation: reservationReducer,
    salle: salleReducer,
  },
});

export default store;
