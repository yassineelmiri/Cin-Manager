// reservationApiCall.js
import request from "../../utils/request"; // Utilitaire pour effectuer des appels API
import { reservationActions } from "../slices/reservationSlice";

export function createReservation(reservationData) {
  return async (dispatch) => {
    dispatch(reservationActions.setLoading());
    try {
      const { data } = await request.post("/api/reservations", reservationData);
      dispatch(reservationActions.setReservation(data));
    } catch (error) {
      dispatch(reservationActions.setError(error.response?.data?.message || "Erreur lors de la réservation"));
    } finally {
      dispatch(reservationActions.setLoading(false));
    }
  };
}
