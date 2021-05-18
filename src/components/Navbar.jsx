import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/img/pokemon_logo_PNG14.png';

import {closeSessionAction} from '../redux/userDucks.js';

const Navbar = (props) => {

  const dispatch = useDispatch();

  const closeSession = ()=>{
    dispatch(closeSessionAction());
    props.history.push('/login');
  };

  const active = useSelector(store => store.users.active);

  return (
    <div className="navbar navbar-dark bg-danger">
      <Link className="navbar-brand" to="/"><img src={Logo} alt="" className="img-fluid" width="200px" /></Link>
      <div className="d-flex">

      {
        active ? (
          <>
            <NavLink className="btn btn-danger mr-2" to="/" exact>Inicio</NavLink>
            <NavLink className="btn btn-danger mr-2" to="/profile" exact>Perfil</NavLink>
            <button className="btn btn-danger mr-2"
            onClick={()=>closeSession()}
            >Cerrar Sesión</button>
          </>

        ): (
            <NavLink className="btn btn-danger mr-2" to="/login" exact>Login</NavLink>
        )
      }
      </div>
    </div>
  )
}

export default withRouter(Navbar);
