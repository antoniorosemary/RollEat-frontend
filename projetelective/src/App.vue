<template>
  <div>
    <!-- Header -->
    <header>
      <!-- Add your navigation links here -->
      <h1>Something</h1>
    </header>

    <!--vague supérieure-->
    <svg class="wave-top" viewBox="0 0 1440 50">
      <path 
        fill="#DA7635" 
        fill-opacity="1" 
        d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 0 L 0 0 L 0 50"
      />
    </svg>

    <router-view/>

    <!--vague inférieure-->
    <svg class="wave-bottom" viewBox="0 0 1440 50">
      <path 
        fill="#DA7635" 
        fill-opacity="1" 
        d="M 0 25 Q 360 -25 720 25 Q 1080 75 1440 25 L 1440 50 L 0 50 L 0 50"
      />
    </svg>

    <!-- Footer -->
    <footer>
      <!-- Add your credits here -->
      <h1>Something</h1>
    </footer>
  </div>
</template>




<!-- rest of your App.vue file -->

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

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
  padding:32px;
}

img {
  max-width: 100%;
  border-radius: 8px;
}


header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px; /* Height of the header */
  z-index: 20;
  background-color: #DA7635;
  /* Add your other styles for the header here */
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px; /* Height of the footer */
  z-index: 20;
  background-color: #DA7635;
  /* Add your other styles for the footer here */
}

.wave-top {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}

.wave-bottom {
  position: absolute;
  bottom: 100px; /* Height of the footer */
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}

.card {
  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.card__title {
  text-align:center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}

  .button {
    background: #2196F3;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }

  .card__action {
    color:#2196F3;
    text-decoration: underline;
  }

  .card__action:hover {
    cursor:pointer;
  }

  .button:hover {
    cursor:pointer;
    background: #1976D2;
  }

  .button--disabled {
    background:#cecece;
    color:#ececec
  }
  .button--disabled:hover {
    cursor:not-allowed;
    background:#cecece;
  }

</style>