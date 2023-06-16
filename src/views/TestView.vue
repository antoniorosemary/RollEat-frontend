<template>
    <div>
    <div class="Connexion">
        <h1>Connexion</h1>
    </div>
    <div class="Title">
        <h1>Roll Eat</h1>
    </div>
    <h2>Fast Food</h2>
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
        Restaurants: [
          {
            Image: "https://images.midilibre.fr/api/v1/images/view/5b462d753e45466a4e3f50e1/large/image.jpg",
            Name: "Kebab Du Seigneur",
            Ville: "Strasbourg",
            Note: 4.6,
          },
          {
            Image: "https://mapio.net/images-p/35547871.jpg",
            Name: "McDounald",
            Ville: "Ouganda",
            Note: 12,
          },
          {
            Image: "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/ZLCWHTEO5RH57CBOFSBSPN24MA.jpg",
            Name: "Kebab Whalla",
            Ville: "Ostwald",
            Note: 3.2,
          },
          {
            Image: "https://pbs.twimg.com/media/CA9i4giWYAAS7rF.png",
            Name: "Kebab Du Coin",
            Ville: "Strasbourg",
            Note: 5,
          },
        ],
        Display: {
            ToDisplay: false
        }
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

  h2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
  }
  
  .Connexion {
    position: absolute;
    right: 0px;
    top: 90px;
    height: 10%;
  }
  </style>
  