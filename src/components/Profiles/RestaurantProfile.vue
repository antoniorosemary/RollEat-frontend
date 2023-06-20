<template>
    <div>
        <v-container>
        <v-expansion-panels multiple class="round">
          <v-expansion-panel v-for="(restaurant, i) in user.restaurants" :key="i" >
            <v-expansion-panel-header>
              {{ restaurant.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>

                  <v-expansion-panels multiple>
                    <!-- infos -->
                    <v-expansion-panel>

                    <v-expansion-panel-header>
                        informations
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                    <v-list>
                        someting about infos
                    </v-list>
                    </v-expansion-panel-content>

                    </v-expansion-panel>
                    <!-- items -->
                    <v-expansion-panel>

                    <v-expansion-panel-header>
                        Articles
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <v-list>
                            <v-list-item v-for="(product, k) in restaurant.products" :key="k">
                                <v-list-item-avatar>
                                    <v-img :src="product.image"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>{{ product.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{ product.price }} €</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-btn color="blue darken-1" text @click.stop="editItem(product)">Modifier</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-content>

                    </v-expansion-panel>
                    <!-- menus -->
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Menus
                        </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-expansion-panel v-for="(menu, j) in restaurant.menus" :key="j">

                                <v-expansion-panel-header>
                                    {{ menu.name }}
                                    <v-btn color="blue darken-1" text @click.stop="editMenu(i, j)">Modifier</v-btn>
                                </v-expansion-panel-header>
                                
                                <v-expansion-panel-content>
                                    <v-list>
                                    <v-list-item v-for="(productId, k) in menu.productIds" :key="k">
                                        <v-list-item-avatar>
                                        <v-img :src="getProductById(restaurant, productId).image"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                        <v-list-item-title>{{ getProductById(restaurant, productId).name }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ getProductById(restaurant, productId).description }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>{{ getProductById(restaurant, productId).price }} €</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    </v-list>
                                </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
  
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Modifier l'Item</span>
          </v-card-title>
  
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-if="editedItem" v-model="editedItem.image" label="Image URL"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-if="editedItem" v-model="editedItem.name" label="Nom"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-if="editedItem" v-model="editedItem.description" label="Description"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-if="editedItem" v-model="editedItem.price" label="Prix" type="number"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
            <v-btn color="blue darken-1" text @click="saveChanges">Sauvegarder</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialogue pour modifier le menu -->
        <v-dialog v-model="menuDialog" max-width="500px">
            <v-card>
            <v-card-title>
                <span class="headline">Modifier le Menu</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-list>
                        <v-list-item v-for="(product, k) in (user.restaurants[editedIndices[0]] || {}).products || []" :key="k">
                            <v-checkbox :label="product.name" v-model="editedMenu.productIds" :value="product.id"></v-checkbox>
                        </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="menuDialog = false">Fermer</v-btn>
                <v-btn color="blue darken-1" text @click="saveMenuChanges">Sauvegarder</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
  </template>
  

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  interface Menu {
    name: string;
    productIds: string[];
  }
  
  interface Restaurant {
    name: string;
    products: Product[];
    menus: Menu[];
  }
  
  interface User {
    restaurants: Restaurant[];
  }
  
  @Component
  export default class RestaurantProfile extends Vue {
    private dialog: boolean = false;
    private editedItem: Product | null = null;
    private editedIndices: number[] = [];
    private menuDialog: boolean = false;
    private editedMenu: Menu | null = null;
  
    @Prop({ required: true, type: Object })
    private user!: User;
  
    getProductById(restaurant: Restaurant, productId: string) {
      return restaurant.products.find(product => product.id === productId);
    }
  
    editMenu(i: number, j: number) {
      this.editedIndices = [i, j];
      this.editedMenu = Object.assign({}, this.user.restaurants[i].menus[j]);
      this.menuDialog = true;
    }
  
    editItem(item: Product) {
      this.editedItem = item;
      this.dialog = true;
    }
  
    saveChanges() {
      if (this.editedItem && this.editedIndices.length === 2) {
        const [i, j] = this.editedIndices;
        this.user.restaurants[i].products[j] = this.editedItem;
      }
      this.dialog = false;
    }

    saveMenuChanges() {
      if (this.editedMenu && this.editedIndices.length === 2) {
        const [i, j] = this.editedIndices;
        this.user.restaurants[i].menus[j] = this.editedMenu;
      }
      this.menuDialog = false;
    }
  }
  </script>
  

<style scoped>
.round{
    border-radius: 25px;
}
</style>