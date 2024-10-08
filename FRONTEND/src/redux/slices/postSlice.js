// C:\Users\yassi\Desktop\projectJS3\cinemanager\FRONTEND\src\redux\slices\postSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Utilisation du token si nécessaire
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Erreur lors de la création du post.");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [], // Liste des posts
    selectedPost: null, // Post sélectionné
    loading: false, // Indicateur de chargement
    error: null, // Gestion des erreurs
    postsCount: 0, // Nombre total de posts
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setPostsCount: (state, action) => {
      state.postsCount = action.payload; // Stocker le nombre de posts
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
