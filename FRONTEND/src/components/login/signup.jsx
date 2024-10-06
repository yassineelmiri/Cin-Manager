import React, { useState } from "react"; // Correction de l'import de useState
import { Link } from "react-router-dom"; // Utilisation de Link pour la navigation
import "../../assets/css/main.css";
import { toast } from "react-toastify";

import logo from "../../assets/img/series/logo.png";
import bgImage from "../../assets/img/bg.jpg";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      return toast.error("Username is required");
    }
    if (email.trim() === "") {
      return toast.error("Email is required");
    }
    if (password.trim() === "") {
      return toast.error("Password is required");
    }
    console.log({ username, email, password });
  };

  return (
    <div
      className="sign section--full-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <form onSubmit={formSubmitHandler} className="sign__form">
                <Link to="/" className="sign__logo">
                  <img src={logo} alt="Logo" />
                </Link>
                <div className="sign__group">
                  <input
                    type="text"
                    className="sign__input"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Mise à jour du username
                  />
                </div>
                <div className="sign__group">
                  <input
                    type="email"
                    className="sign__input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'email
                  />
                </div>
                <div className="sign__group">
                  <input
                    type="password"
                    className="sign__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Mise à jour du password
                  />
                </div>
                <div className="sign__group sign__group--checkbox">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    defaultChecked
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <button type="submit" className="sign__btn" >
                  Sign Up
                </button>{" "}
                {/* Correction du type pour soumettre le formulaire */}
                <span className="sign__delimiter">or</span>
                <span className="sign__text">
                  Don't have an account? <Link to="/signin">Sign in!</Link>
                </span>
                <span className="sign__text">
                  <Link to="/forgot">Forgot password?</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
