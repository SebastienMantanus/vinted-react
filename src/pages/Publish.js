import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, SetTitle] = useState("ex: : chemise verte");
  const [description, SetDescription] = useState("ex: : portée quelques fois");
  const [brand, SetBrand] = useState("ex : Hugo Boss");
  const [size, SetSize] = useState("ex : par ex : taille 38");
  const [color, setColor] = useState("ex : Rouge et bleue");
  const [condition, SetCondition] = useState("ex : Neuf");
  const [price, setPrice] = useState(0);
  const [city, SetCity] = useState("Paris");
  const [picture, SetPicture] = useState(null);
  const navigate = useNavigate();

  return token ? (
    <div className="publish-background">
      <container className="publish-container">
        <h1>Vends ton article</h1>

        {/* FORM PUBLISHING */}

        <form
          className="publish-form"
          onSubmit={async (event) => {
            event.preventDefault();

            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("condition", condition);
            formData.append("price", price);
            formData.append("picture", picture);

            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + token,
                  },
                }
              );
              console.log(response.data);
              // const objectId = response.data._id;
              navigate(`/product/${response.data._id}`);
            } catch (error) {
              console.log(error.response);
            }
          }}
        >
          <div className="publish-form-divs">
            <input
              type="file"
              onChange={(event) => {
                SetPicture(event.target.files[0]);
              }}
            ></input>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="title">Titre</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => {
                  SetTitle(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="description">Décris ton article</label>
              <textarea
                id="description"
                cols="40"
                rows="5"
                value={description}
                onChange={(event) => {
                  SetDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="marque">Marque</label>
              <input
                id="marque"
                type="text"
                value={brand}
                onChange={(event) => {
                  SetBrand(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="taille">Taille</label>
              <input
                id="taille"
                type="text"
                value={size}
                onChange={(event) => {
                  SetSize(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="couleur">Couleur</label>
              <input
                id="couleur"
                type="text"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="etat">Etat</label>
              <input
                id="etat"
                type="text"
                value={condition}
                onChange={(event) => {
                  SetCondition(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="lieu">Lieu</label>
              <input
                id="lieu"
                type="text"
                value={city}
                onChange={(event) => {
                  SetCity(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="prix">Prix</label>
              <input
                id="prix"
                type="number"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </container>
    </div>
  ) : (
    <Navigate to="/signup" />
  );
};
export default Publish;
