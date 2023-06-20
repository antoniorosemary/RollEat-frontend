<template>
  <MassText :texts="texts"/>
</template>

<script lang="ts">
import Vue from 'vue'
import MassText, {textInfo} from '@/components/MassText.vue';

interface JoinDeliveryData {
  texts: Array<textInfo>
}

export default Vue.extend({
  components:{
    MassText
  },
  data(): JoinDeliveryData {
    return {
      texts: [
        {
          class: "h1",
          value: "Devenir Livreur"
        },{
          class: "body-1",
          value: "Vous voulez devenir livreur pour Roll Eat?"
        },{
          class: "body-1",
          value: "Contacter-nous a l'adresse mail suivante avec votre candidature :"
        },{
          class: "body-2",
          value: "deliveryrecruitment@rolleat.com"
        }
      ]
    }
  }
})
</script>
  