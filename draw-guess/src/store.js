import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedinUser: false,
    isSecondLoggdin: false,
    playersCount: 0,
    selectedWord: null

  },

  getters: {
    getPlayersCount(state) {
      return state.playersCount;
    }

  },

  mutations: {
    incrementPlayers(state) {
      state.playersCount++;
      console.log('playersCount', this.state.playersCount)
    }
  },

  actions: {


   

  },

});
