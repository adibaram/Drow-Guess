<template>
    <section>
        <h1>Join the game!</h1>
        <form @submit.prevent="startGame">
            Your name:<input class="user-name" v-model="user.name" type="text"><br>
            <button>Start here</button>
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
            // console.log('inside gameroom');
            // this.$socket.emit('gameRoom', 'room1', this.user.name);
            this.$store.dispatch({type: 'setUserName', name: this.user.name});
            // this.$socket.emit('gameRoom', this.user.name);  
            this.$router.push('/game');
 
            // setTimeout(()=> {
            //     this.$router.push('/game');
            // },300)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
