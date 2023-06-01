import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getOneLogement } from "@/_services/api";
import Collapse from "@/components/collapse/Collapse";
import Gallery from "@/components/gallery/Gallery";

import Error from "@/pages/error/Error";

import "./logement.css";

const Logement = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    let log = getOneLogement(id);
    if (log) {
      setLogement(getOneLogement(id));
      setLoader(false);
    } else {
      setLoader(false);
      setError(true);
    }
    // eslint-disable-next-line
  }, []);

  if (loader) {
    return <div>Loading ...... </div>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className="Logement">
      <Gallery pictures={logement.pictures} />
      <div className="logement-container">
        <div className="logement-infos">
          <div>
            <h2 className="logement-name">{logement.title}</h2>
            <p className="logement-location">{logement.location}</p>
            <div className="logement-tags">
              {logement.tags.map((tag, i) => (
                <p key={i} className="tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="host-rating">
            <div className="logement-host">
              <p className="host-name">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
            <div className="rating">
              {ratings.map((rating, i) =>
                rating <= logement.rating ? (
                  <img
                    key={i}
                    src="/assets/icons/orangeStar.svg"
                    alt="rated"
                    class="star"
                  />
                ) : (
                  <img
                    key={i}
                    src="/assets/icons/greyStar.svg"
                    alt="unrated"
                    class="star"
                  />
                )
              )}
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="logement-details">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={logement.equipments.map((equipement, i) => (
              <p key={i}>{equipement}</p>
            ))}
          />
        </div>
      </div>
    </main>
  );
};

export default Logement;
