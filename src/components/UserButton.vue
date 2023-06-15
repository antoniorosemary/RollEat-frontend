<template>
  <div>
    <v-btn v-if="loggedOut" solid color="success" @click="GoToLogin">
      <v-icon left>
        mdi-account-arrow-down-outline
      </v-icon>
      Connexion
    </v-btn>
    <v-btn v-else solid color="succes">
      <v-icon v-if="userProfilePictureB64 == undefined" left>
        mdi-account
      </v-icon>
      <v-img v-else left :src="'data:image/png;base64, '+userProfilePictureB64"/>
      {{userName}}
    </v-btn>
  </div>
</template>
  
<script lang="ts">
export default {
  components: {},
  data: () => {return {
    loggedOut: true,
    userName: "jean valjean",
    userProfilePictureB64: undefined
  }},
  methods:{
    GoToLogin() {
      window.location.href = /*process.env.BASE_URL*/"http://localhost:8080"+"/login"
    }
  }
}
</script>

<style>

</style>