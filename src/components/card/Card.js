import React from "react";

import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <article className="Card">
      <Link to={"/logement/" + props.id}>
        <figure>
          <img src={props.cover} alt={props.title} className="logement-cover" />
          <footer className="figure-footer">
            <p className="logement-title">{props.title}</p>
          </footer>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
