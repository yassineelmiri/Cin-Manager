import request from "../../utils/request";
import { setSeances, setError } from "../slices/seanceSlice";

export const fetchSeancesByFilmId = (filmId) => async (dispatch) => {
  try {
    const { data } = await request.get(`/api/seances`);
    dispatch(setSeances(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
