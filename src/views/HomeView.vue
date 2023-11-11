<template>
  <div>
    <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon">
    </PokemonCard>
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