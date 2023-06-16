<template>
    <v-card max-width="375" class="mx-auto">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
        <v-row class="fill-height">
          <v-card-title>  
            <v-spacer></v-spacer>
  
            <v-btn dark icon class="mr-4">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>
  
          <v-spacer></v-spacer>
  
          <v-card-title class="white--text pl-12 pt-12">
            <div class="text-h4 pl-12 pt-12">
              {{ user.firstName }} {{ user.lastName }}
            </div>
          </v-card-title>
        </v-row>
      </v-img>
  
      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-email
            </v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
            <v-list-item-subtitle>Email</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-map-marker
            </v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ user.address }}</v-list-item-title>
            <v-list-item-subtitle>Adresse</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-calendar
            </v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ user.dateOfBirth }}</v-list-item-title>
            <v-list-item-subtitle>Date de naissance</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-lock
            </v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>********</v-list-item-title>
            <v-list-item-subtitle>Mot de passe</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
</template>
  
<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>
  
<style scoped>
.v-card {
  margin: 0 auto;
  max-width: 375px;
}

.v-img {
  height: 300px;
}

.text-h4 {
  padding-left: 12px;
  padding-top: 12px;
}
</style>
