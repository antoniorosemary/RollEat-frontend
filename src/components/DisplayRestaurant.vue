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
              > 
                <v-card-text>
                  <v-card-title>
                      Menu
                  </v-card-title>
                  
                  <v-list style="max-height: 500px; overflow-y: scroll;">
                    <template v-for="Item in RestaurantToDetail.Products">
                      <div class="d-flex justify-space-between">
                        <div>
                          <v-list-item-title class="ma-3">
                            {{ Item.Name }}
                          </v-list-item-title>
                            {{ Item.Details }}
                            <br>
                            <v-btn 
                              v-on:click="$emit('AddItem', Item)"
                              small 
                              color="primary"
                              class="Align">
                                  <v-icon
                                  left
                                  small
                                  color="white"
                                  >
                                      mdi-plus-thick
                                  </v-icon>
                                  Plus
                              </v-btn>
                              <div v-if="Item.Quantity > 0" class="font-weight-black ma-2 Align"> {{ Item.Quantity }} </div>

                              <v-btn 
                              v-if="Item.Quantity == 1"
                              v-on:click="$emit('MinusItem', Item)"
                              small 
                              color="error"
                              >
                                  <v-icon
                                  left
                                  small
                                  color="white"
                                  >
                                      mdi-delete
                                  </v-icon>
                                  Supprimer
                              </v-btn>

                              <v-btn 
                              v-if="Item.Quantity > 1"
                              v-on:click="$emit('MinusItem', Item)"
                              small 
                              color="primary">
                                  <v-icon
                                  left
                                  small
                                  color="white"
                                  >
                                      mdi-minus-thick
                                  </v-icon>
                                  Moins
                              </v-btn>
                            <p class="font-weight-black ma-2">{{ Item.Price }} €</p>
                          
                        </div>
                        <div>
                          <v-avatar
                          class="ma-3"
                          size="100"
                          tile
                          >
                            <v-img :src="Item.Image"></v-img>
                          </v-avatar>
                        </div>
                      </div>
                      <v-divider></v-divider>
                    </template>
                  </v-list>
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
import type { PropType } from "vue";

interface DisplayRestaurantData {
  Display: boolean,
  RestaurantToDetail: Restaurant
}

export default Vue.extend({
  name: 'DisplayRestaurant',
  components: {
  },
  props:{
    Restaurants: {
      type: Array as PropType<Array<Restaurant>>,
      required: true
    },
  },
  data():DisplayRestaurantData {
    return {
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
      this.RestaurantToDetail = Restau
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