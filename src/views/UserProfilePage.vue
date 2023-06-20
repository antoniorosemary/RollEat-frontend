<template>
  <div>
    <v-row>
      <v-col lg="4">
        <Profile :user="user" />
      </v-col>
      <v-col lg="6">
        <RestaurantProfile v-if="role === 'restaurant'" :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

  
<script lang="ts">
import Profile from '../components/Profiles/Profile.vue'
import RestaurantProfile from '../components/Profiles/RestaurantProfile.vue'
  
  export default {
    components: {
      Profile,
      RestaurantProfile,
    },
    data() {
  return {
    role: 'restaurant', // Définissez le rôle sur 'client' pour les tests
    user: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      addresses: [
        {
          name: 'Maison',
          address: '123 Rue de la Maison'
        },
        {
          name: 'Travail',
          address: '456 Rue du Travail'
        },
        // Ajoutez autant d'adresses que nécessaire
      ],
      birthDate: '1990-01-01',
      password: 'password123',
      restaurants: [
        {
          name: 'pizzaland',
          address: '10 Rue de la Gastronomie',
          openingHours: {
            "Lundi": "12:00 - 14:00, 17:00-22:00",
            "Mardi": "11:00 - 13:00, 19:00-23:00",
            // Ajoutez les autres jours de la semaine ici
          },
          ratingList: [1, 2, 5, 3, 2, 1, 5, 4],
          products: [
            {
              id: 'product1',
              name: 'Pizza Margherita',
              description: 'Classic Italian pizza with tomatoes, mozzarella, and basil',
              price: 12.99,
              image: 'https://i.ibb.co/WgtZPHJ/unknown.png'
            },
            {
              id: 'product2',
              name: 'Spaghetti Bolognese',
              description: 'Spaghetti with a hearty meat and tomato sauce',
              price: 14.99,
              image: 'https://i.ibb.co/WgtZPHJ/unknown.png'
            }
          ],
          menus: [
            {
              name: 'Italian Classic',
              productIds: ['product1', 'product2']
            }
          ]
        },
        {
          name: 'pizzadelamama',
          address: '20 Rue de la Pizza',
          openingHours: {
            "Lundi": "12:00 - 14:00, 17:00-22:00",
            "Mardi": "11:00 - 13:00, 19:00-23:00"
            // Ajoutez les autres jours de la semaine ici
          },
          ratingList: [1, 3, 5, 4, 2, 1, 5, 3],
          products: [
            {
              id: 'product3',
              name: 'Lasagna',
              description: 'Traditional Italian lasagna with bolognese sauce and cheese',
              price: 15.99,
              image: 'https://i.ibb.co/WgtZPHJ/unknown.png'
            },
            {
              id: 'product4',
              name: 'Tiramisu',
              description: 'Delicious Italian dessert with coffee, mascarpone, and cocoa',
              price: 7.99,
              image: 'https://i.ibb.co/WgtZPHJ/unknown.png'
            }
          ],
          menus: [
            {
              name: 'Italian Dessert',
              productIds: ['product4']
            }
          ]
        }
      ]
    }
  }
}




  }
  </script>

<style scoped>
.round{
    border-radius: 25px;
    padding-top: 50px;
}
</style>

