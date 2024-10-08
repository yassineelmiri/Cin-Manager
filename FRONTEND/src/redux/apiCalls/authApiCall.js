import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";
import request from "../../utils/request";

//LOGINE USER
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);
      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
}

//Logout User
export function logoutUser() {
  return async (dispatch) => {
    dispatch(authActions.logout);
    localStorage.removeItem("userInfo");
  };
}

//REGISTER USER
export function registerUser(user) {
    return async (dispatch) => {
      try {
        const { data } = await request.post("/api/auth/register", user);
        dispatch(authActions.Register(data.message)); 
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again."); 
        }
      }
    };
}
