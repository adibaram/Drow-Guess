<template>
  <section class="draw-page-container">
    <div v-if="!isGameOver">
      <h1 v-if="this.isDrawing">Your turn to draw</h1>
      <h1 v-else>Great! Wait for the second player to guess :) </h1>
      <draw-board></draw-board>
      <button v-if="this.isDrawing" @click="uploadCanvas">Send</button>
    </div>
    <game-over v-else></game-over>
    

  </section>
</template>

<script>
// @ is an alias to /src
import drawBoard from '../components/drowBoard.vue';
// import cloudinaryService from '../services/cloudinaryService.js';
import gameOver from './gameOver.vue';

export default {
  data() {
    return {
      isDrawing: true

    }
  },
    components: {
      drawBoard,
      gameOver
  },
    methods: {
      uploadCanvas() {
        let imgUrl = this.$store.getters.getCurrCanvasUrl;
        // cloudinaryService.uploadImg(imgUrl);
        this.isDrawing = false;  
        this.$store.dispatch({type: 'setDoneDrawing'});
      }
  },

    computed: {
      isGameOver() {
        return this.$store.getters.getIsGameOver;
    }
  } 
  
};


</script>
  
<style lang="scss" scoped>
    // button {
    //     border: 1px solid black; 
    //     border-radius: 5px; 
    // }

    button {
        border: 1px solid black; 
        border-radius: 5px; 
        padding: 10px;
        font-size: 0.9em;
        margin-top: 10px;
    }    
</style>
