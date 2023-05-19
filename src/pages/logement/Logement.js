import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getOneLogement } from "@/_services/api";
import Collapse from "@/components/collapse/Collapse";

import "./logement.css";

const Logement = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState({});

  useEffect(() => {
    setLogement(getOneLogement(id));
    // eslint-disable-next-line
  }, []);

  const hostName = logement.host.name;

  console.log(hostName);

  return <main className="Logement"></main>;
};

export default Logement;
