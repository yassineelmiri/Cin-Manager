import React from "react";
import logo from "../../assets/img/series/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Récupération des informations utilisateur depuis le state
  const { user } = useSelector((state) => state.auth); // Extraction directe de user depuis state.auth

  return (
    <>
      {/* Pour vérifier la structure des données */}
      {console.log(user)}

      <header className="header">
        <div className="header__content">
          <a href="/" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <button className="header__btn" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className="sidebar">
        <a href="/" className="sidebar__logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="sidebar__user">
          <div className="sidebar__user-title">
            {/* Vérification de isAdmin pour afficher Admin ou User */}
            <span>{user?.isAdmin ? "Admin" : "User"}</span>
            {/* Affichage du nom d'utilisateur */}
            <p>{user?.username || "Anonymous"}</p>
          </div>
        </div>

        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <Link
              to="/admin"
              className="sidebar__nav-link sidebar__nav-link--active"
            >
              Statistique
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/posts/create-post" className="sidebar__nav-link">
              Ajout Film
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
