<template>
  <div class="grid grid-cols-4 py-4">
    <div class="px-2 py-2" v-for="pokemon in pokemons" :pokemon="pokemon">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
import { storeToRefs } from "pinia";
import { usePokemonsStore } from "@/stores/pokemonStore.js";

const pokemons = ref([]);

const pokemonsStore = usePokemonsStore();
const { getPokemons } = storeToRefs(pokemonsStore);

async function usingStore() {
  pokemons.value = await getPokemons.value;
  console.log(pokemons.value);
}

onMounted(async () => {
  usingStore();
});
</script>
