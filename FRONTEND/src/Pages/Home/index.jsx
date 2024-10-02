import React, { useState } from 'react';
import Header from '../../home/header';
import Footer from '../../home/footer';
import '../../assets/css/main.css';
import '../../assets/css/bootstrap-grid.min.css';
import '../../assets/css/bootstrap-reboot.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/plyr.css';
import '../../assets/css/select2.min.css';
import '../../assets/css/slider-radio.css';
import '../../assets/css/owl.carousel.min.css';
import img1 from '../../assets/img/card/1.png';
import img2 from '../../assets/img/card/2.png';
import img3 from '../../assets/img/card/3.png';
export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const [selectedYear, setSelectedYear] = useState("All the years");
  const [selectedGrade, setSelectedGrade] = useState("featured");

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.id);
  };

  const cards = [
    {
      id: 1,
      imgSrc: img1,
      rating: 8.3,
      title: "The Good Lord Bird",
      list: ["Free", "Action", "2019"],
    },
    {
      id: 2,
      imgSrc: img2,
      rating: 8.1,
      title: "The Dictator",
      list: ["Free", "Comedy", "2012"],
    },
    {
      id: 3,
      imgSrc: img3,
      rating: 7.9,
      title: "Another Movie",
      list: ["Free", "Drama", "2021"],
    },
  ];

  return (
    <div>
     <Header />
      <div className="header__actions">
        <form action="#" className="header__form">
          <input
            className="header__form-input"
            type="text"
            placeholder="I'm looking for..."
          />
          <button
            className="header__form-btn"
            type="button"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
          <button
            type="button"
            className="header__form-close"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3345 0.000183105H5.66549C2.26791 0.000183105 0.000488281 2.43278 0.000488281 5.91618V14.0842C0.000488281 17.5709 2.26186 20.0002 5.66549 20.0002H14.3335C17.7381 20.0002 20.0005 17.5709 20.0005 14.0842V5.91618C20.0005 2.42969 17.7383 0.000183105 14.3345 0.000183105ZM5.66549 1.50018H14.3345C16.885 1.50018 18.5005 3.23515 18.5005 5.91618V14.0842C18.5005 16.7653 16.8849 18.5002 14.3335 18.5002H5.66549C3.11525 18.5002 1.50049 16.7655 1.50049 14.0842V5.91618C1.50049 3.23856 3.12083 1.50018 5.66549 1.50018ZM7.07071 7.0624C7.33701 6.79616 7.75367 6.772 8.04726 6.98988L8.13137 7.06251L9.99909 8.93062L11.8652 7.06455C12.1581 6.77166 12.6329 6.77166 12.9258 7.06455C13.1921 7.33082 13.2163 7.74748 12.9984 8.04109L12.9258 8.12521L11.0596 9.99139L12.9274 11.8595C13.2202 12.1524 13.2202 12.6273 12.9273 12.9202C12.661 13.1864 12.2443 13.2106 11.9507 12.9927L11.8666 12.9201L9.99898 11.052L8.13382 12.9172C7.84093 13.2101 7.36605 13.2101 7.07316 12.9172C6.80689 12.6509 6.78269 12.2343 7.00054 11.9407L7.07316 11.8566L8.93843 9.99128L7.0706 8.12306C6.77774 7.83013 6.77779 7.35526 7.07071 7.0624Z"
              />
            </svg>
          </button>
        </form>

        <button className="header__search" type="button" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
          </svg>
        </button>

        <a href="signin.html" className="header__user">
          <span>Sign in</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
        </a>
      </div>
      <div className="home home--static">
        <div className="home__carousel owl-carousel" id="flixtv-hero">
          <div className="home__card">
            <a href="details.html">
              <img src="../assets/img/home/1.jpg" alt="Money Plane" />
            </a>
            <div>
              <h2>Money Plane</h2>
              <ul>
                <li>Free</li>
                <li>Action</li>
                <li>2021</li>
              </ul>
            </div>
            <button className="home__add" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
              </svg>
            </button>
            <span className="home__rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
              </svg>{" "}
              9.1
            </span>
          </div>
        </div>
      </div>
      <div className="catalog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="catalog__nav">
                <div className="catalog__select-wrap">
                  <select
                    className="catalog__select"
                    name="genres"
                    onChange={handleGenreChange}
                    value={selectedGenre}
                  >
                    <option value="All genres">All genres</option>
                    <option value="Action/Adventure">Action/Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Dance">Dance</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>

                  <select
                    className="catalog__select"
                    name="years"
                    onChange={handleYearChange}
                    value={selectedYear}
                  >
                    <option value="All the years">All the years</option>
                    <option value="1">'50s</option>
                    <option value="2">'60s</option>
                    <option value="3">'70s</option>
                    <option value="4">'80s</option>
                    <option value="5">'90s</option>
                  </select>
                </div>

                <div className="slider-radio">
                  <input
                    type="radio"
                    name="grade"
                    id="featured"
                    checked={selectedGrade === "featured"}
                    onChange={handleGradeChange}
                  />
                  <label htmlFor="featured">Featured</label>
                  <input
                    type="radio"
                    name="grade"
                    id="popular"
                    checked={selectedGrade === "popular"}
                    onChange={handleGradeChange}
                  />
                  <label htmlFor="popular">Popular</label>
                  <input
                    type="radio"
                    name="grade"
                    id="newest"
                    checked={selectedGrade === "newest"}
                    onChange={handleGradeChange}
                  />
                  <label htmlFor="newest">Newest</label>
                </div>
              </div>

              <div className="row row--grid">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="col-6 col-sm-4 col-lg-3 col-xl-2"
                  >
                    <div className="card">
                      <a href="details.html" className="card__cover">
                        <img src={card.imgSrc} alt={card.title} />
                      </a>
                      <button className="card__add" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
                        </svg>
                      </button>
                      <span className="card__rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Z" />
                        </svg>
                        {card.rating}
                      </span>
                      <h3 className="card__title">
                        <a href="details.html">{card.title}</a>
                      </h3>
                      <ul className="card__list">
                        {card.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
