<template>
  <div>
    <!-- Header -->
    <header>
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
      <div id="app">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> | 
          <router-link to="/test">Test</router-link>
        </nav>
      </div>
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
      
    </footer>
  </div>
</template>

<style>
#logo{
  position : absolute; 
  left : 0px; 
  top : 1px;
  height: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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
  position: fixed;
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
  position: fixed;
  bottom: 100px; /* Height of the footer */
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
}

body {
  background: #DB995A;
  padding:180px;
}
</style>
