<template>
  <div v-if="fetched" class="grid grid-cols-4">
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
import { db } from "@/js/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

const pokemons = ref([]);
const fetched = ref(false);

async function getPokemons() {
  onSnapshot(collection(db, "pokemons"), (querySnapshot) => {
    let pokemonsSnapshot = [];
    querySnapshot.forEach((doc) => {
      let pokemon = {
        name: doc.data().name,
        type1: doc.data().type1,
        type2: doc.data().type2,
        j_name: doc.data().j_name,
        evolution: doc.data().evolution,
        image: doc.data().image,
      };
      pokemonsSnapshot.push(pokemon);
    });
    pokemons.value = pokemonsSnapshot;
  });
}

onMounted(async () => {
  console.log("Connecting to Firebase");
  await getPokemons();
  fetched.value = true;
});
</script>
