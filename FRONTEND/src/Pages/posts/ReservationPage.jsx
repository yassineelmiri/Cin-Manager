// ReservationPage.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../redux/apiCalls/postApiCall"; // Pour récupérer les informations du film
import { createReservation } from "../../redux/apiCalls/reservationApiCall"; // Appel API pour créer une réservation

const ReservationPage = () => {
  const { id } = useParams(); // Récupérer l'ID du film depuis l'URL
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.selectedPost);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seat, setSeat] = useState("");

  useEffect(() => {
    // Récupérer les informations du film à partir de l'ID
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  const handleReservation = () => {
    const reservationData = {
      movieId: post._id,
      date,
      time,
      seat,
    };

    // Appel de l'API pour créer une réservation
    dispatch(createReservation(reservationData));
  };

  return (
    <div className="reservation-page">
      <h1>Réserver une séance pour {post?.title}</h1>
      <div>
        <label>Date :</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Heure :</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <label>Siège :</label>
        <input type="text" value={seat} onChange={(e) => setSeat(e.target.value)} placeholder="Numéro du siège" />
      </div>
      <button onClick={handleReservation}>Confirmer la réservation</button>
    </div>
  );
};

export default ReservationPage;
