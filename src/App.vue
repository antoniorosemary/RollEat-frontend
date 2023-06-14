<template>
  <v-app>
    <CustomHeader/>

    <v-main>
      <router-view/>
    </v-main>

    <CustomFooter/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomHeader from './components/App/CustomHeader.vue';
import CustomFooter from './components/App/CustomFooter.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CustomHeader,
    CustomFooter
},

  data: () => ({
    //
  }),
});
</script>

<style src="./colors.css"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 100%;
}

body {
  background-image: linear-gradient(62deg, #DB995A 0%, #D6D4A0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
 /* padding:32px;*/
}

</style>