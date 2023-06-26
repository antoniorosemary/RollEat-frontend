<template>
  <div>
    <div 
      class="skeleton"
      :style="{
        height: height,
        width: width
      }"
      v-if="loading"
    />
    <slot v-else/>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props:{
    height:{
      type: String as PropType<string>,
      default: "100px"
    },
    width:{
      type: String as PropType<string>,
      default: "200px"
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  }
})
</script>

<style>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>