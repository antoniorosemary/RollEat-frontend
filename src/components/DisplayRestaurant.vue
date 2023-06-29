<template>
  <div>
    <v-dialog
    v-model="Display"
    max-width="1000">
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
                      v-model="RestaurantToDetail.Note"
                      color="yellow"
                      size="Medium"
                      half-increments
                      readonly
                  ></v-rating>
                  
                      <div class="text-grey ms-4">
                      {{RestaurantToDetail.Note}}
                      </div>
                  </v-row>
                      
                  <v-card-title>
                      {{RestaurantToDetail.Name}}
                  </v-card-title>

                  <v-card-subtitle>
                      {{RestaurantToDetail.Ville}}
                  </v-card-subtitle>
                  <table class="ma-3">
                    <tr>
                      <td class="tdLeft">Lundi :</td>
                      <td>{{RestaurantToDetail.Horraires.Monday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Mardi :</td>
                      <td>{{RestaurantToDetail.Horraires.Tuesday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Mercredi :</td>
                      <td>{{RestaurantToDetail.Horraires.Wednesday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Jeudi :</td>
                      <td>{{RestaurantToDetail.Horraires.Thursday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Vendredi :</td>
                      <td>{{RestaurantToDetail.Horraires.Friday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Samedi :</td>
                      <td>{{RestaurantToDetail.Horraires.Saturday}}</td>
                    </tr>
                    <tr>
                      <td class="tdLeft">Dimance :</td>
                      <td>{{RestaurantToDetail.Horraires.Sunday}}</td>
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
                    <template v-for="Item in RestaurantToDetail.Carte">
                      <div class="d-flex justify-space-between">
                        <div>
                          <v-list-item-title class="ma-3">
                            {{ Item.Name }}
                          </v-list-item-title>
                          <v-list-item-text>
                            {{ Item.Details }}
                            <br>
                            <v-list-item-action class="ma-3">
                              <v-btn 
                              v-on:click="$emit('AddItem', Item)"
                              small 
                              color="primary">
                                Ajouter
                              </v-btn>
                            </v-list-item-action>
                            <bold class="font-weight-black">{{ Item.Prix }} €</bold>
                          </v-list-item-text>
                          
                        </div>
                        <div>
                          <v-avatar
                          class="ma-3"
                          size="100"
                          tile
                          >
                            <v-img :src="Item.Image" class="DisplayRestaurantInside"></v-img>
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
        v-for="Restau in Restaurants" 
        v-on:click="ToggleDisplay(), TransfertRestaurant(Restau)"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 6 : 1"
                class="DisplayRestaurant Pointed"
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
                    v-model="Restau.Note"
                    color="yellow"
                    size="Medium"
                    half-increments
                    readonly
                  ></v-rating>
                  
                    <div class="text-grey ms-4">
                      {{Restau.Note}}
                    </div>
                  </v-row>
                    
                  <v-card-title>
                    {{Restau.Name}}
                  </v-card-title>

                  <v-card-subtitle>
                    {{Restau.Ville}}
                  </v-card-subtitle>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
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
        Ville: "",
        Note: 0,
        Horraires: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        Carte: [],
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
.Pointed{
  cursor: pointer;
}

.DisplayRestaurantInside{
  border-radius: 15px;
}

.tdLeft{
  padding-right: 10px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>