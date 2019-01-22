<template>
    <section>

        <div v-if="playsCount === 1">
            <h1>Hi {{userName}}, please wait for a second player</h1>
        </div>
        <div v-else-if="playsCount === 2">
            <choose-word v-if="isDraw"></choose-word>
            <guess-page v-else></guess-page>
        </div>

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
        // this.user = this.$store.getters.getPlayersCount;
        // console.log('user type:', this.$store.getters.getPlayersCount);
        // console.log(this.$store.getters.isDraw);
    },
    computed: {
        isDraw() {
            return this.$store.getters.isDraw;
        },
        userName() {
            return this.$store.getters.getUserName;
        },
        playsCount() {
            return this.$store.getters.getPlayersCount;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
