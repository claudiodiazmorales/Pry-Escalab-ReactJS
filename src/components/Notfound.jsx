import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h3>404 - Notfound</h3>
      <Link className="btn btn-dark" to="/">Volver</Link>
    </div>
  );
};

export default Notfound;
