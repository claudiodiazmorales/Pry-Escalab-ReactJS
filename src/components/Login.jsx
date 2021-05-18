import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loginUserAction } from '../redux/userDucks.js';
import Google from '../assets/img/pokemon_google.png';

import {withRouter} from 'react-router-dom';

const Login = (props) => {

  const dispatch = useDispatch();

  const loading = useSelector(store => store.users.loading);
  const active = useSelector(store => store.users.active);
  
  useEffect(() => {
    if (active){
      props.history.push('/')
    }
  }, [active, props.history])


  return (
    <div className="mt-5 text-center">
      <h3>INGRESE CON SU CUENTA DE</h3>
      <img src={Google} alt="google" className="img-fluid" width="300px" />
      <hr />
      <button className="btn btn-primary"
      onClick={()=>dispatch(loginUserAction())}
      disabled={loading}
      >
      ACCEDER
      </button>
    </div>
  )
}

export default withRouter(Login);
