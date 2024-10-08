import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import postReducer from "./slices/postSlice";
import reservationReducer from "./slices/reservationSlice";
import salleReducer from "./slices/salleSlice";
import seanceReducer from "./slices/seanceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    reservation: reservationReducer,
    salle: salleReducer,
    seance: seanceReducer,
  },
});

export default store;
