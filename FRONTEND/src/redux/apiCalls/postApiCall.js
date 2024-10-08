import request from "../../utils/request";
import { toast } from "react-toastify";
import { postActions } from "../slices/postSlice";

// Fetch Posts Based on Page Number
export function fetchPost(pageNumber) {
  return async (dispatch) => {
    dispatch(postActions.setLoading()); // Commencer le chargement
    try {
      const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Erreur lors de la récupération des posts.");
    } finally {
      dispatch(postActions.setLoading(false)); // Arrêtez le chargement
    }
  };
}

export function fetchPostById(id) {
  return async (dispatch) => {
    dispatch(postActions.setLoading()); // Commencez le chargement
    try {
      const { data } = await request.get(`/api/posts/${id}`);
      console.log("Data received: ", data); // Log pour vérifier les données
      dispatch(postActions.setSelectedPost(data));
    } catch (error) {
      const message = error.response?.data?.message || "Une erreur s'est produite";
      dispatch(postActions.setError(message));
      toast.error(message);
    } finally {
      dispatch(postActions.setLoading(false)); // Arrêtez le chargement
    }
  };
}

// Get Posts[Film] Count
export function getPostCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/count`);
      dispatch(postActions.setPostsCount(data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Erreur lors de la récupération du nombre de posts.");
    }
  };
}
