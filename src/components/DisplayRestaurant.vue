<template>
  <v-container>
    <v-row no-gutters>
      <v-col lg="4" v-for="Restau in Restaurants">
        <div class="DisplayRestaurant">
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Restaurant from '../Types/Restaurant';
import type { PropType } from "vue";

export default {
  name: 'DisplayRestaurant',
  props:{
    Restaurants: Object as PropType<Array<Restaurant>>,
  },
}
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
}

#right{
  text-align: right;
}

h1{
  
  font-size: 35px;
  padding: 5px;
}
h2{

  Color: gray;
  padding: 5px;
  font-size: 25px;
}

td{
  width: 10%;
}
#ImgRestaurant{
  justify-content: center;
  height: 250px;
  width: 90%;
  margin: 10px;
  margin: 20px;
  border-radius: 25px;
  object-fit: cover;
}
  </style>