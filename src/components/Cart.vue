<template>
    <div>
        <div 
        class="CartIcon d-flex flex-row-reverse ma-3">
            <v-btn v-on:click="ToggleDisplay()">
                <v-icon
                left
                medium
                color="black"
                >
                mdi-cart
                </v-icon>
                <h3>Panier</h3>
            </v-btn>
        </div>
        <div>
        <v-dialog
        v-model="Display"
        content-class="my-custom-dialog"
        max-width="810"
        transition="slide-x-reverse-transition"
        Left>
            <v-card class="round" max-height="800" style="overflow-y: scroll;">
                <v-card-title>
                    Panier
                </v-card-title>
                <v-card class="round-in ma-3">
                    <div class="d-flex justify-space-between">
                        <div>
                        <v-card-title>
                            Vous commander dans les restaurant :
                            <br>
                            {{ Restaurant.Name }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{Restaurant.City}}
                        </v-card-subtitle>
                        </div>
                        <v-avatar
                        class="ma-3"
                        size="90"
                        tile
                        >
                            <v-img :src="Restaurant.Image" class="round-in"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
                
                <v-card-text>
                    <v-list>
                        <template v-for="Item in Incart.Products">
                            <div class="d-flex justify-space-between">
                                <div>
                                <v-list-item-title class="ma-3">
                                    {{ Item.Name }}
                                </v-list-item-title>
                                    <v-btn 
                                    v-on:click="$emit('AddItem', Item, Restaurant)"
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
                                    <div class="font-weight-black ma-2 Align"> {{ Item.Quantity }} </div>

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
                                    v-else
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

                                    <br>
                                    <p class="font-weight-black">{{ (Item.Price * Item.Quantity).toFixed(2) }} €</p>
                                
                                </div>
                                <div>
                                <v-avatar
                                class="ma-3"
                                size="100"
                                tile
                                >
                                    <v-img :src="Item.Image" class="round-in"></v-img>
                                </v-avatar>
                                </div>
                            </div>
                            <v-divider></v-divider>
                        </template>
                    </v-list>
                    <div v-if="Incart.Products.length != 0 || Incart.Menus.length != 0" class="font-weight-black">
                        <br>
                        <v-divider></v-divider>
                        Total
                        <v-divider></v-divider>
                        {{ (UpdateTotal).toFixed(2) }} €
                        <v-divider></v-divider>
                        <br>
                        <v-btn
                        Large 
                        color="primary"
                        middle
                        block
                        >
                            <v-icon
                            medium
                            color="white"
                            >
                                mdi-cart-check
                            </v-icon>
                            Commander
                        </v-btn>
                    </div>
                    <div v-else>
                        <v-card-subtitle>Votre Panier est vide</v-card-subtitle>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Restaurant from '../types/Restaurant';
  import type { PropType } from "vue";
  import Menu from '../types/Menu';
  import Product from '../types/Product';
  import InCart from '../types/InCart'
  
  interface DisplayRestaurantData {
    Display: boolean,
  }
  
  export default Vue.extend({
    name: 'Cart',
    components: {
    },
    props:{
        Incart: {
            type: Object as PropType<InCart>,
        },
        Restaurant:{
            type: Object as PropType<Restaurant>,
        }
    },
    data():DisplayRestaurantData {
      return {
        Display: false,
      };
    },
    methods: {
        ToggleDisplay() {
            this.Display = !this.Display ;
        },
        
    },
    computed:{
        UpdateTotal(){
        let Total: number;
        Total = 0;    
        for (let i = 0; i < this.Incart.Products.length ; i++){
          Total += this.Incart.Products[i].Quantity * this.Incart.Products[i].Price;
        }
        return Total;
      }
    }
  })
  
  </script>
  
  <style scoped>

  .round {
    border-radius: 25px;
  }
  
  .round-in{
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