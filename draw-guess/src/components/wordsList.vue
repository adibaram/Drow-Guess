<template>
    <section class="words-container">
        <!-- <h1 @click="selectWord" class="word">{{firstWord}}</h1>
        <h1 @click="selectWord" class="word">{{secondWord}}</h1>
        <h1 @click="selectWord" class="word">{{thirdWord}}</h1> -->
        <form @submit.prevent="selectWord">
            <input type="radio" id="one" value="0" v-model="selectedWord">
            <label for="one">{{firstWord}}</label>
            <br>
            <input type="radio" id="two" value="1" v-model="selectedWord">
            <label for="two">{{secondWord}}</label>
            <br>
            <input type="radio" id="three" value="2" v-model="selectedWord">
            <label for="two">{{thirdWord}}</label>
            <br>
            <!-- <span>Picked: {{  selectedWord }}</span> -->
            <br>
            <button>Select word</button>
        </form>
    </section>
</template>

<script>

import wordsService from "../services/wordsService.js";

export default {

    data() {
        return {
            firstWord: null, 
            secondWord: null,
            thirdWord: null,
            words: null,
            selectedWord: null
        }
    },

    created() {

        let words = wordsService.getRandomWords(); 
        this.words = words; 
        this.firstWord = words[0];
        this.secondWord = words[1];
        this.thirdWord = words[2];
      
    },
    methods: {
        selectWord(e) {
            let selcted = this.words[parseInt(this.selectedWord, 10)];
            this.$store.dispatch({ type: 'setSelctedWord', selectedWord: selcted});
            // console.log(this.selectedWord);
            // console.log(this.words[parseInt(this.selectedWord, 10)]);
            this.$router.push(`/draw`);
        },


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

    button {
        border: 1px solid black; 
        border-radius: 5px; 
    }
</style>
