<template>
  <section class="draw-page-container">
      <h1>Your turn to draw</h1>
      <draw-board></draw-board>

  </section>
</template>

<script>
// @ is an alias to /src
import drawBoard from '../components/drowBoard.vue';

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

  },
  
};


</script>
  
<style lang="scss" scoped>

</style>
