<template>
  <div>
    <v-col lg="4" class="round">
      <ClientProfile v-if="role === 'client'" :user="user" />
      <RestaurantProfile v-else-if="role === 'restaurant'" :user="user" />
      <DeliveryProfile v-else-if="role === 'delivery'" :user="user" />
      <AdminProfile v-else-if="role === 'admin'" :user="user" />
    </v-col>
    <v-col lg="4" class="round">

    </v-col>
  </div>
</template>
  
<script lang="ts">
import ClientProfile from '../components/Profiles/ClientProfile.vue'
import RestaurantProfile from '../components/Profiles/RestaurantProfile.vue'
import DeliveryProfile from '../components/Profiles/DeliveryProfile.vue'
import AdminProfile from '../components/Profiles/AdminProfile.vue'
  
  export default {
    components: {
      ClientProfile,
      RestaurantProfile,
      DeliveryProfile,
      AdminProfile
    },
    data() {
      return {
      role: 'client', // Set the role to 'client' for testing
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
        password: 'password123'
      }

    }
    }
  }
  </script>

<style scoped>
.round{
    border-radius: 25;
}
</style>