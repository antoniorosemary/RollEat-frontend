<template>
    <v-container fluid class="d-flex justify-center align-center" style="height: 100vh;width: 100vw;">
      
    <v-toolbar
      dense
      floating
      class="d-flex justify-center align-center"
    >
    
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          class="my-custom-text-field flex-grow-1"
          
        ></v-text-field>
      
        <v-btn>
          rechercher
        </v-btn>


    </v-toolbar>
    </v-container>
  </template>

<style>
.my-custom-text-field {
  width: 600px;
}
</style>

  <script lang="ts">
    import Vue from 'vue'
  
    export default Vue.extend({
      name: 'HomePage'
  
    })
  </script>
  