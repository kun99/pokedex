<template>
  <div class="grid grid-cols-4">
    <div class="px-2 py-2" v-for="pokemon in pokemons" :pokemon="pokemon">
      <PokemonCard :pokemon="pokemon"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonCard from "../components/PokemonCard.vue";
import PokemonService from "@/services/PokemonService.js";

const pokemons = ref([]);

function fetchPokemonData() {
  PokemonService.getPokemons().then((response) => {
    pokemons.value = response.data;
  });
}

onMounted(() => {
  fetchPokemonData();
});
</script>
