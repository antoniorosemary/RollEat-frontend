<template>
    <MassText :texts="texts"/>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import MassText, {textInfo} from '@/components/MassText.vue';
  
  interface AddDeliveryData {
    texts: Array<textInfo>
  }
  
  export default Vue.extend({
    components:{
      MassText
    },
    data(): AddDeliveryData {
      return {
        texts: [
          {
            class: "h1",
            value: "Ajouter votre restaurant"
          },{
            class: "body-1",
            value: "Vous voulez ajouter votre restaurant a roll Eat?"
          },{
            class: "body-1",
            value: "Veuillez nous contacter a l'adresse e-mail suivante"
          },{
            class: "body-2",
            value: "restaurant@rolleat.com"
          }
        ]
      }
    }
  })
  </script>
  