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
                  </v-card-text>

              </v-card>
            </v-col>
            <v-col lg="auto">
              <v-card
                class="DisplayRestaurant"
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
                          </v-list-item-text>
                        </div>
                        <div>
                          <v-avatar
                          class="ma-3"
                          size="90"
                          tile
                          >
                            <v-img :src="Item.Image"></v-img>
                          </v-avatar>
                        </div>
                      </div>
                      <v-divider></v-divider>
                    </template>
                  </v-list>
                            <!--
                  <v-card v-for="Item in RestaurantToDetail.Carte">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title>
                          {{ Item.Name }}
                        </v-card-title>
                        <v-card-subtitle>
                          {{ Item.Details }}
                        </v-card-subtitle>
                      </div>
                      <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                      >
                        <v-img :src="Item.Image"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                -->
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Restaurant from '../Types/Restaurant';
import ItemMenu from '../Types/ItemMenu';
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
        Carte: []
      }
    };
  },
  methods: {
    ToggleDisplay() {
      this.Display = !this.Display ;
    },
    TransfertRestaurant(Restau: Restaurant){
      this.RestaurantToDetail = Restau
    }
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
</style>