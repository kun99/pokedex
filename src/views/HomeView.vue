<template>
  <div>
    <div v-for="pokemon in pokemons">
      {{ pokemon.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

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