<template>
  <section id="app">
    <!-- <home/> -->
        <header :class="{homeNav: $route.name === 'home'}">
    </header>
    <main>
      <router-view/>
    </main>
  </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import home from './views/home.vue';
import homePage from './views/homePage.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    homePage
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 700px; 
}
</style>
