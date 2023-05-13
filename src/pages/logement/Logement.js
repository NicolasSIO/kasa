import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getOneLogement } from "@/_services/api";

const Logement = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState({});

  useEffect(() => {
    setLogement(getOneLogement(id));
    // eslint-disable-next-line
  }, []);
  return <div className="Logement">{logement.title}</div>;
};

export default Logement;
