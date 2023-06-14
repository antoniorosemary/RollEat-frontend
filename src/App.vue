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
          <ResponsiveLogo/>
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

    <footer>
      <svg class="wave-bottom" viewBox="0 0 1440 55">
        <path 
          fill="#DA7635" 
          fill-opacity="1" 
          d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 55 L 0 55 L 0 55"
        />
      </svg>
      <v-container class="ma-0 footer-body" style="max-width: 100%">
        <v-row>
          <v-col class="col-auto">
            <ResponsiveLogo/>
          </v-col>
          <v-spacer/>
          <v-col class="col-auto container mr-sm-10 mr-n16">
            <v-row no-gutters>
              <v-col class="col-12 footer-link" sm="6">
                <a>Nous contacter</a>
              </v-col>
              <v-col class="col-12 footer-link" sm="6">
                <a>Devenir Livreur</a>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="col-12 footer-link" sm="6">
                <a>A propos de Roll Eat</a>
              </v-col>
              <v-col class="col-12 footer-link" sm="6">
                <a>Ajouter votre restaurant</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!--div class="footer-body d-flex justify-space-around">
        <ResponsiveLogo/>
        <div class="d-flex justify-sm-space-around">
          <div>
            <a>Nous contacter</a><br>
            <a>Ajouter votre restaurant</a>
          </div>
          <div>
            <a>Devenir Livreur</a><br>
            <a>A propos de Roll Eat</a>
          </div>
        </div>
      </div-->
      <!--Alexandre est beau, fort et puissant. Gloire a son éternité !-->
    </footer>
    
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ResponsiveLogo from './components/ResponsiveLogo.vue';

export default Vue.extend({
  name: 'App',
  components: {
    ResponsiveLogo
},

  data: () => ({
    //
  }),
});
</script>

<style src="./colors.css"/>
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

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.wave-bottom {
  margin-bottom: -7px;
}

.footer-body {
  background-color: #DA7635;
  color: white; 
  height: 120px;
}

.footer-link {
  max-width: 200px;
}
</style>