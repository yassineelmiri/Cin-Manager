import React from "react";
import logo from "../assets/img/series/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <header className="header header--static">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <button className="header__menu" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <a href="/" className="header__logo">
                  <img
                    src={logo}
                    alt="Movies & TV Shows, Online cinema HTML Template"
                  />
                </a>

                <ul className="header__nav">
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="/"
                      role="button"
                      id="dropdownMenu2"
                    >
                      Home{" "}
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z" />
                      </svg>
                    </Link>

                    <ul
                      className="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <a href="index">Home style 1</a>
                      </li>
                      <li>
                        <a href="index2">Home style 2</a>
                      </li>
                      <li>
                        <a href="index3">Home style 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="/posts"
                      role="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Liste Film{" "}
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z" />
                      </svg>
                    </Link>

                    <ul
                      className="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenu1"
                    >
                      <li>
                        <Link to="/posts">Liste Film</Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/posts"
                          role="button"
                          id="dropdownMenuSub"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Liste Film{" "}
                          <svg
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      to="/signup"
                      className="header__nav-link"
                      href="pricing"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="header__nav-item">


                    <ul
                      className="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li>
                        <a href="about">About</a>
                      </li>
                      <li>
                        <a href="404">404 Page</a>
                      </li>
                      <li>
                        <a href="contact">Contacts</a>
                      </li>
                      <li>
                        <a href="privacy">Privacy policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="header__auth">
                  <button className="header__search" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>
                  {user ? (
                    <>
                      <div
                        onClick={() => dispatch(logoutUser())}
                        className="sign__btn"
                      >
                        log-out
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/signin" className="sign__btn">
                        sign-in
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
