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
        max-width="710"
        transition="slide-x-reverse-transition"
        Left>
            <v-card class="round" max-height="710">
                <v-card-title>
                    Panier
                </v-card-title>
                <v-card-text>
                    <v-list style="max-height: 500px; overflow-y: scroll;">
                        <template v-for="Item in Incart.Products">
                            <div class="d-flex justify-space-between">
                                <div>
                                <v-list-item-title class="ma-3">
                                    {{ Item.Name }}
                                </v-list-item-title>
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
                        {{ Total }} €
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
    Total: number,
  }
  
  export default Vue.extend({
    name: 'Cart',
    components: {
    },
    props:{
        Incart: {
            type: Object as PropType<InCart>,
        }
    },
    data():DisplayRestaurantData {
      return {
        Display: false,
        Total: 0,
      };
    },
    methods: {
        ToggleDisplay() {
            this.Display = !this.Display ;
        },
        
    },
    computed:{
        
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