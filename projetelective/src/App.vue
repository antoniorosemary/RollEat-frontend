<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="#DA7635"
    >
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
    </v-app-bar>

    <svg class="wave-top" viewBox="0 0 1440 50">
      <path 
        fill="#DA7635" 
        fill-opacity="1" 
        d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 0 L 0 0 L 0 50"
      />
    </svg>

    <v-main>
      <router-view/>
    </v-main>

    <svg class="wave-bottom" viewBox="0 0 1440 50">
      <path 
        fill="#DA7635" 
        fill-opacity="1" 
        d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 50 L 0 50 L 0 50"
      />
    </svg>
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
.wave-top {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}
</style>