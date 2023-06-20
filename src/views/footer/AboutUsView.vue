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
          value: "Roll Eat"
        },{
          class: "h2",
          value: "Roll through life, Eat without a worry"
        },{
          class: "body-1",
          value: "Roll Eat est le travail de 4 amis voulant innover le secteur de la livraison alimentaire"
        },
      ]
    }
  }
})
</script>
