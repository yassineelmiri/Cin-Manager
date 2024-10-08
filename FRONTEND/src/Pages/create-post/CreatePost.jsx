import React, { useState } from "react";
import Sidebar from "../Admin/SidebarAdmin";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/slices/postSlice"; // Assurez-vous que le chemin est correct

const CreatePost = () => {
  const dispatch = useDispatch(); // Initialisez dispatch pour appeler des actions
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("FullHD");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setImagePreview(previewUrl);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // Vérifiez que tous les champs sont remplis
    if (!title || !description || !file) {
      toast.error("Tous les champs sont requis !");
      return;
    }

    // Créer l'objet FormData
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    // Récupérer le token d'authentification
    const token = localStorage.getItem("token"); // Assurez-vous que le token est bien récupéré

    // Configuration des en-têtes pour la requête
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // Vérifiez que le token est bien formé
      },
    };

    try {
      // Envoyer la requête POST pour créer le post
      const response = await dispatch(createPost(formData)); // Utilisez la fonction createPost
      toast.success("Post créé avec succès !");
      console.log("Response:", response);
    } catch (error) {
      toast.error("Erreur lors de la création du post !");
      console.error("Erreur:", error);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <Sidebar />
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main__title">
                <h2>Ajouter un nouvel item</h2>
              </div>
            </div>

            <div className="col-12">
              <form onSubmit={formSubmitHandler} className="form">
                <div className="row">
                  <div className="col-12 col-md-5 form__cover">
                    <div className="form__img">
                      <label htmlFor="form__img-upload">
                        Télécharger la couverture (190 x 270)
                      </label>
                      <input
                        id="form__img-upload"
                        name="cover"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleImageChange}
                      />
                      {imagePreview && (
                        <img
                          id="form__img"
                          src={imagePreview}
                          alt="Aperçu de la couverture"
                          style={{ width: "190px", height: "270px" }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-7 form__content">
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Titre"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        id="text"
                        name="description"
                        className="form__textarea"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <select
                        className="form__input"
                        id="quality"
                        name="quality"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="Movie">Movie</option>
                        <option value="Comidia">Comidia</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                      </select>
                    </div>

                    <button type="submit" className="form__btn">
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
