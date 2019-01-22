<template>
  <section class="draw-page-container">
      <h1>Your turn to draw</h1>
      <draw-board></draw-board>
      <button @click="uploadCanvas">Send</button>

  </section>
</template>

<script>
// @ is an alias to /src
import drawBoard from '../components/drowBoard.vue';
import cloudinaryService from '../services/cloudinaryService.js'

export default {
  data() {
    return {
      radio3: 'list'
    }
  },

  components: {
    drawBoard
  },
  methods: {
    uploadCanvas() {
      let imgUrl = this.$store.getters.getCurrCanvasUrl;
      // console.log('imgUrl', imgUrl);
      cloudinaryService.uploadImg(imgUrl); 
      this.$store.dispatch({type: 'setDoneDrawing'});
    }
  },
  
};


</script>
  
<style lang="scss" scoped>
    button {
        border: 1px solid black; 
        border-radius: 5px; 
    }
</style>
