<template>
    <section>
        <h1>Join the game!</h1>
        <form @submit.prevent="startGame">
            Your name:<input class="user-name" v-model="user.name" type="text"><br>
            <button class="start-here">Start here</button>
        </form>
    </section>
</template>

<script>

import utils from '../services/util-service.js';

export default {
    data() {
        return {
                user: {
                    type: '', 
                    isWaiting: false,
                    name: ''
            }
        }
    },
    methods: {
       startGame() {
            this.$store.dispatch({type: 'setUserName', name: this.user.name});
            this.$router.push('/game');
        }
    }
}
</script>

<style lang="scss" scoped>
    .start-here {
        margin: 10px;
        height: 70px;
        width: 70px;
        border: 1px black solid; 
        border-radius: 50%; 

    }

    .user-name {
        margin: 10px;
    }
</style>
