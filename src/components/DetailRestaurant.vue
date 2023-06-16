<template>
<div>
    <v-dialog
    v-model="Display"
    width="500">
        <v-card
            class="DisplayRestaurant"
            max-width="344"
        >
            <v-img
            :src="Restaurant.Image"
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
                v-model="Restaurant.Note"
                color="yellow"
                size="Medium"
                half-increments
                readonly
            ></v-rating>
            
                <div class="text-grey ms-4">
                {{Restaurant.Note}}
                </div>
            </v-row>
                
            <v-card-title>
                {{Restaurant.Name}}
            </v-card-title>

            <v-card-subtitle>
                {{Restaurant.Ville}}
            </v-card-subtitle>
            </v-card-text>

        </v-card>
    </v-dialog>
</div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Restaurant from '../Types/Restaurant';
    import type { PropType } from "vue";

    interface DetailRestaurant {
        Display: boolean,
    }
    export default {
    name: 'DetailRestaurant',
    props:{
        Restaurant: {
            type: Object as PropType<Restaurant>,
            required: true
        },
    },
    data():DetailRestaurant {
    return {
      Display: true,
    };
  },
}
</script>

<style scoped>
.DisplayRestaurant {
  border-radius: 25px;
}
</style>