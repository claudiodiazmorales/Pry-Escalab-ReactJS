import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import {closeSessionAction} from '../redux/userDucks.js';

const Navbar = (props) => {

  const dispatch = useDispatch();

  const closeSession = ()=>{
    dispatch(closeSessionAction());
    props.history.push('/login');
  };

  const active = useSelector(store => store.users.active);

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">APP Pokemon</Link>
      <div className="d-flex">

      {
        active ? (
          <>
            <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
            <NavLink className="btn btn-dark mr-2" to="/profile" exact>Perfil</NavLink>
            <button className="btn btn-dark mr-2"
            onClick={()=>closeSession()}
            >Cerrar Sesión</button>
          </>

        ): (
            <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>
        )
      }
      </div>
    </div>
  )
}

export default withRouter(Navbar);
