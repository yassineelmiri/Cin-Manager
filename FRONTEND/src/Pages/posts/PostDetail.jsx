import React, { useEffect, useState } from "react";
import Header from "../../home/header";
import Footer from "../../home/footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/apiCalls/postApiCall";
import { fetchSeancesByFilmId } from "../../redux/apiCalls/seanceApiCall"; // Import API call pour récupérer les séances
import { makeReservation } from "../../redux/apiCalls/reservationApiCall"; // Import de l'appel d'API pour la réservation

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post.selectedPost);
  const seances = useSelector((state) => state.seance.seances);
  const error = useSelector((state) => state.post.error);
  const [places, setPlaces] = useState(1); // État pour le nombre de places

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(fetchSeancesByFilmId(id));
  }, [dispatch, id]);

  const handleReservation = (seanceId) => {
    const reservationData = {
      seance: seanceId,
      places: places,
    };
    dispatch(makeReservation(reservationData)); // Appel à l'action de réservation
  };

  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <>
      <Header />
      <section className="section section--head section--head-fixed section--gradient section--details-bg">
        <div
          className="section__bg"
          style={{
            backgroundImage: `url(${post.image.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="article">
            <div className="row">
              <div className="col-12 col-xl-8">
                <Link
                  to={post.trailerUrl ? post.trailerUrl : "#"}
                  className="article__trailer open-video"
                >
                  Trailer
                </Link>

                <div className="article__content">
                  <h1>Film # {post.title}</h1>
                  <ul className="list">
                    <li>{post.category || "No rating available"}</li>
                    <li>{post.list?.join(", ") || "No list items"}</li>
                  </ul>

                  <p>Trailer : { post.description || "No description available"}</p>
                </div>
                <hr />

                {/* Section des séances */}
                <div className="article__content">
                  <h2>Available Seances</h2>
                  <div className="seances-list">
                    {seances.length === 0 ? (
                      <p>No seances available</p>
                    ) : (
                      seances.map((seance) => (
                        <div key={seance._id} className="seance-card">
                          <p className="seance-info">
                            <strong>Salle:</strong> {seance.salle.nom}
                          </p><hr />
                          <p className="seance-info">
                            <strong>Horaire:</strong> {new Date(seance.horaire).toLocaleString()}
                          </p><hr />
                          <p className="seance-info">
                            <strong>Tarif:</strong> {seance.tarif} MAD
                          </p><hr />
                          <div>
                            <h4 htmlFor={`places-${seance._id}`}>Number of Seats:</h4>
                            <input
                              type="number"
                              id={`places-${seance._id}`}
                              value={places}
                              onChange={(e) => setPlaces(e.target.value)}
                              min="1"
                              className="header__form-input"
                            />
                          </div><hr />
                          <button
                            className="sign__btn"
                            onClick={() => handleReservation(seance._id)}
                          >
                            Réserver
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostDetail;
