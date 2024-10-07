import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [], // État pour stocker les posts
    selectedPost: null, // État pour stocker le post sélectionné
    loading: false, // État de chargement
    error: null, // État pour stocker les erreurs
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload; // Stocker les posts dans l'état
      state.loading = false; // Fin du chargement
    },
    setLoading: (state) => {
      state.loading = true; // Début du chargement
      state.error = null; // Réinitialiser les erreurs
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload; // Stocker le post sélectionné
      state.loading = false; // Fin du chargement
    },
    setError: (state, action) => {
      state.error = action.payload; // Stocker l'erreur
      state.loading = false; // Fin du chargement
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
