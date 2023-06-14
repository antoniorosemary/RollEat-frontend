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
                prepend-icon="person"
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                    prepend-icon="lock"
                    v-model="password"
                    :error-messages="PasswordErrors"
                    :counter="10"
                    label="Mot de passe"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
              ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" to="/">se connecter</v-btn>
        </v-card-actions>
      </v-card>

    </v-container>
  </template>

<style>
</style>


<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
}

</script>



<style>
</style>