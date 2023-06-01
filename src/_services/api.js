import data from "./logement.json";

// Récupere tous les logements
const getAllLogements = () => {
  return data;
};

// Récupere un logement selon son id
const getOneLogement = (id) => {
  return data.filter((appart) => appart.id === id)[0];
};

export { getAllLogements, getOneLogement };
