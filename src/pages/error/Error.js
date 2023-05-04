import React from "react";
import { Link } from "react-router-dom";

import "./error.css";

const Error = () => {
  return (
    <main className="Error">
      <div className="error-container">
        <span className="error-404">404</span>
        <span className="error-text">
          Oups! La page que vous demandez n'existe pas
        </span>
        <span>
          <Link to="accueil" className="error-link">
            Retourner sur la page d'accueil
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Error;
