<template>
  <MassText :texts="texts"/>
</template>

<script lang="ts">
import Vue from 'vue'
import MassText, {textInfo} from '@/components/MassText.vue';

interface ContactUsData {
  texts: Array<textInfo>
}

export default Vue.extend({
  components:{
    MassText
  },
  data(): ContactUsData {
    return {
      texts: [
        {
          class: "h1",
          value: "Nous Contacter"
        },{
          class: "body-1",
          value: "Vous avez des retours? Des suggestions d'améliorations?"
        },{
          class: "body-1",
          value: "Merci de les adresser a l'adresse suivante :"
        },{
          class: "body-2 mb-4",
          value: "customerservice@rolleat.com"
        },{
          class: "body-1",
          value: "Vous êtes gérant d'une entreprise et voulez réaliser un partenariat ou autre?"
        },{
          class: "body-1",
          value: "Merci de nous contacter a l'adresse suivante :"
        },{
          class: "body-2 mb-4",
          value: "partnershiprelationship@rolleat.com"
        },{
          class: "body-1",
          value: "Vous êtes passioner d'informatique ou par le marketing et voulez rejoindre l'équipe?"
        },{
          class: "body-1",
          value: "Vous avez de la chance, nous recrutons!"
        },{
          class: "body-1",
          value: "Envoyez nous votre candidature a l'adresse suivante:"
        },{
          class: "body-2",
          value: "recrutment@rolleat.com"
        }
      ]
    }
  }
})
</script>