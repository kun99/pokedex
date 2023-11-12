<template>
  <div class="flex flex-col items-center justify-center pt-10" v-if="pokemon">
    <div class="flex flex-col items-center w-[750px] py-6 bg-slate-100 border rounded-md">
      <h1 class="text-3xl">{{ pokemon.name }}</h1>
      <div class="flex flex-row">
        <div class="flex justify-center">
          <img
            class="bg-slate-200 border rounded-md border-gray-200 px-5 py-5"
            :src="pokemon.image"
          />
        </div>
        <div class="w-[450px] pl-10">
          <div class="pt-5 text-lg">Japanese Name:</div>
          <div class="flex flex-row">
            <p class="text-black">{{ pokemon.j_name }}</p>
          </div>
          <div class="pt-5 text-lg">Type:</div>
          <div class="flex flex-row">
            <div class="bg-slate-200 border rounded-md px-5 mr-1">
              <p>{{ pokemon.type1 }}</p>
            </div>
            <div class="bg-slate-200 border rounded-md px-5">
              <p>{{ pokemon.type2 }}</p>
            </div>
          </div>
          <div class="pt-5 text-lg">Evolution:</div>
          <div>
            <p>{{ pokemon.evolution }}</p>
          </div>
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
