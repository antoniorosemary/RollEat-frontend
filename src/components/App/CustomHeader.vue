<template>
    <v-app-bar
      app
      dark
      color="#DA7635"
      elevation="0"
      extension-height="0"
      height="64"
    >
      <template v-slot:default>
        <v-container class="ma-0" style="max-width: 100%">
          <v-row justify="space-between" align="center">
            <v-col class="col-auto">
              <ResponsiveLogo/>
            </v-col>
  
            <v-col class="col-auto">
            </v-col>
          </v-row>
        </v-container>
      </template>
      
      <template v-slot:extension>
        <svg class="wave-top" viewBox="0 0 1440 55">
          <path 
            fill="#DA7635" 
            fill-opacity="1" 
            d="M 0 30 Q 360 -20 720 30 Q 1080 80 1440 30 L 1440 0 L 0 0 L 0 50"
          />
        </svg>
      </template>
    </v-app-bar>
  </template>
    
  <script lang="ts">
  import ResponsiveLogo from '../ResponsiveLogo.vue';
  export default {
    components: {
      ResponsiveLogo,
    }
  }
  </script>
  
  <style>
  .wave-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  </style>