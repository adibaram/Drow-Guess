<template>
    <section>
        <choose-word v-if="isDraw"></choose-word>

        <guess-page v-else></guess-page>

    </section>
</template>

<script>

import drawPage from './draw.vue'; 
import guessPage from './guess.vue';
import chooseWord from './chooseWord.vue'; 

export default {
    data() {
        return {
            user: null,
        }
    }, 
    components: {
        drawPage,
        guessPage,
        chooseWord
    }, 
    created() {
        this.user = this.$store.getters.getPlayersCount;
        console.log('user type:', this.$store.getters.getPlayersCount);
        console.log(this.$store.getters.isDraw);
    },
    computed: {
        isDraw(){
            return this.$store.getters.isDraw;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
