<template>
    <div>
    <div class="Connexion">
        <h1>Connexion</h1>
    </div>
    <div class="Title">
        <h1>Roll Eat</h1>
    </div>
    <p>Vous êtes connecté en tant que {{ test }}</p>
    <DisplayRestaurant  :Restaurants="Restaurants"></DisplayRestaurant>
    </div>
</template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import DisplayRestaurant from '@/components/DisplayRestaurant.vue'

  export default Vue.extend({
    name: 'TestView',
    components: {
      DisplayRestaurant,
    },
    data() {
      return {
        test: 'test1',
        Restaurants: [
          {
            Image: "../assets/Kebabduseigneur.jpg",
            Name: "Kebab Du Seigneur",
            Ville: "Strasbourg",
            Note: 4.6,
          },
          {
            Image: "../assets/McDounald.jpg",
            Name: "McDounald",
            Ville: "Ouganda",
            Note: 12,
          },
          {
            Image: "../assets/Kebabduseigneur.jpg",
            Name: "Kebab Whalla",
            Ville: "Ostwald",
            Note: 3.2,
          },
          {
            Image: "../assets/Kebabduseigneur.jpg",
            Name: "Kebab Du Coin",
            Ville: "Strasbourg",
            Note: 5,
          },
        ],
      };
    },
  });
  </script>
  
  <style>
  .Title {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 35px;
  }
  
  .Connexion {
    position: absolute;
    right: 0px;
    top: 90px;
    height: 10%;
  }
  </style>
  