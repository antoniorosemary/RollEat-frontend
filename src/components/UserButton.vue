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
          <v-list-item :href="userProfileHref">
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
  import ListItem from "../Types/ListItem";
  
  interface UserButtonData {
    loggedOut: boolean,
    userName: string | undefined,
    userProfilePictureB64: string | undefined,
    userRole: string | undefined,
    expandMenu: boolean,
    selectedItem: number,
    userProfileHref: string
  }
  
  export default {
    components: {},
    data() : UserButtonData {return {
      loggedOut: true,
      userName: "jean valjean",
      userProfilePictureB64: undefined,
      userRole: "delivery",
      expandMenu: false,
      selectedItem: -1,
      userProfileHref: "/UserProfile"
    }},
    computed: {
      navOptions(): Array<ListItem> {
        if(this.userRole === "client")
          return [
            {
              text: "Mes Commandes",
              icon: "mdi-format-list-bulleted",
              href: "/Commands"
            }
          ]
        if(this.userRole === "restaurant")
          return [
            {
              text: "Mon Catalogue",
              icon: "mdi-format-list-bulleted-type",
              href: "/Catalogue"
            },{
              text: "Mes Commandes",
              icon: "mdi-format-list-bulleted",
              href: "/Commands"
            },{
              text: "Mes Statistiques",
              icon: "mdi-chart-bar",
              href: "/Stats"
            }
          ]
          if(this.userRole === "delivery")
          return [
            {
              text: "Livraisons",
              icon: "mdi-package-variant",
              href: "/delivery"
            }
          ]
        return []
      },
      userProfilePicture(): string {
        if(this.userProfilePictureB64 === undefined)
          return ""
        return this.B64ImgToSrc(this.userProfilePictureB64);
      }
    },
    methods:{
      GoToLogin() {
        this.loggedOut = !this.loggedOut;
        //window.location.href = "/login"
      },
      ToggleMenu() {
        this.expandMenu = !this.expandMenu;
      },
      B64ImgToSrc(b64Img : string): string {
        return 'data:image/png;base64, '+b64Img;
      }
    }
  }
  </script>
  
  <style>
  
  </style>