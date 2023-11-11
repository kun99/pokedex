<template>
  <!--name, type1, type2, j-name, evolution, image link-->
  <RouterLink :to="{ name: 'pokemon_details', params: {pokemon_name: pokemon.name}}">
    <!-- <div class="flex flex-row border border-gray-200 rounded-lg">
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
    </div> -->
    <div class="flex flex-col items-center py-3 border border-gray-200 rounded-lg">
      <div>
        <img :src="pokemon.image" />
      </div>
      <div>
        <div class="flex flex-row pt-5">
          <p class="text-red-500 text-lg">{{ pokemon.name }} (</p>
          <p class="text-red-500 text-lg">{{ pokemon.j_name }})</p>
        </div>
      </div>
    </div>
  </RouterLink>
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
