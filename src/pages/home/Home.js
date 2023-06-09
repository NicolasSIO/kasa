import React, { useEffect, useState } from "react";

import { getAllLogements } from "@/_services/api";
import Card from "@/components/card/Card";
import "./home.css";

const Home = () => {
  const [logements, setLogement] = useState([]);

  useEffect(() => {
    setLogement(getAllLogements());
    // eslint-disable-next-line
  }, []);
  return (
    <main className="Home">
      <div className="home-banner">
        <img
          className="home-banner-img"
          src="./assets/img/home-banner.png"
          alt="Bannière"
        />
        <p className="banner-text">
          Chez vous, <span>partout et ailleurs</span>
        </p>
      </div>
      <section className="list-logement">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
