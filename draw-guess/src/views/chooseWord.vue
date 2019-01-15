<template>
  <section class="choose-word-container">
      <h1>Choose a word</h1>
      <words-list></words-list>
  </section>
</template>

<script>
// @ is an alias to /src

import wordsService from "../services/wordsService.js";
import wordsList from "../components/wordsList.vue"

export default {
  data() {
    return {
      radio3: "list"
    };
  },

created() {
  wordsService.getRandomWords();
},
  components: {
    wordsList
    //     try() {
    //   wordsService.getRandomWords();
    // }
  },
  methods: {
    // try() {
    //   wordsService.getRandomWords();
    // }
  }
};
</script>
  
<style lang="scss" scoped>
</style>
