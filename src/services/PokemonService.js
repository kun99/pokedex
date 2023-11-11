import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/kun99/pokemon-data",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPokemons() {
    return apiClient.get("/pokemon");
  },
  getPokemon(pokemon) {
    return apiClient.get("/pokemon" + pokemon);
  },
};
