<template>
  <div class="grid grid-cols-4">
    <div class="px-2 py-2" v-for="pokemon in pokemons" :pokemon="pokemon">
      <PokemonCard :pokemon="pokemon"/>
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
