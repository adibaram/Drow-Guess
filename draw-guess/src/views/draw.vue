<template>
  <section class="draw-page-container">
    <div v-if="!isGameOver">
      <h1 v-if="this.isDrawing">Your turn to draw</h1>
      <h1 v-else>Great! Wait for the second player to guess :) </h1>
      <draw-board></draw-board>
      <button v-if="this.isDrawing" @click="uploadCanvas">Send</button>
      <!-- <div v-if="isGameOver"></div> -->
    </div>
    <game-over v-else></game-over>
    

  </section>
</template>

<script>
// @ is an alias to /src
import drawBoard from '../components/drowBoard.vue';
import cloudinaryService from '../services/cloudinaryService.js';
import gameOver from './gameOver.vue';

export default {
  data() {
    return {
      isDrawing: true,
      // isGameOver: false

    }
  },

  components: {
    drawBoard,
    gameOver
  },
  methods: {
    uploadCanvas() {
      let imgUrl = this.$store.getters.getCurrCanvasUrl;
      // console.log('imgUrl', imgUrl);
      cloudinaryService.uploadImg(imgUrl);
      this.isDrawing = false;  
      this.$store.dispatch({type: 'setDoneDrawing'});
    },

      // isGameOver() {
      //   let gameOver = this.$store.getters.getIsGameOver; 
      //   if (gameOver) this.$router.push('/gameOver');
      // }
  },

  computed: {
    isGameOver() {
      return this.$store.getters.getIsGameOver;
  }
     
} 
  
};


</script>
  
<style lang="scss" scoped>
    button {
        border: 1px solid black; 
        border-radius: 5px; 
    }
</style>
