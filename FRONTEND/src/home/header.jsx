import React, { useState } from "react";
import logo from "../assets/img/series/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [dropdown, setDropdown] = useState(false);

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
                    <a
                      className="header__nav-link"
                      href="#"
                      role="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
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
                    </a>

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
                    <a
                      className="header__nav-link header__nav-link--more"
                      href="#"
                      role="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.93893 14.3033C6.08141 14.3033 5.38477 13.6067 5.38477 12.7505C5.38477 11.8943 6.08141 11.1963 6.93893 11.1963C7.79644 11.1963 8.49309 11.8943 8.49309 12.7505C8.49309 13.6067 7.79644 14.3033 6.93893 14.3033Z" />
                        <path d="M12.7501 14.3033C11.8926 14.3033 11.1959 13.6067 11.1959 12.7505C11.1959 11.8943 11.8926 11.1963 12.7501 11.1963C13.6076 11.1963 14.3042 11.8943 14.3042 12.7505C14.3042 13.6067 13.6076 14.3033 12.7501 14.3033Z" />
                        <path d="M18.5625 14.3033C17.705 14.3033 17.0083 13.6067 17.0083 12.7505C17.0083 11.8943 17.705 11.1963 18.5625 11.1963C19.42 11.1963 20.1166 11.8943 20.1166 12.7505C20.1166 13.6067 19.42 14.3033 18.5625 14.3033Z" />
                      </svg>
                    </a>

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
