import React, { useState, useEffect } from "react";
import Pokemons from "./components/Pokemons";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";

import { auth } from "./firebase/firebase.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const PrivateRoute = ({component, path, ...rest})=>{

    if(localStorage.getItem('user')){
      const userStorage = JSON.parse(localStorage.getItem('user'));
      if (userStorage.uid === firebaseUser.uid){
        return <Route component={component} path={path} {...rest}/>
      }else{
        return <Redirect to="/login" {...rest}/>  
      }
    }else{
      return <Redirect to="/login" {...rest}/>
    }
  }


  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar />

        <Switch>
          <PrivateRoute component={Pokemons} path="/" exact />
          <PrivateRoute component={Profile} path="/profile" exact/>
          <Route component={Login} path="/login" exact/>
          <Route component={Notfound}/>
        </Switch>
      </div>
    </Router>
  ) : (<div>cargando ...</div>);
}

export default App;
