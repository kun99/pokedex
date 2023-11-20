/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        water: "#6390F0",
        fire: "#EE8130",
        normal: "#A8A77A",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-water",
    "bg-fire",
    "bg-normal",
    "bg-grass",
    "bg-ice",
    "bg-fighting",
    "bg-poison",
    "bg-ground",
    "bg-flying",
    "bg-psychic",
    "bg-bug",
    "bg-rock",
    "bg-ghost",
    "bg-dragon",
    "bg-dark",
    "bg-steel",
    "bg-fairy",
  ],
};

//https://www.epidemicjohto.com/t882-type-colors-hex-colors
// Normal Type: A8A77A
// Fire Type: EE8130
// Water Type: 6390F0
// Electric Type: F7D02C
// Grass Type: 7AC74C
// Ice Type: 96D9D6
// Fighting Type: C22E28
// Poison Type: A33EA1
// Ground Type: E2BF65
// Flying Type: A98FF3
// Psychic Type: F95587
// Bug Type: A6B91A
// Rock Type: B6A136
// Ghost Type: 735797
// Dragon Type: 6F35FC
// Dark Type: 705746
// Steel Type: B7B7CE
// Fairy Type: D685AD
