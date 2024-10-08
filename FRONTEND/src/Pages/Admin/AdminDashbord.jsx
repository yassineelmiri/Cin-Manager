// src/Pages/admin/AdminDashbord.jsx
import React, { useEffect, useState } from "react";
import "../../assets/css/admin.css";
import Sidebar from "./SidebarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, getPostCount } from "../../redux/apiCalls/postApiCall";
import { fetchSalles, getSalleCount } from "../../redux/apiCalls/salleApiCall"; // Importez les actions pour les salles
import { Link } from "react-router-dom";

const AdminDashbord = () => {
  const { postsCount } = useSelector((state) => state.post);
  const { salleCount } = useSelector((state) => state.salle);  // Récupérez salleCount de Redux
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
    dispatch(getPostCount());
    dispatch(fetchSalles());       // Fetch salles
    dispatch(getSalleCount());     // Fetch salle count
    window.scrollTo(0, 0);
  }, [dispatch, currentPage]);

  return (
    <div>
      <Sidebar />
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main__title">
                <h2>Dashboard</h2>
                <Link to='/posts/create-post' className="main__title-link">
                  Add post
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Number of Films</span>
                <p>{postsCount || 0}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Number of Salles</span>
                <p>{salleCount || 0}</p> 
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Reservation</span>
                <p>15</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Seance</span>
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashbord;
