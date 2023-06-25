<template>
  <v-container 
    fluid 
    class="d-flex justify-center align-center" 
    style="
      height: 100vh;
      width: 100vw; 
      background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);
    "
  >  
    <v-card class="elevation-3" >
      <v-card-title h3>
        Connexion
      </v-card-title>

      <v-card-subtitle>
        Vous n'avez pas encore de compte ?
          <router-link :to="hrefRegister">
            <a>
              créer un compte
            </a>
          </router-link>
      </v-card-subtitle>

      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="email"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            color="#654236ff"
          />

          <v-text-field
            prepend-icon="lock"
            v-model="password"
            :error-messages="passwordErrors"
            label="Mot de passe"
            required
            type="password"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            color="#654236ff"
          />
        </v-form>

        <v-alert
          outlined
          type="warning"
          prominent
          border="left"
          v-if="loginMessage"
        >
          {{ loginMessage }}  
        </v-alert>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>

        <v-btn color=#da7635ff @click="submitForm">
          Se connecter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email, helpers } from 'vuelidate/lib/validators';
import axios from 'axios';
import store from '../store/index'


import { mapState } from 'vuex';
import {validationMixin} from 'vuelidate';

const passwordMinLength = helpers.withParams(
  { 
    type: 'contains',
    min: 8 
  },
  (value :string) => value.length >= 8
)

const passwordHasUppercase = helpers.withParams(
  {type: 'contains'},
  (value :string) => /[A-Z]/.test(value)
)

const passwordHasLowercase = helpers.withParams(
  {type: 'contains'},
  (value :string) => /[a-z]/.test(value)
)

const passwordHasDigit = helpers.withParams(
  {type: 'contains'},
  (value :string) => /\d/.test(value)
)

const passwordHasSpecialChar = helpers.withParams(
  {type: 'contains'},
  (value :string) => /[!@#$%^&*]/.test(value)
)

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      loginMessage: '',
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      passwordMinLength,
      passwordHasUppercase,
      passwordHasLowercase,
      passwordHasDigit,
      passwordHasSpecialChar
    },
  },
  computed: {
    ...mapState([
      'hrefRegister'
    ]),
    emailErrors () {
      const errors : Array<string> = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be a valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors : Array<string> = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.passwordMinLength && errors.push('Password must be at least 8 characters long.')
      !this.$v.password.passwordHasUppercase && errors.push('Password must contain at least one uppercase letter.')
      !this.$v.password.passwordHasLowercase && errors.push('Password must contain at least one lowercase letter.')
      !this.$v.password.passwordHasDigit && errors.push('Password must contain at least one digit.')
      !this.$v.password.passwordHasSpecialChar && errors.push('Password must contain at least one special character.')
      return errors
    },
  },

  methods: {
    submitForm() {
      axios.post(
        '/login', 
        { username: this.email, password: this.password }, 
        { withCredentials: true }
      )
        .then(response => {
          console.log(response.data);
          // Traitez la réponse de l'API Gateway ici
          this.loginMessage = 'Connexion réussie!';
          let token = response.headers.authorization
          console.log(response.headers);
          localStorage.setItem('token', token); // Enregistrement du token dans le local storage
          //this.$store.state.userToken = token; // Enregistrement du token dans le store 
          this.$router.push('/restaurant'); // Redirection vers la page d'accueil
        })
        .catch(error => {
          console.error(error);
          // Traitez les erreurs ici
          this.loginMessage = 'Identifiant ou mot de passe incorrect !';
        });
    }
  }
})

</script>

<style>
</style>
