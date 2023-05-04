import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <Link to="accueil">
          <img
            src="/assets/img/logo-orange.svg"
            alt="Logo Kasa"
            className="logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="accueil">Accueil</Link>
          </li>
          <li>
            <Link to="a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
