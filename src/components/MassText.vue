<template>
  <div>
    <div v-for="text in texts" v-text="text.value" :class="'text-' + text.class"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from "vue";

/**
 * A line to be displayed
 */
interface textInfo {
  /** 
   * Text that will be displayed
   */
  value: string,
  /**
   * Class that will be applied to the text.
   * irst one must be one of the following without the 'text-' part:
   * https://v2.vuetifyjs.com/en/styles/text-and-typography/#typography
   */
  class: string
}
export { textInfo };

/**
 * Display texts following vuetify's rules of typography : 
 * https://v2.vuetifyjs.com/en/styles/text-and-typography/
 */
const MassText = Vue.extend({
  props:{
    /**
     * @model Array of text needed to be displayed
     */
    texts: {
      type: Array as PropType<Array<textInfo>>,
      required: true
    },
  }
})

export default MassText
</script>