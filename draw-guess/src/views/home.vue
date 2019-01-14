<template>
  <section class="home-page-container">
      <h1>Welcome</h1>

      <router-link :to="{name: 'chooseWord'}">
        <button v-if="getPlayersCount() === 0" @click="incrementPlayersCount">Player 1</button>
        <button v-else>Player 1 is waiting</button>
      </router-link>
      
      <!-- <button v-if="getPlayersCount() === 1" @click="incrementPlayersCount">Player 2</button> -->
      <router-link v-if="getPlayersCount() === 1"  @click="incrementPlayersCount" to="/wait" tag="button">Player 2</router-link>
      <button v-else> Player 2</button>

  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      isLoggedinUser: false,
      isSecondLoggdin: false,
    }
  },

  components: {

  },

  computed: {

  }, 
  methods: {
    incrementPlayersCount() {
      this.$store.commit('incrementPlayers');
    },

    getPlayersCount() {
      console.log(this.$store.getters.getPlayersCount)
      return this.$store.getters.getPlayersCount;
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
