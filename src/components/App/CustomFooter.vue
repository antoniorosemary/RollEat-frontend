<template>
  <div>
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
  </div>
</template>
  
<script lang="ts">
import ResponsiveLogo from '../ResponsiveLogo.vue';
export default {
  components: {
    ResponsiveLogo
  }
}
</script>

<style>
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