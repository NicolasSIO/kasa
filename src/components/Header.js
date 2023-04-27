import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <img src="./assets/img/logo.svg" alt="Logo Kasa" className="logo" />
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
