<template>
  <v-container fluid class="d-flex justify-center align-center" style="height: 100vh;width: 100vw; background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);">
    
    <v-card class="elevation-3" >
      <v-progress-linear :value="progress" color="#e24e1bff"></v-progress-linear>
      <v-card-title h3>
        Créer un compte
      </v-card-title>
      <v-card-subtitle>
        Vous avez déja un compte ? 
        <a :href="hrefLogin">
          connectez vous
        </a>
      </v-card-subtitle>

      <v-card-text>
        <v-form>
          <div v-if="step === 1">
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

            <v-text-field
              prepend-icon="lock"
              v-model="confirmPassword"
              :error-messages="confirmPasswordErrors"
              label="Confirmation du mot de passe"
              required
              type="password"
              @input="$v.confirmPassword.$touch()"
              @blur="$v.confirmPassword.$touch()"
              color="#654236ff"
            ></v-text-field>


          </div>

          <div v-if="step === 2">
            <v-text-field
              prepend-icon="person"
              v-model="firstName"
              :error-messages="firstNameErrors"
              :counter="50"
              label="Prénom"
              required
              @input="$v.firstName.$touch()"
              @blur="$v.firstName.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-text-field
              prepend-icon="person"
              v-model="lastName"
              :error-messages="lastNameErrors"
              :counter="50"
              label="Nom"
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-text-field
              prepend-icon="phone"
              v-model="phone"
              :error-messages="phoneErrors"
              label="Téléphone"
              required
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
              color="#db995aff"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateOfBirth"
                  label="Date de naissance"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  color="#654236ff"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dateOfBirth" @input="menu = false"></v-date-picker>
            </v-menu>
          </div>

          <div v-if="step === 3">
            <v-text-field
              prepend-icon="map-marker"
              v-model="address"
              :error-messages="addressErrors"
              label="Adresse"
              required
              @input="$v.address.$touch()"
              @blur="$v.address.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-text-field
              prepend-icon="earth"
              v-model="country"
              :error-messages="countryErrors"
              label="Pays"
              required
              @input="$v.country.$touch()"
              @blur="$v.country.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-text-field
              prepend-icon="city"
              v-model="city"
              :error-messages="cityErrors"
              label="Ville"
              required
              @input="$v.city.$touch()"
              @blur="$v.city.$touch()"
              color="#654236ff"
            ></v-text-field>

            <v-text-field
              prepend-icon="map"
              v-model="postalCode"
              :error-messages="postalCodeErrors"
              label="Code Postal"
              required
              @input="$v.postalCode.$touch()"
              @blur="$v.postalCode.$touch()"
              color="#654236ff"
            ></v-text-field>
          </div>
          
        </v-form>

      </v-card-text>
      <v-card-actions>
        <v-btn color=#d6d4a0ff @click="previousStep" :disabled="step === 1">
          Étape précédente
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color=#da7635ff @click="nextStep">
          {{ step < 3 ? 'Étape suivante' : 'Se connecter' }}
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex';
import { required, maxLength, email, helpers, sameAs } from 'vuelidate/lib/validators';
import axios from 'axios';
import { validationMixin } from 'vuelidate'

const passwordMinLength = helpers.withParams(
  { 
    type: 'contains',
    min: 8 
  },
  (value :string) => value.length >= 8
)


const numeric = helpers.regex('numeric', /^[0-9]*$/)

const phoneFormat = helpers.withParams(
  {type: 'contains'},
  (value :string) => /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/im.test(value)
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

const submitForm = async (formData : any) : Promise<void> => {
  try {
    const response = await axios.post('API_URL', formData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      step: 1,
      menu: false,
      dateOfBirth: null,
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      country: '',
      city: '',
      postalCode: '',
      email: '',
      password: '',
      confirmPassword: '',
      // ...
    }
  },
  validations: {
    firstName: { required, maxLength: maxLength(50) },
    lastName: { required, maxLength: maxLength(50) },
    phone: { required, phoneFormat },
    address: { required },
    country: { required },
    city: { required },
    postalCode: { required, numeric },
    email: { required, email },
    password: {
      required,
      passwordMinLength,
      passwordHasUppercase,
      passwordHasLowercase,
      passwordHasDigit,
      passwordHasSpecialChar
    },
    dateOfBirth: { required },
    confirmPassword: {sameAsPassword: sameAs('password')},
  },
  computed: {
    ...mapState([
      'hrefLogin'
    ]),
    progress() {
      return this.step * 33.33;
    },
    firstNameErrors () {
      const errors : Array<string> = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.required && errors.push('First name is required.')
      !this.$v.firstName.maxLength && errors.push('firstName must be at most 50 characters long')
      return errors
    },
    lastNameErrors () {
      const errors : Array<string> = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.required && errors.push('Last name is required.')
      !this.$v.firstName.maxLength && errors.push('LastName must be at most 50 characters long')
      return errors
    },
    phoneErrors () {
      const errors : Array<string> = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Phone number is required.')
      !this.$v.phone.phoneFormat && errors.push('Invalid phone number format.')

      return errors
    },
    addressErrors () {
      const errors : Array<string> = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.required && errors.push('Address is required.')
      return errors
    },
    countryErrors () {
      const errors : Array<string> = []
      if (!this.$v.country.$dirty) return errors
      !this.$v.country.required && errors.push('Country is required.')
      return errors
    },
    cityErrors () {
      const errors : Array<string> = []
      if (!this.$v.city.$dirty) return errors
      !this.$v.city.required && errors.push('City is required.')
      return errors
    },
    postalCodeErrors () {
      const errors : Array<string> = []
      if (!this.$v.postalCode.$dirty) return errors
      !this.$v.postalCode.required && errors.push('Postal code is required.')
      !this.$v.postalCode.numeric && errors.push('Postal code must be numeric.')
      return errors
    },
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
    dateOfBirthErrors () {
      const errors : Array<string> = []
      if (!this.$v.dateOfBirth.$dirty) return errors
      !this.$v.dateOfBirth.required && errors.push('Date of birth is required.')
      return errors
    },
    confirmPasswordErrors() {
      const errors : Array<string> = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.sameAsPassword && errors.push('Password confirmation does not match.')
      return errors
    },
  },
  methods: {
    nextStep() : void{
      if (this.step === 1 && !this.$v.email.$invalid && !this.$v.password.$invalid) {
        this.step++
      } else if (this.step === 2 && !this.$v.firstName.$invalid && !this.$v.lastName.$invalid && !this.$v.phone.$invalid && !this.$v.dateOfBirth.$invalid) {
        this.step++
      } else if (this.step === 3 && !this.$v.$invalid) {
        const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        address: this.address,
        country: this.country,
        city: this.city,
        postalCode: this.postalCode,
        email: this.email,
        password: this.password,
        dateOfBirth: this.dateOfBirth,
      }
        submitForm(formData);
      }
    },

    previousStep() : void{
      if (this.step > 1) {
        this.step--
      }
    },
    // ...
  }
})
</script>
