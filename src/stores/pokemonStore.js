import { defineStore } from "pinia";

// from https://pinia.vuejs.org/core-concepts/
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const usePokemonsStore = defineStore("pokemons", {
  state: () => ({ pokemons: [] }),
  getters: {
    getPokemons: (state) => {
      return (pokemonName) => state.pokemons.find((pokemon) => pokemon.name === pokemonName);
    },
  },
  actions: {
    setupPokemons(pokemons) {
      console.log(pokemons);
      this.pokemons = pokemons;
    },
  },
});
