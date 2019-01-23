<template>
  <section class="guess-page-container">
    <div v-if="!isGameOver">
      <div v-if="!isDoneDrawing">
        <h1>Wait for a draw</h1>
        <img class="wait-gif" src="@/assets/pencil.gif" height="300px">
      </div>
      <div v-else>
        <h1>Start guessing..</h1>
        <img :src="setImg">
        <form @submit.prevent="checkAnswer">
          <input class="word-guess" v-model="guess" type="text">
          <button>Send</button>
          <h3 v-if="this.wrongGuess">try again</h3>
        </form>
      </div>
    </div>

    <game-over v-else></game-over>
  </section>
</template>

<script>
// @ is an alias to /src
import gameOver from './gameOver.vue';
export default {
  data() {
    return {
      guess: "",
      wrongGuess: false,
      gameOver: false
      // isWaiting: ''
    };
  },

  components: {
    gameOver
  },
  methods: {
    checkAnswer() {
      this.$store.dispatch({
        type: "setGuess",
        userGuess: this.guess.toLowerCase()
      });

      let selectedWord = this.$store.getters.getSelectedWord;
      console.log("selected word - guess comp", selectedWord);
      if (this.guess.toLowerCase() === selectedWord) {
        this.gameOver = true;
        this.$store.dispatch({ type: "setGameOver" });
      } else {
        this.wrongGuess = true;
        this.guess = "";
      }
    }
  },
  computed: {
    isDoneDrawing() {
      // console.log("isDoneDrawing", this.$store.getters.isDoneDrawing);
      return this.$store.getters.isDoneDrawing;
    },
    setImg() {
      return this.$store.getters.getImgUrl;
    },
    isGameOver() {
      return this.$store.getters.getIsGameOver;
    }
  }
};
</script>
  
<style lang="scss" scoped>
.word-guess {
  border: 1px solid black;
}
</style>
