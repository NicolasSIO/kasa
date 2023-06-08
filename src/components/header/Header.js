import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <NavLink to="accueil">
          <img
            src="/assets/img/logo-orange.svg"
            alt="Logo Kasa"
            className="logo"
          />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="accueil"
              className={({ isActive }) =>
                isActive ? "header-link underline" : "header-link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="a-propos"
              className={({ isActive }) =>
                isActive ? "header-link underline" : "header-link"
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
