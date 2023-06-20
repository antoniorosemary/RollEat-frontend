<template>
    <div>
        <v-card-title>
            Menus
        </v-card-title>

        <v-list>
            <template v-for="Item in Catalog.Menus">
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
                    <br>
                    <p class="font-weight-black ma-2 Align">{{ Item.Price }} €</p>

                    <v-btn
                        text
                        small
                        @click="show = !show"
                        class="Align"
                        style="margin-left: 25px;"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        Produits
                    </v-btn>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                                <p v-for="p in ProductInMenu(Item)">{{ p }}</p>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
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

        <v-card-title>
            Produits
        </v-card-title>

        <v-list>
            <template v-for="Item in Catalog.Products">
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
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import InCart from '../types/InCart';
  import Menu from '../types/Menu';
  import type { PropType } from "vue";
  
  interface Catalog {
    show: boolean,
  }
  
  export default Vue.extend({
    name: 'Catalog',
    components: {
    },
    props:{
      Catalog: {
        type: Object as PropType<InCart>,
      },
    },
    data():Catalog {
      return {
        show: false,
      };
    },
    methods: {
        ProductInMenu(Menu: Menu){
            let liste: Array<string>;
            liste = []
            for (let j = 0; j < Menu.Products.length ; j++){
                for (let i = 0; i < this.Catalog.Products.length ; i++){
                    if(this.Catalog.Products[i].IdProduct == Menu.Products[j]){
                        liste.push(this.Catalog.Products[i].Name);
                        break;
                    }
                }               
            }
            return liste;
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
  
  .Align{
    display:inline-block;
  }
  </style>