

<template>
  <v-container fluid class="d-flex justify-center align-center" style="height: 100vh; width: 100vw; background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);">
    <v-card class="elevation-3">
      <v-card-title h3>
        Connexion
      </v-card-title>
      <v-card-subtitle>
        Vous n'avez pas encore de compte ?
        <router-link to="/register">
          créer un compte
        </router-link>
      </v-card-subtitle>
      <v-card-text>
        <v-form @submit.prevent="loginUser">
          <v-text-field
            prepend-icon="person"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            ref="emailField"
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            v-model="password"
            :error-messages="passwordErrors"
            :counter="10"
            label="Mot de passe"
            required
            ref="passwordField"
          ></v-text-field>
          <v-card-actions>
            <v-btn color="primary" type="submit">Se connecter</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-container v-if="loginMessage" class="mt-4">
      <v-alert outlined>{{ loginMessage }}</v-alert>
    </v-container>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
      loginMessage: '',
      emailErrors: [],
      passwordErrors: [] // Note : les conventions pour les noms de propriétés en JavaScript favorisent généralement le camelCase, donc "passwordErrors" serait plus approprié.
    }
  },

  methods: {
    loginUser() {
      axios.post('http://localhost:3000/login', { username: this.email, password: this.password })
        .then(response => {
          console.log(response.data);
          // Traitez la réponse de l'API Gateway ici
          this.loginMessage = 'Connexion réussie!';
          this.$router.push('/accueil'); // Redirection vers la page d'accueil
        })
        .catch(error => {
          console.error(error);
          // Traitez les erreurs ici
          this.loginMessage = 'Identifiant ou mot de passe incorrect !';
        });
    }
  }
}

</script>
