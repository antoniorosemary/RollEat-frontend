<template>
  <div>
    <v-dialog
    v-model="Display"
    max-width="1000"
    >
      <v-card class="DisplayRestaurant">
        <v-container>
          <v-row>
            <v-col lg="auto" >
              <v-card
                  class="DisplayRestaurantInside"
                  max-width="400"
              >
                  <v-img
                  :src="RestaurantToDetail.Image"
                  max-height="300px"
                  cover
                  id="ImgRestaurant"
                  ></v-img>

                  <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                  <v-rating
                      v-model="RestaurantToDetail.Rating"
                      color="yellow"
                      size="Medium"
                      half-increments
                      readonly
                  ></v-rating>
                  
                      <div class="text-grey ms-4">
                      {{RestaurantToDetail.Rating}}
                      </div>
                  </v-row>
                      
                  <v-card-title>
                      {{RestaurantToDetail.Name}}
                  </v-card-title>

                  <v-card-subtitle>
                      {{RestaurantToDetail.City}}
                  </v-card-subtitle>
                  <table>
                    <tr>
                      <td>Lundi :</td>
                      <td>{{RestaurantToDetail.Schedule.Monday}}</td>
                    </tr>
                    <tr>
                      <td>Mardi :</td>
                      <td>{{RestaurantToDetail.Schedule.Tuesday}}</td>
                    </tr>
                    <tr>
                      <td>Mercredi :</td>
                      <td>{{RestaurantToDetail.Schedule.Wednesday}}</td>
                    </tr>
                    <tr>
                      <td>Jeudi :</td>
                      <td>{{RestaurantToDetail.Schedule.Thursday}}</td>
                    </tr>
                    <tr>
                      <td>Vendredi :</td>
                      <td>{{RestaurantToDetail.Schedule.Friday}}</td>
                    </tr>
                    <tr>
                      <td>Samedi :</td>
                      <td>{{RestaurantToDetail.Schedule.Saturday}}</td>
                    </tr>
                    <tr>
                      <td>Dimance :</td>
                      <td>{{RestaurantToDetail.Schedule.Sunday}}</td>
                    </tr>
                  </table>
                  </v-card-text>

              </v-card>
            </v-col>
            <v-col lg="auto">
              <v-card
                class="DisplayRestaurantInside"
                max-width="550"
                max-height="600"
                style="overflow-y: scroll;"
              > 
                <v-card-text>
                  <Catalog :Catalog="Catalog" @AddItem="AddToCart" @MinusItem="MinusToCart"></Catalog>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row>
        <v-col 
        lg="auto" 
        v-for="(Restau, Index) in Restaurants" 
        :key="Index"
        v-on:click="ToggleDisplay(), TransfertRestaurant(Restau)"
        >
          <v-card
            class="DisplayRestaurant"
            max-width="344"
          >
            <v-img
              :src="Restau.Image"
              height="160px"
              cover
              id="ImgRestaurant"
            ></v-img>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
              <v-rating
                v-model="Restau.Rating"
                color="yellow"
                size="Medium"
                half-increments
                readonly
              ></v-rating>
              
                <div class="text-grey ms-4">
                  {{Restau.Rating}}
                </div>
              </v-row>
                
              <v-card-title>
                {{Restau.Name}}
              </v-card-title>

              <v-card-subtitle>
                {{Restau.City}}
              </v-card-subtitle>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Restaurant from '../types/Restaurant';
import InCart from '../types/InCart';
import Catalog from '../components/Catalog.vue';
import Product from '../types/Product'
import type { PropType } from "vue";

interface DisplayRestaurantData {
  Catalog: InCart,
  Display: boolean,
  RestaurantToDetail: Restaurant
}

export default Vue.extend({
  name: 'DisplayRestaurant',
  components: {
    Catalog
  },
  props:{
    Restaurants: {
      type: Array as PropType<Array<Restaurant>>,
      required: true
    },
  },
  data():DisplayRestaurantData {
    return {
      Catalog:{
        Products:[],
        Menus:[],
      },
      Display: false,
      RestaurantToDetail: {
        Image: "",
        Name: "Test",
        City: "",
        ZipCode: 0,
        Adress: "",
        Rating: 0,
        Schedule: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        Products: [],
        Menus: [],
      }
    };
  },
  methods: {
    ToggleDisplay() {
      this.Display = !this.Display ;
    },
    TransfertRestaurant(Restau: Restaurant){
      this.RestaurantToDetail = Restau;
      this.Catalog.Products = Restau.Products;
      this.Catalog.Menus = Restau.Menus;
    },
    AddToCart(Product: Product) {
      this.$emit('AddItem', Product, this.RestaurantToDetail);
    },
    MinusToCart(Product: Product) {
      this.$emit('MinusItem', Product);
    },
  },
})

</script>

<style scoped>
.DisplayRestaurant {
  border-radius: 25px;
}

.DisplayRestaurantInside{
  border-radius: 15px;
}

.Align{
  display:inline-block;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>