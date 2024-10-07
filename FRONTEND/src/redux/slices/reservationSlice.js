import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservation: null,  // État pour stocker les détails de la réservation effectuée
    loading: false,     // État de chargement lors de la création d'une réservation
    error: null,        // État pour gérer les erreurs
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true; // Indiquer que le processus de réservation a commencé
      state.error = null;   // Réinitialiser l'erreur
    },
    setReservation: (state, action) => {
      state.reservation = action.payload; // Stocker la réservation réussie dans l'état
      state.loading = false;              // Fin du chargement
    },
    setError: (state, action) => {
      state.error = action.payload;       // Stocker l'erreur
      state.loading = false;              // Fin du chargement
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;
