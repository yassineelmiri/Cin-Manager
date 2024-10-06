import { authActions } from "../slices/aurhSlice";
import { toast } from "react-toastify";

// Login User
export function loginUser(user) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please try again.");
      }

      const data = await response.json();
      dispatch(authActions.login(data)); // Dispatch des données utilisateur
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please check your credentials.");
    }
  };
}
