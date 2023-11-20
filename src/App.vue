<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { onBeforeMount } from "vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/js/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import { pokemons } from "@/js/pokemons.js";
import { usePokemonsStore } from "@/stores/pokemonStore.js";

/*
  this is to add all the pokemons to the firestore
  from an array in a js file.
  should uncomment it after init or after change to array
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

async function getPokemons() {
  const pokemonsStore = usePokemonsStore();
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
    pokemonsStore.setupPokemons(pokemonsSnapshot);
  });
}

onBeforeMount(async () => {
  console.log("Connecting to Firebase");
  await savePokemons().then(
    console.log("Done uploading."),
    getPokemons()
  );
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
