// src/redux/slices/salleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const salleSlice = createSlice({
  name: "salle",
  initialState: {
    salles: [],           // Liste des salles
    salleCount: 0,        // Nombre total de salles
    loading: false,       // Indicateur de chargement
    error: null,          // Gestion des erreurs
  },
  reducers: {
    setSalles: (state, action) => {
      state.salles = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setSalleCount: (state, action) => {
      state.salleCount = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const salleActions = salleSlice.actions;
export default salleSlice.reducer;
