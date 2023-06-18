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
            Carte:[
              {
                Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG",
                Name: "Kebab Du chef",
                Details: "Salade, Tomate, Oignon",
                Prix: 4.99
              },
              {
                Image: "https://img.20mn.fr/-O8yW1U7RTe0-oPaWWNvtCk/1200x768_le-meilleur-kebab-de-france",
                Name: "Kebab Du chef +",
                Details: "Salade, Tomate, Oignon, pneu, huile, ciment, sable, gravier, verre",
                Prix: 5.99
              },
              {
                Image: "https://img.cuisineaz.com/660x660/2021/07/11/i179649-tortilla-kebab.jpeg",
                Name: "Youfka zebi",
                Details: "Salade, Tomate, Oignon",
                Prix: 4.99
              },
              {
                Image: "https://leschatsgourmets.com/wp-content/uploads/2022/07/les-chats-gourmets-brochette-kebab-boeuf.jpg",
                Name: "brochetes d'animal",
                Details: "biande d'animal avec ses herbes",
                Prix: 5.99
              },
              {
                Image: "https://www.thuisbezorgd.nl/foodwiki//app/uploads/sites/24/2020/11/doner_kebab_2-1080x960.jpg",
                Name: "Kebab Du chef ++++",
                Details: "Salade, Tomate, Oignon",
                Prix: 12.99
              },
              {
                Image: "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg",
                Name: "Kebab rech sa mère",
                Details: "c'est même pas un kebab mon couz: Salade, Tomate, Oignon, Salade, Tomate, Oignon",
                Prix: 25
              },
            ]
          },
          {
            Image: "https://mapio.net/images-p/35547871.jpg",
            Name: "McDounald",
            Ville: "Ouganda",
            Note: 12,
            Carte:[]
          },
          {
            Image: "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/ZLCWHTEO5RH57CBOFSBSPN24MA.jpg",
            Name: "Kebab Whalla",
            Ville: "Ostwald",
            Note: 3.2,
            Carte:[]
          },
          {
            Image: "https://pbs.twimg.com/media/CA9i4giWYAAS7rF.png",
            Name: "Kebab Du Coin",
            Ville: "Strasbourg",
            Note: 5,
            Carte:[]
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
  