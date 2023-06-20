<template>
    <div>
    <Cart :Incart="ItemsInCart"></Cart>
    <div class="Title">
        <h1>Roll Eat</h1>
    </div>
    <p v-for="Item in ItemsInCart.Products">
      {{ Item.Name }}
    </p>
    <h2>Fast Food</h2>
    <DisplayRestaurant  :Restaurants="Restaurants" @AddItem="AddToCart"></DisplayRestaurant>
    </div>
</template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import DisplayRestaurant from '@/components/DisplayRestaurant.vue'
  import Menu from '../types/Menu';
  import Product from '../types/Product';
  import Restaurant from '../types/Restaurant';
  import Cart from '../components/Cart.vue';
  import InCart from '../types/InCart';

  interface DisplayRestaurantData {
    ItemsInCart: InCart,
    Restaurants: Array<Restaurant>,
  }

  export default Vue.extend({
    name: 'TestView',
    components: {
      DisplayRestaurant,
      Cart,
    },
    data(): DisplayRestaurantData{
      return {
        ItemsInCart: {
          Menus: [],
          Products: [],
        },
        Restaurants: [
          {
            Image: "https://images.midilibre.fr/api/v1/images/view/5b462d753e45466a4e3f50e1/large/image.jpg",
            Name: "Kebab Du Seigneur",
            City: "Strasbourg",
            ZipCode: 67000,
            Adress: "test",
            Rating: [4.6,4,4.2],
            Schedule:{
              Monday: "12:00-14:00, 17:00-22:00",
              Tuesday: "12:00-14:00, 17:00-22:00",
              Wednesday: "12:00-14:00, 17:00-22:00",
              Thursday: "12:00-14:00, 17:00-22:00",
              Friday: "12:00-14:00, 17:00-22:00",
              Saturday: "12:00-14:00, 17:00-22:00",
              Sunday: "12:00-14:00, 17:00-22:00",
            },
            Products:[
              {
                IdProduct: 1,
                Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG",
                Name: "Kebab Du chef",
                Details: "Salade, Tomate, Oignon",
                Price: 4.99,
                Quantity: 1,
              },
              {
                IdProduct: 2,
                Image: "https://img.20mn.fr/-O8yW1U7RTe0-oPaWWNvtCk/1200x768_le-meilleur-kebab-de-france",
                Name: "Kebab Du chef +",
                Details: "Salade, Tomate, Oignon, pneu, huile, ciment, sable, gravier, verre",
                Price: 5.99,
                Quantity: 1,
              },
              {
                IdProduct: 3,
                Image: "https://img.cuisineaz.com/660x660/2021/07/11/i179649-tortilla-kebab.jpeg",
                Name: "Youfka zebi",
                Details: "Salade, Tomate, Oignon",
                Price: 4.99,
                Quantity: 1,
              },
              {
                IdProduct: 4,
                Image: "https://leschatsgourmets.com/wp-content/uploads/2022/07/les-chats-gourmets-brochette-kebab-boeuf.jpg",
                Name: "brochetes d'animal",
                Details: "biande d'animal avec ses herbes",
                Price: 5.99,
                Quantity: 1,
              },
              {
                IdProduct: 5,
                Image: "https://www.thuisbezorgd.nl/foodwiki//app/uploads/sites/24/2020/11/doner_kebab_2-1080x960.jpg",
                Name: "Kebab Du chef ++++",
                Details: "Salade, Tomate, Oignon",
                Price: 12.99,
                Quantity: 1,
              },
              {
                IdProduct: 6,
                Image: "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg",
                Name: "Kebab rech sa mère",
                Details: "c'est même pas un kebab mon couz: Salade, Tomate, Oignon, Salade, Tomate, Oignon",
                Price: 25,
                Quantity: 1,
              },
            ],
            Menus:[
              {
                IdMenu: 1,
                Name: "Menu du seigneur",
                Image: "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg",
                Products: [1,2,3],
                Details: "La base fréro",
                Price: 12.80,
                Quantity: 1,
              },
            ],
          },
          {
            Image: "https://mapio.net/images-p/35547871.jpg",
            Name: "McDounald",
            City: "Ouganda",
            ZipCode: 12345,
            Adress: "test",
            Rating: [12],
            Schedule:{
              Monday: "12:00-14:00, 17:00-22:00",
              Tuesday: "12:00-14:00, 17:00-22:00",
              Wednesday: "12:00-14:00, 17:00-22:00",
              Thursday: "12:00-14:00, 17:00-22:00",
              Friday: "12:00-14:00, 17:00-22:00",
              Saturday: "12:00-14:00, 17:00-22:00",
              Sunday: "12:00-14:00, 17:00-22:00",
            },
            Products:[],
            Menus:[],
          },
          {
            Image: "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/ZLCWHTEO5RH57CBOFSBSPN24MA.jpg",
            Name: "Kebab Whalla",
            City: "Ostwald",
            ZipCode: 12345,
            Adress: "test",
            Rating: [3.2],
            Schedule:{
              Monday: "12:00-14:00, 17:00-22:00",
              Tuesday: "12:00-14:00, 17:00-22:00",
              Wednesday: "12:00-14:00, 17:00-22:00",
              Thursday: "12:00-14:00, 17:00-22:00",
              Friday: "12:00-14:00, 17:00-22:00",
              Saturday: "12:00-14:00, 17:00-22:00",
              Sunday: "12:00-14:00, 17:00-22:00",
            },
            Products:[],
            Menus:[],
          },
          {
            Image: "https://pbs.twimg.com/media/CA9i4giWYAAS7rF.png",
            Name: "Kebab Du Coin",
            City: "Strasbourg",
            ZipCode: 12345,
            Adress: "test",
            Rating: [5],
            Schedule:{
              Monday: "12:00-14:00, 17:00-22:00",
              Tuesday: "12:00-14:00, 17:00-22:00",
              Wednesday: "12:00-14:00, 17:00-22:00",
              Thursday: "12:00-14:00, 17:00-22:00",
              Friday: "12:00-14:00, 17:00-22:00",
              Saturday: "12:00-14:00, 17:00-22:00",
              Sunday: "12:00-14:00, 17:00-22:00",
            },
            Products:[],
            Menus:[],
          },
        ],
      };
    },
    methods: {
      AddToCart(Product: Product) {
        let isin = false;
        for (let i = 0; i < this.ItemsInCart.Products.length ; i++){
          if (this.ItemsInCart.Products[i].IdProduct == Product.IdProduct){
            this.ItemsInCart.Products[i].Quantity += 1;
            isin = true;
            break;
          }
        }
        if(isin == false){
          this.ItemsInCart.Products.push(Product)
        }
      }
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
  
  .Panier {
    right: 0px;
    top: 100px;
    height: 10%;
  }
  </style>
  