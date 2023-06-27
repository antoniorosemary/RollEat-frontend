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
                    <v-btn color="blue darken-1" @click="editDialog = true">Modifier</v-btn>

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
                              <v-btn color="blue darken-1" text @click.stop="editItem(product)">Modifier</v-btn>
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
                                  <v-btn color="blue darken-1" text @click.stop="editCategory(i, j)">Modifier</v-btn>
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
          <v-btn color="red darken-1" text @click="deleteItem">Supprimer le produit</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
          <v-btn color="blue darken-1" text @click="saveChanges">Sauvegarder</v-btn>
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
                    <!-- <v-list-item>
                        <v-text-field v-model="editedBlock?.name"></v-text-field>
                    </v-list-item> -->
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
          <v-btn color="blue darken-1" text @click="saveNewItem">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- Dialogue pour modifier les infos -->
    <!-- <v-dialog v-model="editDialog" max-width="500px">
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
                <v-text-field v-if="editedRestaurant" v-for="(schedule, day) in editedRestaurant.schedule" :key="day" v-model="editedRestaurant.schedule[day]" :label="`Horaire ${day}`"></v-text-field>
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
    </v-dialog> -->




  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Product{
  IdProduct: number,
  Image: string,
  Name: string,
  Details: string,
  Price: number,
  Quantity: number,
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
  public editedRestaurant: Restaurant | null = null;
  public editedScedule: Schedule | null = null;
  public newItem: {
    image: string,
    name: string,
    details: string,
    price: string
  } = {
    image: '',
    name: '',
    details: '',
    price: ''
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
      let i = this.user.restaurants.indexOf(this.editedRestaurant);
      if (i === -1) {
        console.error('editedRestaurant not found in user.restaurants');
        return;
      }

      // Copy the edited restaurant back to the original restaurant
      this.user.restaurants[i] = JSON.parse(JSON.stringify(this.editedRestaurant));
    }
    this.editDialog = false;
  }

  editRestaurant(restaurant: Restaurant) {
    this.editedRestaurant = JSON.parse(JSON.stringify(restaurant));
    this.editDialog = true;
  }


  //items
  editItem(item: Product) {
    this.editedItem = item;
    this.dialog = true;
  }
  
  createNewItem(restaurant: Restaurant) {
    this.editedRestau = restaurant;
    this.newItemDialog = true;
  }

  saveNewItem() {
    // Ici, vous pouvez ajouter le nouvel item à votre liste d'items.
    // Cela dépend de la structure de vos données, donc je vais montrer un exemple générique.
    this.user.restaurants[0].products.push({...this.newItem});

    // Ferme le dialogue et réinitialise l'objet newItem
    this.newItemDialog = false;
    this.newItem = {
      image: '',
      name: '',
      details: '',
      price: ''
    };
  }


  deleteItem() {
    if (this.editedItem && this.editedIndices.length === 2) {
      const [i, j] = this.editedIndices;
      if (i < this.user.restaurants.length && j < this.user.restaurants[i].products.length) {
        this.user.restaurants[i].products.splice(j, 1);
        console.log("deleted");
      } else {
        console.error('Indices are out of bounds');
      }
    } else {
      console.error('No item to delete');
    }
  }


  saveChanges() {
    if (this.editedItem && this.editedIndices.length === 2) {
      const [i, j] = this.editedIndices;
      if (i < this.user.restaurants.length && j < this.user.restaurants[i].products.length) {
        this.user.restaurants[i].products[j] = this.editedItem;
      } else {
        console.error('Indices are out of bounds');
      }
    }
    this.dialog = false;
  }

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

  createNewMenu() {
    const newMenu = {
      "idmenu": this.user.restaurants[0].menus.length + 1, // ceci est un exemple, vous devrez peut-être générer l'ID d'une manière différente
      "name": "menu",
      "image": "url image par défaut", // remplacez par l'URL de votre image par défaut
      "products": [
        {
          "name": "Nouveau produit",
          "products": [
            {
              "idproduct": 1, // ceci est un exemple, vous devrez peut-être générer l'ID d'une manière différente
              "pricemod": 0
            }
          ]
        }
      ],
      "details": "Détails du nouveau menu",
      "price": 0
    };

    this.user.restaurants[0].menus.push(newMenu); // Ajoute le nouveau menu à la liste des menus
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
      console.log(selectedProducts);
    }
    this.categoryDialog = false;
  }




  //category
  editCategory(i: number, j: number) {
    this.editedIndices = [i, j];
    // Deep copy of the menu to edit
    this.editedMenu = JSON.parse(JSON.stringify(this.user.restaurants[i].menus[j]));
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
      } else {
        console.error('Indices are out of bounds');
      }
    }
    this.menuDialog = false;
  }


  mounted () {
    console.log(this.user.restaurants)
  }
  
}
}
</script>

.round{
  border-radius: 25px;
}
</style>