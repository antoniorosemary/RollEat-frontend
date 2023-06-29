<template>
    <div>
        <v-card class="mx-auto round">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
                <v-btn dark icon class="mr-4" style="position: absolute; top: 10px; right: 0;" @click="dialog = true">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-row class="fill-height">
                    <v-card-title>  
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-title class="white--text pl-12 pt-12">
                        <div class="text-h4 pl-12 pt-12">
                            {{ user.Prenom }} {{ user.Nom }}
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
                <v-list-item-title>{{ user.Email }}</v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
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
                <v-list-item-title>{{ user.DateNaissance }}</v-list-item-title>
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

            <v-divider inset></v-divider>
    

            <!-- Adresses -->
            <v-list-item v-for="(address, index) in user.Adresses" :key="index">
                <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ address.Adresse }}</v-list-item-title>
                    <v-list-item-subtitle>{{ address.NomAdresse }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </v-list>
        </v-card>
        
         <!-- Ajout du v-dialog pour l'édition des données -->
        <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>
            <span class="headline">Modifier les informations de l'utilisateur</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col cols="12">
                    <v-text-field v-model="editedUser.Prenom" label="Prénom"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="editedUser.Nom" label="Nom"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="editedUser.Email" label="Email"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="editedUser.DateNaissance" label="Date de Naissance"></v-text-field>
                </v-col>
                <!-- Adresses -->
                <v-col cols="12" v-for="(address, index) in editedUser.Adresses" :key="index">
                    <v-text-field v-model="address.NomAdresse" :label="`Nom de l'adresse ${index + 1}`"></v-text-field>
                    <v-text-field v-model="address.Adresse" :label="`Adresse ${index + 1}`"></v-text-field>
                    <v-text-field v-model="address.Ville" :label="`Ville de l'adresse ${index + 1}`"></v-text-field>
                    <v-text-field v-model="address.CodePostal" :label="`Code Postal de l'adresse ${index + 1}`"></v-text-field>
                </v-col>
                <!-- Ajoutez d'autres champs de formulaire ici pour les autres propriétés de l'utilisateur -->
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
            <v-btn color="blue darken-1" text @click="saveChanges">Sauvegarder</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
    

</template>
  
<script lang="ts">
import { Component, Prop, Vue, Watch, } from 'vue-property-decorator';
import axios from 'axios';

interface User {
    IdUtilisateur: number;
    Prenom: string;
    Nom: string;
    Email: string;
    DateNaissance: string;
    PasswordHash: string;
    Addresses: Address[];
}

// {
//     "IdUtilisateur": 84,
//     "Nom": "Moreau",
//     "Prenom": "Alex",
//     "Telephone": "123123123",
//     "CodeParrainage": "1231551",
//     "CodeParrain": null,
//     "Email": "alexandre.moreau2001@gmail.com",
//     "PasswordHash": "$2b$10$OE8L0IHvgUGpYhnDrc9.he1rdp6nfcMcH3am4y1Jv6uh2xXc5r8TG",
//     "DateNaissance": "2023-06-27T00:00:00.000Z",
//     "AutoriseNotifications": 1,
//     "Notations": 0,
//     "EtatDuCompte": "Ouvert",
//     "IdRole": 4,
//     "NomRole": "Restaurateur"
// }

interface Address {
    NomAdresse: string;
    Adresse: string;
    Pays: string;
    Ville: string;
    CodePostal: string;
    IdUtilisateur: number;
}


@Component
export default class UserDialog extends Vue {
  private dialog: boolean = false;
  private editedUser: User | null = null;

  @Prop({ required: true, type: Object })
  public user!: User;

  @Watch('user', { immediate: true, deep: true })
  onUserChanged(newValue: User) {
    this.editedUser = { ...newValue };
  }

  

  async saveChanges() {
    if (this.editedUser) {
      try {
        //faux a corriger
        const response = await axios.put(`https://your-api-url/users/${this.editedUser.id}`, this.editedUser);
        if (response.status === 200) {
          this.dialog = false;
          this.$emit('user-updated', this.editedUser);
        } else {
          // Gérer l'erreur
        }
      } catch (error) {
        // Gérer l'erreur
      }
    }
  }
}
</script>

  
<style scoped>
.v-card {
  margin: 0 auto;
}

.v-img {
  height: 300px;
}

.text-h4 {
  padding-left: 12px;
  padding-top: 12px;
}

.round{
    border-radius: 25px;
}

</style>
