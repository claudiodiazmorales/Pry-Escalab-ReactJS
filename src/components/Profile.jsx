import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserNameAction, editPhotoAction } from "../redux/userDucks.js";

const Profile = () => {
  const user = useSelector((store) => store.users.user);
  const loading = useSelector((store) => store.users.loading);

  const [userName, setUserName] = useState(user.displayName);
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const updateUserName = () => {
    if (!userName.trim()) {
      console.log("nombre vacio");
      return;
    }

    dispatch(updateUserNameAction(userName));
    setFormActive(false);
  };

  const selectPhoto = img => {
    console.log(img.target.files[0]);
    const imgClient = img.target.files[0];

    if (imgClient === undefined) {
      console.log("no se subio imagen");
      return;
    }

    if (imgClient.type === "image/png" || imgClient.type === "image/jpg" || imgClient.type === "image/jpeg") {
      dispatch(editPhotoAction(imgClient));
      console.log('foto ok');
      setError(false);
    } else {
      setError(true);
      console.log('no subio imagen');
      return;

    }
  };

  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={user.photoURL} alt="" width="100px" className="img-fluid" />
          <h5 className="card-title">Nombre: {user.displayName}</h5>
          <p className="card-text">Email: {user.email}</p>
          <button
            className="btn btn-primary"
            onClick={() => setFormActive(true)}
          >
            Editar nombre
          </button>

          {error && (
            <div className="alert alert-warning mt-3">
              Solo archivos PNG, JPG o JPEG
            </div>
          )}

          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              style={{ display: "none" }}
              onChange={(e) => selectPhoto(e)}
              disabled = {loading}
            />
            <label
              className={loading ? "btn btn-dark mt-4 mb-5 disabled" : "btn btn-dark mt-4 mb-5"}
              htmlFor="inputGroupFile01"

            >
              Actualizar Imagen
            </label>
          </div>
        </div>
        {loading && (
          <div className="card-body">
            <div className="d-flex justify-content-center mt-3">
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        {formActive && (
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => updateUserName()}
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
