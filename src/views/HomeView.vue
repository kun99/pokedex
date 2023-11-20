<template>
  <div v-if="fetched" class="grid grid-cols-4 py-4">
    <div class="px-2 py-2" v-for="pokemon in pokemons" :pokemon="pokemon">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
  <div v-else class="flex items-center justify-center h-screen">
    <p class="text-3xl">Fetching data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
import PokemonService from "@/services/PokemonService.js";

const pokemons = ref([]);
const fetched = ref(false);

function fetchPokemonData() {
  PokemonService.getPokemons().then((response) => {
    pokemons.value = response.data;
    fetched.value = true;
  });
}

onMounted(() => {
  fetchPokemonData();
});
</script>
