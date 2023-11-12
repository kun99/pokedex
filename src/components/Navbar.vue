<template>
  <nav class="flex flex-row justify-around items-center bg-red-800">
    <RouterLink to="/" class="flex w-1/3 items-center py-2 pl-10 text-white">
      <img class="w-8" src="public/pokedex.png" />
      ICCS340 Pokédex</RouterLink
    >
    <div class="flex w-1/3 justify-center">
      <RouterLink
        to="/"
        class="py-2 px-5 text-white rounded hover:bg-red-600 hover:text-white"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="py-2 px-5 text-white rounded hover:bg-red-600 hover:text-white"
        >About</RouterLink
      >
    </div>
    <!--dunno how to center the buttons without having this-->
    <div class="flex w-1/3">
    </div>
  </nav>
</template>
