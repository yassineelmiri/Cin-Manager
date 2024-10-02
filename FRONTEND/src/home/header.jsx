import React from 'react'


export default function header() {
    
  return (
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

            <a href="index.html" className="header__logo">
              <img
                src="../assets/img/logo.svg"
                alt="Movies & TV Shows, Online cinema HTML Template"
              />
            </a>

            <ul className="header__nav">
              <li className="header__nav-item">
                <a className="header__nav-link">
                  Home
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
                    <a href="index.html">Home style 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home style 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home style 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>  )
}
