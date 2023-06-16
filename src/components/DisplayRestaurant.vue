<template>
  <div>
    <div id="DetailsRestau" v-if="Display">
      <DetailRestaurant :Restaurant="RestaurantToDetail"/>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col lg="4" v-for="Restau in Restaurants">
          <div class="DisplayRestaurant" v-on:click="ToggleDisplay(), TransfertRestaurant(Restau)">
            <img alt="Restaurant" :src="Restau.Image" id="ImgRestaurant">
            <tr>
              <td>
                <h1 id="left">{{Restau.Name}}</h1>
              </td>
              <td>
                <h1 id="right">{{Restau.Note}} &#11088</h1>
              </td>
            </tr>
            <h2 id="left">{{Restau.Ville}}</h2>
          </div>
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
  font-family: Arial, Helvetica, sans-serif;
  background-color: lightgray;
  border-radius: 25px;
  padding: 10px;
  margin: 20px;
  text-align: center;
}

#left{
  text-align: left;
  white-space : nowrap;
}

#right{
  text-align: right;
  white-space : nowrap;
}

h1{
  
  font-size: 25px;
  padding: 3px;
}
h2{

  Color: gray;
  padding: 3px;
  font-size: 20px;
}

td{
  width: 10%;
}
#ImgRestaurant{
  justify-content: center;
  height: 150px;
  width: 90%;
  margin: 10px;
  margin-top: 20px;
  border-radius: 25px;
  object-fit: cover;
}
  </style>