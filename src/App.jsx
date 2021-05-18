import React, { useState, useEffect, Suspense, lazy } from "react";
import { auth } from "./firebase/firebase.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Pokemons = lazy(() => import("./components/Pokemons"));
const Login = lazy(() => import("./components/Login"));
const Navbar = lazy(() => import("./components/Navbar"));
const Notfound = lazy(() => import("./components/Notfound"));
const Profile = lazy(() => import("./components/Profile"));

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

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (localStorage.getItem("user")) {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      if (userStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to="/login" {...rest} />;
      }
    } else {
      return <Redirect to="/login" {...rest} />;
    }
  };

  return firebaseUser !== false ? (
    <Router>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="container mt-3">
          <Navbar />
          <Switch>
            <PrivateRoute component={Pokemons} path="/" exact />
            <PrivateRoute component={Profile} path="/profile" exact />
            <Route component={Login} path="/login" exact />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  ) : (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default App;
