<template>
  <!--name, type1, type2, j-name, evolution, image link-->
  <div>
    <div>
      <img :src="pokemon.image" />
    </div>
    <div>
      <h2>{{ pokemon.name }}</h2>
      <h3>{{ pokemon.j_name }}</h3>
    </div>
    <div>
      <p>{{ pokemon.type1 }}</p>
      <p>{{ pokemon.type2 }}</p>
    </div>
    <span>{{ pokemon.evolution }}</span>
  </div>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
    name: String,
    type1: String,
    type2: String,
    j_name: String,
    evolution: String,
    image: String,
  },
});
</script>
