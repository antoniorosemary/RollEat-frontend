<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="#DA7635"
      elevation="0"
      extension-height="0"
      height="64"
    >
      <template v-slot:default>
        <div class="d-flex align-center">
          <v-img
            alt="Roll Eat Logo"
            class="d-none d-sm-flex"
            contain
            src="./assets/Logo outlined 128x64.png"
          />
          <v-img
            alt="Roll Eat Logo"
            class="d-flex d-sm-none"
            contain
            src="./assets/Logo outlined 64x64.png"
          />
        </div>
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

    <v-main>
      <router-view/>
    </v-main>

    <div class="footer" style="position: relative;">
      

      <v-footer app style="background-color: rgb(255,0,0,0);">
        <svg class="wave-bottom" viewBox="0 0 1440 50" style="position: absolute; bottom: 100%; margin-bottom: -50px;">
          <path 
            fill="#DA7635" 
            fill-opacity="1" 
            d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 50 L 0 50 L 0 50"
          />
        </svg>
      </v-footer>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 100%;
}

body {
  background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
 /* padding:32px;*/
}

img {
  max-width: 100%;
  border-radius: 8px;
}


header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px; /* Height of the header */
  z-index: 20;
  background-color: #DA7635;
  /* Add your other styles for the header here */
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px; /* Height of the footer */
  z-index: 20;
  background-color: #DA7635;
  /* Add your other styles for the footer here */
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}
</style>