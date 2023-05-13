import data from "./logement.json";

const getAllLogements = () => {
  return data;
};

const getOneLogement = (id) => {
  return data.filter((appart) => appart.id === id)[0];
};

export { getAllLogements, getOneLogement };
