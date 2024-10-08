import { salleActions } from "../slices/salleSlice";
import request from "../../utils/request"; // Assurez-vous d'avoir configuré axios ou fetch

// Fetch all salles
export const fetchSalles = () => {
  return async (dispatch) => {
    dispatch(salleActions.setLoading());
    try {
      const { data } = await request.get("/api/salles");
      dispatch(salleActions.setSalles(data));
    } catch (error) {
      dispatch(salleActions.setError(error.response?.data?.message || "Erreur lors de la récupération des salles"));
    }
  };
};

// Get salles count
export const getSalleCount = () => {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/salles/count");
      dispatch(salleActions.setSalleCount(data));
    } catch (error) {
      dispatch(salleActions.setError(error.response?.data?.message || "Erreur lors du comptage des salles"));
    }
  };
};
