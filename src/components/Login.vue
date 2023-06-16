

<template>
  <v-container fluid class="d-flex justify-center align-center" style="height: 100vh;width: 100vw; background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);">
    
    <v-card class="elevation-3" >
      <v-card-title h3>
        Connexion
      </v-card-title>
      <v-card-subtitle>
        Vous n'avez pas encore de compte ? 
        <a href="/register">
          créer un compte
        </a>
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
          ></v-text-field>

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
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color=#da7635ff @click="submitForm">
          Se connecter
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators';
import axios from 'axios';
import { validationMixin } from 'vuelidate'

const passwordMinLength = helpers.withParams(
  { min: 8 },
  value => value.length >= 8
)

const passwordHasUppercase = helpers.withParams(
  {},
  value => /[A-Z]/.test(value)
)

const passwordHasLowercase = helpers.withParams(
  {},
  value => /[a-z]/.test(value)
)

const passwordHasDigit = helpers.withParams(
  {},
  value => /\d/.test(value)
)

const passwordHasSpecialChar = helpers.withParams(
  {},
  value => /[!@#$%^&*]/.test(value)
) 
export default {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      loginMessage: '',
      emailErrors: [],
      passwordErrors: [] // Note : les conventions pour les noms de propriétés en JavaScript favorisent généralement le camelCase, donc "passwordErrors" serait plus approprié.
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
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be a valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
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
    async submitForm() {
      if (!this.$v.$invalid) {
        const formData = {
          email: this.email,
          password: this.password,
        };

        try {
          const response = await axios.post('API_URL', formData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    },
  }
}
</script>

<style>
</style>
