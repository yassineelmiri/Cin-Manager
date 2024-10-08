import React from "react";
import logo from "../../assets/img/series/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { user } = useSelector((state) => state.auth); // Extraction directe de user depuis state.auth

  return (
    <>
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
            <span>{user?.isAdmin ? "Admin" : "User"}</span>
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
