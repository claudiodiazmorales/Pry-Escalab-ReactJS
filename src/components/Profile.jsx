import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector(store => store.users.user);
  console.log(user);


  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={user.photoURL} alt="" width="100px" className="img-fluid" />
          <h5 className="card-title">Nombre: {user.displayName}</h5>
          <p className="card-text">
            Email: {user.email}
          </p>
          <button className="btn btn-primary">
            Editar nombre
          </button>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-md-5">

            <div className="input-group mb-3">
              <input 
                  type="text" 
                  className="form-control" 
              />
              <div className="input-group-append">
                <button 
                  className="btn btn-primary" 
                  type="button" 
                >
                  Actualizar
                </button>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
