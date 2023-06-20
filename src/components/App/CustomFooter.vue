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
      <v-row justify="space-between">
        <v-col class="col-auto pl-0">
          <ResponsiveLogo/>
        </v-col>
        
        <v-col class="col-auto container mr-0">
          <v-row no-gutters>
            <v-col class="col-12 footer-link" sm="6">
              <router-link :to="hrefContactUs">
                <a>Nous contacter</a>
              </router-link>
            </v-col>

            <v-col class="col-12 footer-link" sm="6">
              <router-link :to="hrefBecomeDelivery">
                <a>Devenir Livreur</a>
              </router-link>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="col-12 footer-link" sm="6">
              <router-link :to="hrefAboutUs">
                <a>A propos de Roll Eat</a>
              </router-link>
            </v-col>

            <v-col class="col-12 footer-link" sm="6">
              <router-link :to="hrefAddRestaurant">
                <a>Ajouter votre restaurant</a>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script lang="ts">
import ResponsiveLogo from './ResponsiveLogo.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ResponsiveLogo
  },
  computed: {
    ...mapState([
      'hrefContactUs',
      'hrefBecomeDelivery',
      'hrefAboutUs',
      'hrefAddRestaurant'
    ])
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
  min-height: 120px;
}

.footer-link {
  max-width: 200px;
}
</style>