<template>
    <section class="words-container">
        <h1 class="word">{{firstWord}}</h1>
        <h1 class="word">{{secondWord}}</h1>
        <h1 class="word">{{thirdWord}}</h1>
    </section>
</template>

<script>

import wordsService from "../services/wordsService.js";

export default {

    data() {
        return {
            firstWord: null, 
            secondWord: null,
            thirdWord: null
        }
    },

    created() {

        let words = wordsService.getRandomWords(); 
        this.firstWord = words[0];
        this.secondWord = words[1];
        this.thirdWord = words[2];
      
    }

}
</script>

<style lang="scss" scoped>
    .word {
        // width: 200px;
        border: 1px solid black; 
        border-radius: 10px;
        cursor: pointer;
    }
</style>
