import {
  startReservation,
  reservationSuccess,
  reservationError,
} from "../slices/reservationSlice";
import request from "../../utils/request";
export const makeReservation = (reservationData) => async (dispatch) => {
  dispatch(startReservation());
  try {
    const response = await request.get("/api/reservations", reservationData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(reservationSuccess(response.data));
  } catch (error) {
    dispatch(reservationError(error.message));
  }
};
