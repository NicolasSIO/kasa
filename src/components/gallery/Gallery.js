import React, { useState } from "react";

import "./gallery.css";

const Gallery = (props) => {
  const [index, setIndex] = useState(1);

  const next = () => {
    if (index === props.pictures.length) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index <= 1) {
      setIndex(props.pictures.length);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="Gallery">
      <div className="gallery-container">
        {props.pictures.length > 1 ? (
          <>
            <button className="gallery-prev" onClick={prev}>
              <img
                src="/assets/icons/leftArrow.svg"
                alt="Média précedent"
                className="arrow"
              />
            </button>
            <div className="gallery-media-container">
              <img
                src={props.pictures[index - 1]}
                alt="logement preview"
                key={index}
                className="gallery-media"
              />
              <p className="gallery-index">
                {index}/{props.pictures.length}
              </p>
            </div>
            <button className="gallery-next" onClick={next}>
              <img
                src="/assets/icons/rightArrow.svg"
                alt="Média suivant"
                className="arrow"
              />
            </button>
          </>
        ) : (
          <div className="gallery-media-container">
            <img
              src={props.pictures[index - 1]}
              alt="logement preview"
              key={index}
              className="gallery-media"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
