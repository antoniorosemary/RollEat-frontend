<template>
    <div class="DisplayRestaurant">
        <img alt="Restaurant" :src="Restaurant.Image" id="ImgRestaurant">
            <tr>
              <td>
                <h1 id="left">{{Restaurant.Name}}</h1>
              </td>
              <td>
                <h1 id="right">{{Restaurant.Note}} &#11088</h1>
              </td>
            </tr>
            <h2 id="left">{{Restaurant.Ville}}</h2>
    </div>
</template>
  
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Restaurant from '../Types/Restaurant';
    import type { PropType } from "vue";

    export default {
    name: 'DetailRestaurant',
    props:{
        Restaurant: {
            type: Object as PropType<Restaurant>,
            required: true
        },
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
    white-space : nowrap;
}

#right{
    text-align: right;
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