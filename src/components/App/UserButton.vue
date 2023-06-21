<template>
  <div>
    <v-btn v-if="loggedOut" solid color="success" @click="GoToLogin">
      <v-icon left>
        mdi-account-arrow-down-outline
      </v-icon>
      Connexion
    </v-btn>
    <v-menu v-else offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn 
          solid 
          color="succes" 
          v-bind="attrs"
          v-on="on"
        >
          <v-icon v-if="userProfilePictureB64 == undefined" left>
            mdi-account
          </v-icon>
          <v-img v-else left :src="userProfilePicture"/>
          Profile
        </v-btn>
      </template>

      <v-list>
        <v-list-item :href="hrefProfile">
          <v-list-item-avatar>
            <v-icon v-if="userProfilePictureB64 == undefined" left>
              mdi-account
            </v-icon>
            <v-img v-else :src="userProfilePicture"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{userName}}
            </v-list-item-title>
            <v-list-item-subtitle>
              Paramètres
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-list nav dense>
        <v-list-item-group v-model="selectedItem">
          <v-list-item 
            v-for="(navOption, i) in navOptions" 
            :key="i"
            :href="navOption.href"
          >
            <v-list-item-icon>
              <v-icon v-text="navOption.icon"/>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="navOption.text"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>
  
<script lang="ts">
import UserButtonListItem from '../../types/UserButtonListItem';
import { mapState } from 'vuex'
import Vue from 'vue'

interface UserButtonData {
  expandMenu: boolean,
  selectedItem: number,
}

export default Vue.extend({
  components: {},

  data() : UserButtonData {return {
    expandMenu: false,
    selectedItem: -1,
  }},

  computed: {
    ...mapState({
      loggedOut: 'loggedOut',
      userName: 'userName',
      userProfilePictureB64: 'userProfilePictureB64',
      userRole: 'userRole',

      hrefProfile: 'hrefProfile',
      hrefCommands: 'hrefCommands',
      hrefCatalogue: 'hrefCatalogue',
      //hrefStats: 'hrefStats',
      hrefRestaurantStats: 'hrefRestaurantStats',
      hrefDelivery: 'hrefDelivery',
      hrefLogin: 'hrefLogin'
    }),
    navOptions(): Array<UserButtonListItem> {
      if(this.userRole === "client")
        return [
          {
            text: "Mes Commandes",
            icon: "mdi-format-list-bulleted",
            href: this.hrefCommands
          }
        ]
      if(this.userRole === "restaurant")
        return [
          {
            text: "Mon Catalogue",
            icon: "mdi-format-list-bulleted-type",
            href: this.hrefCatalogue
          },{
            text: "Mes Commandes",
            icon: "mdi-format-list-bulleted",
            href: this.hrefCommands
          },{
            text: "Mes Statistiques",
            icon: "mdi-chart-bar",
            href: this.hrefRestaurantStats
          }
        ]
        if(this.userRole === "delivery")
        return [
          {
            text: "Livraisons",
            icon: "mdi-package-variant",
            href: this.hrefDelivery
          }
        ]
      return []
    },
    userProfilePicture(): string {
      if(this.userProfilePictureB64 === null)
        return ""
      return this.B64ImgToSrc(this.userProfilePictureB64);
    }
  },
  
  methods:{
    GoToLogin() {
      //this.loggedOut = !this.loggedOut;
      window.location.href = this.hrefLogin;
    },
    ToggleMenu() {
      this.expandMenu = !this.expandMenu;
    },
    B64ImgToSrc(b64Img : string): string {
      return 'data:image/png;base64, '+b64Img;
    }
  }
})
</script>

<style>

</style>