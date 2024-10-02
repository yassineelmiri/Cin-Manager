import React from "react";
import '../../assets/css/main.css';

// Importez les images que vous souhaitez afficher
import logo from '../../assets/img/logo.svg'; // Assurez-vous que le chemin est correct
import bgImage from '../../assets/img/bg.jpg'; // Assurez-vous que le chemin est correct

export default function SignIn() {
  return (
    <div className="sign section--full-bg" style={{ backgroundImage: `url(${bgImage})` }}> {/* Utilisation de l'image de fond */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <form className="sign__form">
                <a href="/" className="sign__logo">
                  <img src={logo} alt="Logo" /> {/* Affichage du logo */}
                </a>
                <div className="sign__group">
                  <input type="email" className="sign__input" placeholder="Email" />
                </div>
                <div className="sign__group">
                  <input type="password" className="sign__input" placeholder="Password" />
                </div>
                <div className="sign__group sign__group--checkbox">
                  <input id="remember" name="remember" type="checkbox" defaultChecked />
                  <label htmlFor="remember">Remember Me</label>
                </div>

                <button className="sign__btn" type="button">Sign In</button>

                <span className="sign__delimiter">or</span>
                <span className="sign__text">Don't have an account? <a href="/signup">Sign up!</a></span>
                <span className="sign__text"><a href="/forgot">Forgot password?</a></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
