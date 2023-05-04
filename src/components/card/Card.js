import React from "react";

import "./card.css";

const Card = (props) => {
  return (
    <article className="Card">
      <a href={"/logement/" + props.id}>
        <figure>
          <img src={props.cover} alt={props.title} className="logement-cover" />
          <footer className="figure-footer">
            <p className="logement-title">{props.title}</p>
          </footer>
        </figure>
      </a>
    </article>
  );
};

export default Card;
