<template>
  <section class="guess-page-container">
    <div v-if="!isDoneDrawing">
      <h1>Wait for a draw</h1>
      <img src="@/assets/pencil.gif" height="400px">
    </div>
    <div v-else>
      <h1>Please guess</h1>
      <img :src="setImg">
      <form @submit.prevent="checkAnswer">
        <input class="word-guess" v-model="guess" type="text">
        <button>Send</button>
      </form>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      guess: ''
      // isWaiting: ''
    }
  },

  components: {

  },
  methods: {
    checkAnswer() {
      this.$store.dispatch({ type:'setGuess', userGuess: this.guess.toLowerCase()});
    },
  },
  computed: {
    isDoneDrawing() {
      console.log('isDoneDrawing',this.$store.getters.isDoneDrawing)
      return this.$store.getters.isDoneDrawing;
    },
    setImg() {
      return this.$store.getters.getImgUrl;
    }
  }
  
};


</script>
  
<style lang="scss" scoped>
  .word-guess {
    border: 1px solid black;
  }
</style>
