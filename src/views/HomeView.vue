<template>
  <div class="grid grid-cols-2">
    <div class="px-2" v-for="(pokemon, index) in pokemons" :pokemon="pokemon">
      <PokemonCard :pokemon="pokemon" :index="index" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PokemonCard from "../components/PokemonCard.vue";

const pokemons = ref([]);

function fetchPokemonData() {
  axios
    .get("https://my-json-server.typicode.com/kun99/pokemon-data/pokemon")
    .then((response) => {
      pokemons.value = response.data;
    });
}

onMounted(() => {
  fetchPokemonData();
});
</script>
