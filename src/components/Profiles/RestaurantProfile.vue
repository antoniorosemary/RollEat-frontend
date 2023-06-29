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
                      {{ restaurant.adress }}
                      {{ restaurant.city }}
                      {{ restaurant.zipcode }}

                      <v-list-item v-for="(schedule, day) in restaurant.schedule" :key="day">
                        <v-list-item-content>
                          {{ day }}: {{ schedule }}
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-btn color="blue darken-1" @click.stop="editRestaurant(restaurant)">Modifier</v-btn>

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
                                  <v-list-item-subtitle>{{ product.details }}</v-list-item-subtitle>
                                  <v-list-item-subtitle>{{ product.price }} €</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-btn color="blue darken-1" text @click.stop="editItem(product,restaurant)">Modifier</v-btn>
                          </v-list-item>
                          <v-btn color="green darken-1" text @click.stop="createNewItem(restaurant)">Nouveau produit</v-btn>
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
                                  <v-btn color="blue darken-1" text @click.stop="editCategory(i, j, menu)">Modifier</v-btn>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                  <v-list>
                                      <v-expansion-panel v-for="(category, k) in menu.products" :key="k">
                                          <v-expansion-panel-header>
                                              {{ category.name }}
                                              <v-btn color="blue darken-1" text @click.stop="editMenu(restaurant,category)">Modifier</v-btn>
                                          </v-expansion-panel-header>
                                          <v-expansion-panel-content>
                                              <v-list-item v-for="(productMod, m) in category.products" :key="m">
                                                  <v-list-item-avatar>
                                                      <v-img :src="getProductById(restaurant.name, productMod.idproduct).image"></v-img>
                                                  </v-list-item-avatar>
                                                  <v-list-item-content>
                                                    <v-list-item-title>{{ getProductById(restaurant.name, productMod.idproduct).name }}</v-list-item-title>
                                                    <v-list-item-subtitle>{{ getProductById(restaurant.name, productMod.idproduct).details }}</v-list-item-subtitle>
                                                    <v-list-item-subtitle>{{ getProductById(restaurant.name, productMod.idproduct).price - productMod.pricemod }} €</v-list-item-subtitle>
                                                  </v-list-item-content>
                                              </v-list-item>
                                          </v-expansion-panel-content>
                                      </v-expansion-panel>
                                  </v-list>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-btn color="green darken-1" text @click.stop="createNewMenu(restaurant)">Nouveau menu</v-btn>
                      </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- end-menus -->
                </v-expansion-panels>               
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          
        </v-expansion-panel>
        <v-expansion-panel>
          <v-btn color="green darken-1"  text @click.stop="createNewRestaurant()">Nouveau restaurant</v-btn>
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
                <v-text-field v-if="editedItem" v-model="editedItem.details" label="Description"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-if="editedItem" v-model="editedItem.price" label="Prix" type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red darken-1" text @click="deleteItem(editedItem,editedRestau)">Supprimer le produit</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
          <v-btn color="blue darken-1" text @click="saveChanges(editedItem,editedRestau)">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialogue pour modifier le contenu du menu (dans les catégories) -->
    <v-dialog v-model="categoryDialog" max-width="500px">
        <v-card>
        <v-card-title>
            <span class="headline">Modifier le Contenu</span>
        </v-card-title>

        <v-card-text>
            <v-container>
            <v-row>
                <v-col cols="12">
                  <!-- liste des items de la catégorie -->
                  <v-list>
                    <!-- Parcourez chaque produit dans editedRestau.products -->
                    <v-list-item v-for="(product, k) in (editedRestau?.products)" :key="k">
                      <!-- Affichez une checkbox pour chaque produit. La checkbox est cochée si product.isChecked est vrai. -->
                      <v-checkbox 
                        :label="product.name" 
                        v-model="product.isChecked" 
                        :value="product.id"
                      ></v-checkbox>
                      <v-spacer></v-spacer>
                      <!-- Affichez un champ de texte pour modifier pricemod pour chaque produit. La valeur initiale est product.pricemod. -->
                      <v-text-field v-model="product.pricemod" label="Modification de prix"></v-text-field>
                    </v-list-item>
                  </v-list>



                </v-col>
            </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="categoryDialog = false">Fermer</v-btn>
            <v-btn color="blue darken-1" text @click="saveMenuChanges">Sauvegarder</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>

     <!-- Dialogue pour modifier les catégories du menu -->
     <v-dialog v-model="menuDialog" max-width="500px">
        <v-card>
        <v-card-title>
            <span class="headline">Modifier les Catégories du Menu</span>
        </v-card-title>

        <v-card-text>
            <v-container>
            <v-row>
                <v-col cols="12">
                    <v-list>
                      <v-list-item v-if="editedMenu">
                        <v-text-field text v-model="editedMenu.name"></v-text-field>
                      </v-list-item> 
                    <v-list-item v-for="(category, k) in editedMenu?.products || []" :key="k">
                        <v-text-field v-model="category.name"></v-text-field>
                        <v-btn color="red" @click="deleteCategory(k)">Supprimer</v-btn>
                    </v-list-item>
                    <v-btn color="green" @click="addCategory()">Ajouter une catégorie</v-btn>
                    </v-list>
                </v-col>
            </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="menuDialog = false">Fermer</v-btn>
            <v-btn color="blue darken-1" text @click="saveCategoryChanges">Sauvegarder</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog> 
    
    <!-- Dialogue pour ajouter des items -->
    <v-dialog v-model="newItemDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nouveau produit</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newItem.image" label="Image" required></v-text-field>
                <v-text-field v-model="newItem.name" label="Nom" required></v-text-field>
                <v-text-field v-model="newItem.details" label="Détails" required></v-text-field>
                <v-text-field v-model="newItem.price" label="Prix" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="newItemDialog = false">Annuler</v-btn>
          <v-btn color="blue darken-1" text @click="saveNewItem(editedRestau)">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialogue pour modifier les infos -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Modifier les informations du restaurant</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-if="editedRestaurant" v-model="editedRestaurant.adress" label="Adresse"></v-text-field>
                <v-text-field v-if="editedRestaurant" v-model="editedRestaurant.city" label="Ville"></v-text-field>
                <v-text-field v-if="editedRestaurant" v-model="editedRestaurant.zipcode" label="Code postal"></v-text-field>
                <v-text-field v-if="editedRestaurant" v-model="editedRestaurant.image" label="URL de l'image"></v-text-field>
              </v-col>
            </v-row>

            <!-- Ajout du schedule pour chaque jour -->
            <v-row>
              <v-col cols="12">
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.monday" label="Lundi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.tuesday" label="Mardi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.wednesday" label="Mercredi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.thursday" label="Jeudi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.friday" label="Vendredi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.saturday" label="Samedi"></v-text-field>
                <v-text-field v-if="editedRestaurant && editedRestaurant.schedule" v-model="editedRestaurant.schedule.sunday" label="Dimanche"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false">Annuler</v-btn>
          <v-btn color="blue darken-1" text @click="saveRestaurantChanges">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- Dialogue pour ajouter un restaurant -->
    <v-dialog v-model="restauDialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Nouveau restaurant</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nom du restaurant" v-model="newRestaurant.Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Image URL" v-model="newRestaurant.Image" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Ville" v-model="newRestaurant.City" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Code postal" type="number" v-model="newRestaurant.ZipCode" required></v-text-field>
              </v-col>

              <!-- Horaire -->
              <v-col cols="12">
                <v-text-field label="Lundi" v-model="newRestaurant.Schedule.Monday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Mardi" v-model="newRestaurant.Schedule.Tuesday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Mercredi" v-model="newRestaurant.Schedule.Wednesday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Jeudi" v-model="newRestaurant.Schedule.Thursday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Vendredi" v-model="newRestaurant.Schedule.Friday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Samedi" v-model="newRestaurant.Schedule.Saturday" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Dimanche" v-model="newRestaurant.Schedule.Sunday" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="restauDialog = false">Annuler</v-btn>
          <v-btn color="blue darken-1" text @click="saveNewRestaurant()">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { use } from 'vue/types/umd';

interface Product{
  IdProduct: number,
  Image: string,
  Name: string,
  Details: string,
  Price: number,
  Quantity: number,
  _id: number,
} 

interface Menu{
  IdMenu: number,
  Name: string,
  Image: string | undefined,
  Products: Array<ChoiceMenu>,
  Details: string,
  Price: number,
}
interface ProductMenu{
    IdProduct: number,
    PriceMod: number,
}

interface ChoiceMenu {
    Name: string,
    Products: Array<ProductMenu>
}
  
interface Restaurant{
[x: string]: any;
    Image: string,
    Name: string,
    City: string,
    ZipCode: Number,
    Adress: string,
    Rating: number,
    Schedule: Schedule,
    Products: Array<Product>,
    Menus: Array<Menu>,
    _id: number,
}

interface Schedule{
    Monday: string,
    Tuesday: string,
    Wednesday: string,
    Thursday: string,
    Friday: string,
    Saturday: string,
    Sunday: string,
}

interface User {
  restaurants: Restaurant[];
}

@Component
export default class RestaurantProfile extends Vue {
  public dialog: boolean = false;
  public editedItem: Product | null = null;
  public editedIndices: number[] = [];
  public menuDialog: boolean = false;
  public categoryDialog: boolean = false;
  public editedMenu: ChoiceMenu | null = null;
  public editedBlock: Menu | null = null;
  public editedRestau: Restaurant | null = null;
  public selectedProducts: Array<ProductMenu> = [];
  public newItemDialog: boolean = false;
  public editDialog: boolean = false;
  public restauDialog: boolean = false;
  public editedRestaurant: Restaurant | null = null;
  public editedScedule: Schedule | null = null;
  public newItem: {
    idProduct: number,
    image: string,
    name: string,
    details: string,
    price: string
  } = {
    idProduct: 1,
    image: '',
    name: '',
    details: '',
    price: ''
  };
  public newRestaurant: {
    Status: string,
    IdUser: number,
    Image: string,
    Name: string,
    City: string,
    ZipCode: number,
    Rating: number,
    Schedule: {
        Monday: string,
        Tuesday: string,
        Wednesday: string,
        Thursday: string,
        Friday: string,
        Saturday: string,
        Sunday: string,
    },
    Products: Array<any>, // Ajoutez un type approprié ici
    Menus: Array<any> // Ajoutez un type approprié ici
  } = {
    Status: "waiting",
    IdUser: 0,
    Image: "",
    Name: "",
    City: "",
    ZipCode: 0,
    Rating: 0,
    Schedule: {
        Monday: "12:00-14:00, 17:00-22:00",
        Tuesday: "12:00-14:00, 17:00-22:00",
        Wednesday: "12:00-14:00, 17:00-22:00",
        Thursday: "12:00-14:00, 17:00-22:00",
        Friday: "12:00-14:00, 17:00-22:00",
        Saturday: "12:00-14:00, 17:00-22:00",
        Sunday: "12:00-14:00, 17:00-22:00",
    },
    Products: [],
    Menus: [],
  };

  

  @Prop({ required: true, type: Object })
  public user!: User;



  //access
  getProductById(restaurantName: string, productId: number,) {
    if (restaurantName && productId) {
      // Trouver le restaurant spécifique
      let specificRestaurant = this.user.restaurants.find(r => r.name === restaurantName);
      if (specificRestaurant) {
        // Trouver le produit spécifique dans le restaurant
        let specificProduct = specificRestaurant.products.find(p => p.idproduct === productId);
        if (specificProduct) {
          // Retourner le produit spécifique
          return specificProduct;
        } else {
          console.error(`Product with ID ${productId} not found in restaurant ${restaurantName}`);
          return null;
        }
      } else {
        console.error(`Restaurant ${restaurantName} not found`);
        return null;
      }
    } else {
      console.error('Both restaurant and productId must be defined');
      return null;
    }
  }

  //infos

  saveRestaurantChanges() {
    if (this.editedRestaurant) {
      let i = this.user.restaurants.findIndex(restau => restau._id === this.editedRestaurant._id);
      if (i === -1) {
        console.error('editedRestaurant not found in user.restaurants');
        return;
      }

      // Copy the edited restaurant back to the original restaurant
      this.user.restaurants[i] = JSON.parse(JSON.stringify(this.editedRestaurant));

      // Format the keys of the restaurant
      let formattedRestaurant = this.formatKeys(this.user.restaurants[i]);

      // Call to backend API to update the restaurant data
      axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
        .then(response => {
          console.log(response.data);
          // You can add other actions here, like updating the list of restaurants
        })
        .catch(error => {
          console.log(error);
          // Handle the error as you wish, maybe by showing a notification to the user
        });
    }
    this.editDialog = false;
  }


  editRestaurant(restaurant: Restaurant) {
    this.editedRestaurant = JSON.parse(JSON.stringify(restaurant));
    this.editDialog = true;
  }


  //items

  
  createNewItem(restaurant: Restaurant) {
    this.editedRestau = restaurant;
    this.newItemDialog = true;
  }


  formatKeys(obj:any):any {
  let formattedObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      formattedObj[this.convertKey(key)] = this.formatKeys(obj[key]);
    } else {
      formattedObj[this.convertKey(key)] = obj[key];
    }
  }
  return formattedObj;
  }

  // Function to convert key
  convertKey(key:any):any {
    // Check for the exceptions
    if (key === 'idproduct'|| key === 'idProduct') {
      return 'IdProduct';
    }
    if (key === 'iduser'|| key === 'idUser') {
      return 'IdUser';
    }
    if (key === 'idmenu'|| key === 'idMenu') {
      return 'IdMenu';
    }
    if (key === 'pricemod'|| key === 'priceMod') {
      return 'PriceMod';
    }

    let words = key.split(' ');
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  }

 // In your saveNewItem function
  saveNewItem(restau: Restaurant) {
    // Find the restaurant in the user's restaurants array
    let restaurant = this.user.restaurants.find(r => r._id === restau._id);
    
    // Push the new item to the restaurant's products array
    if (restaurant) {
      // Check if restaurant.products is empty
      if (restaurant.products.length === 0) {
        this.newItem.idProduct = 1;
      } else {
        // Filter products that have a defined idProduct
        let productsWithIdProduct = restaurant.products;
        console.log(productsWithIdProduct);
        //TODO : gerer le passage idproduct/idProduct
        if(productsWithIdProduct.length > 0) {
          let lastProduct = productsWithIdProduct.reduce((prev, current) => (prev.idproduct > current.idproduct) ? prev : current);
          this.newItem.idProduct = lastProduct.idproduct + 1;
        } else {
          // If no product has an idProduct, start with 1
          this.newItem.idProduct = 1;
          console.log('No product has an idProduct');
        }
      }
      restaurant.products.push({...this.newItem});
      console.log('restaurant.products',restaurant.products);
      console.log('this.newItem',this.newItem);
      
      // Format the keys of the restaurant
      let formattedRestaurant = this.formatKeys(restaurant);
      console.log('formattedRestaurant:create',formattedRestaurant);
      
      // Use formattedRestaurant in your axios request
      axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.error('Restaurant not found');
    }

    // Close the dialog and reset the newItem object
    this.newItemDialog = false;
    this.newItem = {
      idProduct: 1,
      image: '',
      name: '',
      details: '',
      price: ''
    };
  }


  editItem(item: Product, restau: Restaurant) {
    this.editedItem = item;
    this.editedRestau = restau;
    console.log(item);
    console.log(restau);
    this.dialog = true;
  }

  deleteItem(item: Product, restau: Restaurant) {
    console.log('item:', item);
    console.log('restau:', restau);
    
    // Find the restaurant in the user's restaurants array
    let restaurant = this.user.restaurants.find(r => r._id === restau._id);
    console.log('restaurant:', restaurant);

    if (restaurant) {
      // Find the index of the product in the restaurant's products array
      let index = restaurant.products.findIndex(p => p._id === item._id);
      console.log('index:', index);
      
      if (index !== -1) {
        // Delete the product from the restaurant's products array
        restaurant.products.splice(index, 1);

        // Update the restaurant on the server
        let formattedRestaurant = this.formatKeys(restaurant);
        console.log('formattedRestaurant:delete', formattedRestaurant);
        axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.error('Product not found');
      }
    } else {
      console.error('Restaurant not found');
    }
  }

  saveChanges(item: Product, restau: Restaurant) {
  // Find the restaurant in the user's restaurants array
  let restaurant = this.user.restaurants.find(r => r._id === restau._id);
  
  if (restaurant) {
    // Find the product in the restaurant's products array
    let product = restaurant.products.find(p => p._id === item._id);
    
    if (product) {
      // Format the keys of the edited item
      let formattedEditedItem = this.formatKeys(this.editedItem);

      // Update the product
      Object.assign(product, formattedEditedItem);

      // Format the keys of the restaurant
      let formattedRestaurant = this.formatKeys(restaurant);
      
      // Update the restaurant on the server
      axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.error('Product not found');
    }
  } else {
    console.error('Restaurant not found');
  }

  this.dialog = false;
}


//TODO--here
  //contenu menus  
  editMenu(restaurant: Restaurant, category: ChoiceMenu) {
    this.editedMenu = category;
    this.editedRestau = restaurant;

    // Create a map of product IDs and pricemod from category.products
    let productMap = new Map();
    this.editedMenu.products.forEach(product => productMap.set(product.idproduct, product.pricemod));
    console.log(productMap);

    // Initialize isChecked and pricemod for each product in the restaurant
    for (let product of this.editedRestau.products) {
      product.isChecked = productMap.has(product.idproduct);  // Set isChecked to true if the product ID exists in productMap
      product.pricemod = productMap.get(product.idproduct) || product.price; // Get pricemod from productMap or use initial price
    }
    console.log(this.editedRestau.products);
    
    this.categoryDialog = true; 
  }

  createNewMenu(restau: Restaurant) {
    // Initialize the new menu
    const newMenu = {
      "IdMenu": 1, 
      "Name": "menu",
      "Image": "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg", 
      "Products": [
        {
          "Name": "Nouveau produit",
          "Products": [
            {
              "IdProduct": 1, 
              "PriceMod": 0 
            }
          ]
        }
      ],
      "Details": "Détails du nouveau menu",
      "Price": 0
    };

    // Find the restaurant in the user's restaurants array
    let restaurant = this.user.restaurants.find(r => r._id === restau._id);
    
    if (restaurant) {
      // Initialize Menus as an empty array if it is undefined
      if (!restaurant.Menus) {
        restaurant.Menus = [];
      }
      
      // Check if restaurant.Menus is empty
      if (restaurant.Menus.length === 0) {
        newMenu.IdMenu = 1;
      } else {
        // Filter menus that have a defined IdMenu
        let menusWithIdMenu = restaurant.Menus;
        console.log(menusWithIdMenu);
        
        if(menusWithIdMenu.length > 0) {
          let lastMenu = menusWithIdMenu.reduce((prev, current) => (prev.IdMenu > current.IdMenu) ? prev : current);
          newMenu.IdMenu = lastMenu.IdMenu + 1;
        } else {
          // If no menu has an IdMenu, start with 1
          newMenu.IdMenu = 1;
          console.log('No menu has an IdMenu');
        }
      }
      
      // Push the new menu to the restaurant's Menus array
      restaurant.Menus.push({...newMenu});
      
      // Format the keys of the restaurant
      let formattedRestaurant = this.formatKeys(restaurant);
      console.log('formattedRestaurant:create', formattedRestaurant);
      
      // Use formattedRestaurant in your axios request
      axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.error('Restaurant not found');
    }
  }


  saveMenuChanges() {
    if (this.editedMenu && this.editedRestau) {
      let i = this.user.restaurants.indexOf(this.editedRestau);
      if (i === -1) {
        console.error('editedRestau not found in user.restaurants');
        return;
      }
      let j = this.user.restaurants[i].menus.findIndex(menu => menu.products.includes(this.editedMenu));
      if (j === -1) {
        console.error('editedMenu not found in user.restaurants[i].menus');
        return;
      }
      let k = this.user.restaurants[i].menus[j].products.indexOf(this.editedMenu);
      if (k === -1) {
        console.error('editedMenu not found in user.restaurants[i].menus[j].products');
        return;
      }

      // Create a new array of selected products
      let selectedProducts = this.editedRestau.products
        .filter(product => product.isChecked)
        .map(product => ({idproduct: product.idproduct, pricemod: product.pricemod}));

      // Copy the array of selected products to user.restaurants[i].menus[j].products[k].products
      this.user.restaurants[i].menus[j].products[k].products = selectedProducts;
      console.log(" modifs :  ",selectedProducts);

      // Format the keys of the restaurant
      let formattedRestaurant = this.formatKeys(this.user.restaurants[i]);
      console.log('formattedRestaurant:save', formattedRestaurant);

      // Use formattedRestaurant in your axios request
      axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    this.categoryDialog = false;
  }


  //category
  editCategory(i: number, j: number, menu: Menu) {
    this.editedIndices = [i, j];
    this.editedBlock = menu;
    // Deep copy of the menu to edit
    this.editedMenu = JSON.parse(JSON.stringify(this.user.restaurants[i].menus[j]));
    console.log("editedMenu:",this.editedMenu);
    // this.editedBlock = this.user.restaurants[i].menus[j];
    this.menuDialog = true;
  }

  addCategory() {
    // Add a new category with an empty name and no products
    if(this.editedMenu && this.editedMenu.products){
      this.editedMenu.products.push({
        name: "nom de section",
        products: []
      });
    }
  }

  deleteCategory(k: number) {
    // Delete the category at index k
    if(this.editedMenu && this.editedMenu.products){
      this.editedMenu.products.splice(k, 1);
    }
  }


  saveCategoryChanges() {
    if (this.editedMenu && this.editedIndices.length === 2) {
      const [i, j] = this.editedIndices;
      if (i < this.user.restaurants.length && j < this.user.restaurants[i].menus.length) {
        // Deep copy of the edited menu back to the original menu
        this.user.restaurants[i].menus[j] = JSON.parse(JSON.stringify(this.editedMenu));

        // Format the keys of the restaurant
        let formattedRestaurant = this.formatKeys(this.user.restaurants[i]);

        // Use formattedRestaurant in your axios request
        axios.put(`/restaurant/${formattedRestaurant._id}`, formattedRestaurant)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.error('Indices are out of bounds');
      }
    }
    this.menuDialog = false;
  }

  //restaurant
  createNewRestaurant(){
    let newRestaurant = {
        Status: "waiting",
        IdUser: 0,
        Image: "",
        Name: "nom du restaurant",
        City: "",
        ZipCode: 0,
        Rating: 0,
        Schedule: {
            Monday: "12:00-14:00, 17:00-22:00",
            Tuesday: "12:00-14:00, 17:00-22:00",
            Wednesday: "12:00-14:00, 17:00-22:00",
            Thursday: "12:00-14:00, 17:00-22:00",
            Friday: "12:00-14:00, 17:00-22:00",
            Saturday: "12:00-14:00, 17:00-22:00",
            Sunday: "12:00-14:00, 17:00-22:00",
        },
        Products: "",
        Menus: "",
      }

      newRestaurant.IdUser = this.user.IdUtilisateur;
      console.log(newRestaurant);

      this.restauDialog = true;
  }

  saveNewRestaurant() {
    let newRestaurantLowercase = {
      status: this.newRestaurant.Status,
      iduser: this.newRestaurant.IdUser,
      image: this.newRestaurant.Image,
      name: this.newRestaurant.Name,
      city: this.newRestaurant.City,
      zipCode: this.newRestaurant.ZipCode,
      rating: this.newRestaurant.Rating,
      schedule: {
        monday: this.newRestaurant.Schedule.Monday,
        tuesday: this.newRestaurant.Schedule.Tuesday,
        wednesday: this.newRestaurant.Schedule.Wednesday,
        thursday: this.newRestaurant.Schedule.Thursday,
        friday: this.newRestaurant.Schedule.Friday,
        saturday: this.newRestaurant.Schedule.Saturday,
        sunday: this.newRestaurant.Schedule.Sunday,
      },
      products: this.newRestaurant.Products,
      menus: this.newRestaurant.Menus,
    };

    console.log(newRestaurantLowercase);
    this.user.restaurants.push(newRestaurantLowercase);

    axios.post('/restaurant', this.newRestaurant)
        .then(response => {
            this.restauDialog = false;
            console.log(response.data);
            // Vous pouvez ajouter ici d'autres actions, comme la mise à jour de la liste des restaurants
        })
        .catch(error => {
            console.log(error);
            // Gérez l'erreur comme vous le souhaitez, peut-être en montrant une notification à l'utilisateur
        });
  }



  mounted () {
    console.log(this.user.restaurants)
  }
  
}

</script>

.round{
  border-radius: 25px;
}
</style>