<template>
  <div class="flex flex-col items-center justify-center" v-if="pokemon">
    <h1 class="text-3xl">{{ pokemon.name }} Details</h1>
    <div class="flex flex-row border border-gray-200 rounded-lg">
      <div class="flex flex-1 justify-center">
        <img :src="pokemon.image" />
      </div>
      <div class="flex-1">
        <div class="flex flex-row pt-5">
          <p class="text-red-500">{{ pokemon.name }} (</p>
          <p class="text-red-500">{{ pokemon.j_name }})</p>
        </div>
        <div class="flex flex-row">
          <p>{{ pokemon.type1 }}/</p>
          <p>{{ pokemon.type2 }}</p>
        </div>
        <div>
          <p class="pt-5">{{ pokemon.evolution }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center h-screen" v-else>
    <p class="text-3xl">Fetching data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonService from "@/services/PokemonService.js";

const pokemon = ref(null);

const props = defineProps({
  pokemon_name: { required: true },
});

function fetchPokemonData() {
  PokemonService.getPokemons().then((response) => {
    console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i]["name"] === props.pokemon_name) {
        pokemon.value = response.data[i];
        console.log(pokemon.value);
        break;
      }
    }
  });
}

onMounted(() => {
  fetchPokemonData();
});
</script>
