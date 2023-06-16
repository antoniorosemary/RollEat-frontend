<template>
  <div>
    <v-dialog
    v-model="Display"
    width="1000">
        <v-card
            class="DisplayRestaurant"
            max-width="1000"
        >
            <v-img
            :src="RestaurantToDetail.Image"
            max-height="500px"
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
import type { PropType } from "vue";
import DetailRestaurant from '../components/DetailRestaurant.vue'

interface DisplayRestaurantData {
  Display: boolean,
  RestaurantToDetail: Restaurant
}

export default Vue.extend({
  name: 'DisplayRestaurant',
  components: {
    DetailRestaurant,
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

</style>