<template>
  <div>
    <v-col lg="4">
      <ClientProfile v-if="role === 'client'" :user="user" />
      <RestaurantProfile v-else-if="role === 'restaurant'" :user="user" />
      <DeliveryProfile v-else-if="role === 'delivery'" :user="user" />
      <AdminProfile v-else-if="role === 'admin'" :user="user" />
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
      // return {
      //   role: '', // This would be set based on your authentication logic
      //   user: {}  // This would be the user data retrieved from your backend
      // }
      return {
      role: 'client', // Set the role to 'client' for testing
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        address: '123 Main St, Anytown, USA',
        birthDate: '1990-01-01',
        password: 'password123'
      }
    }
    }
  }
  </script>

<style scoped>
</style>