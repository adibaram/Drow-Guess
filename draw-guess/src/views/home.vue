<template>
  <section class="home-page-container">
      <h1>Welcome</h1>

      <!-- <input> -->

      <!-- <button>Start game!</button> -->

      <router-link :to="{name: 'chooseWord'}">
        <button v-if="getPlayersCount() === 0" @click="firstPlayerSigned">Player 1</button>
        <button v-else-if="getPlayersCount() === 1">Player 1 is waiting</button>
        <button v-else>Player 1</button>

 
      </router-link>
      
      <router-link v-if="getPlayersCount() === 1" to="/wait"><button @click="secondPlayerSigned"> Player 2</button></router-link>
      <button v-else> Player 2</button>

  </section>
</template>

<script>
// @ is an alias to /src
import storageService from '../services/StorageService.js';
// import VueSocketIO from 'vue-socket.io';

export default {
  name: 'home',
  data() {
    return {
      isLoggedinUser: false,
      isSecondLoggdin: false,
      user: {
        type: '', 
        isWaiting: false
      }
    }
  },


  components: {

  },

  computed: {

  }, 
  methods: {

    firstPlayerSigned() {
      this.user.type = 'user1'; 
      this.user.isWaiting = true; 
      storageService.saveToStorage('user', 'user1');
      this.incrementPlayersCount();
      this.createGame();
    },

    secondPlayerSigned() {
      this.user.type = 'user2';
      storageService.saveToStorage('user', 'user2');
      this.incrementPlayersCount();
      this.createGame();
    },

    incrementPlayersCount() {
      // this.$store.commit('incrementPlayers');
    },

    getPlayersCount() {
      console.log(this.$store.getters.getPlayersCount)
      return this.$store.getters.getPlayersCount;
    },
    createGame() {
      // console.log('inside gameroom');
      // this.$socket.emit('gameRoom', 'room1', 'user2');
    }
  },
  
};


</script>
  
<style lang="scss" scoped>
    button {
      cursor: pointer;
      margin: 5px;
      border: 1px solid gray;
      border-radius: 10%;
    }
</style>
