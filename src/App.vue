<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { onBeforeMount } from "vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/js/firebase.js";
import { pokemons } from "@/js/pokemons.js";

/*
  this is to add all the pokemons to the firestore
  from an array in a js file
*/
async function savePokemons() {
  pokemons.forEach(async function (pokemon) {
    await setDoc(doc(db, "pokemons", pokemon.name), {
      name: pokemon.name,
      type1: pokemon.type1,
      type2: pokemon.type2,
      j_name: pokemon.j_name,
      evolution: pokemon.evolution,
      image: pokemon.image,
    });
  });
}

onBeforeMount(async () => {
  console.log("Connecting to Firebase");
  await savePokemons().then(console.log("Done uploading."));
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
