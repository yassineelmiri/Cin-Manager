import React, { useEffect } from "react";
import Header from "../../home/header";
import Footer from "../../home/footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/apiCalls/postApiCall";
import logo from "../../assets/img/series/bg.jpg";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Récupérez le post depuis l'état Redux
  const post = useSelector((state) => state.post.selectedPost);
  const error = useSelector((state) => state.post.error);

  // Log pour vérifier les données de post
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Selected post: ", post); // Log pour vérifier si les données sont bien récupérées
  }, [post]);

  // Vérifiez l'état de chargement, d'erreur et de post
  console.log("Error: ", error);

  if (error) {
    return <p>Error: {error}</p>; // Afficher un message d'erreur
  }

  // Assurez-vous que `post` n'est pas null avant de tenter d'accéder à ses propriétés
  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <>
      <Header />
      <section className="section section--head section--head-fixed section--gradient section--details-bg">
        <div
          className="section__bg"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="container">
          <div className="article">
            <div className="row">
              <div className="col-12 col-xl-8">
                <a
                  href={post.trailerUrl ? post.trailerUrl : "#"}
                  className="article__trailer open-video"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  </svg>
                  Trailer
                </a>

                <div className="article__content">
                  <h1>{post.title}</h1>
                  <ul className="list">
                    <li>{post.rating || "No rating available"}</li>
                    <li>{post.list?.join(", ") || "No list items"}</li>
                  </ul>

                  <div className="article__btns">
                    <a href={`/reserve/${post._id}`} className="article__btn">
                      Reservation New
                    </a>
                    <a
                      href="pricing.html"
                      className="article__btn article__btn--white"
                    >
                      Pricing plans
                    </a>
                  </div>

                  <p>{post.description || "No description available"}</p>
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
