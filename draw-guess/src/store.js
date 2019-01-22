import Vue from 'vue';
import Vuex from 'vuex';
import {socketEmitter} from './services/socketEmitter.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedinUser: false,
    isSecondLoggdin: false,
    playersCount: 0,
    selectedWord: null,
    userType: '',
    gameRoom: '', 
    userGuess: '', 
    canvasUrl: '',
    drawUrl:'',
    isDoneDrawing: false, 
    isDraw: false,
    userName: '',
    gameOver: false 

  },

  getters: {
    getPlayersCount(state) {
      return state.playersCount;
    },
    getCurrCanvasUrl(state) {
      return state.canvasUrl; 
    },
    isDraw(state) {
      return state.isDraw;
    },
    isDoneDrawing(state) {
      return state.isDoneDrawing;
    },
    getImgUrl(state) {
      return state.drawUrl; 
    },
    getUserName(state) {
      return state.userName; 
    },
    getSelectedWord(state) {
      return state.selectedWord;
    },
    getIsGameOver(state) {
      return state.gameOver;
    }


  },

  mutations: {
    incrementPlayers(state) {
      state.playersCount++;
      console.log('playersCount', this.state.playersCount);
    },
    setUserName(state, name){
      console.log(name)
      state.userName = name;
    },
    setGuess(state, {userGuess}) {
      state.userGuess = userGuess;
      console.log('DEBUG:store-setGuess:guess', userGuess);
    },
    setSelctedWord(state, {selectedWord}) {
      state.selectedWord = selectedWord;
      console.log('DEBUG:store-setSelctedWord:selectedWord', selectedWord);
    },
    setDoneDrawing(state) {
      state.isDoneDrawing = true;
      console.log('DEBUG:store-setDoneDrawing:true', state.isDoneDrawing);
    },
    setCanvasUrl(state, {canvasUrl}) {
      state.canvasUrl = canvasUrl;
      console.log('DEBUG:store-setCanvasUrl:canvasUrl', canvasUrl);
    },
    setDrawUrl(state, {drawUrl}) {
      state.drawUrl = drawUrl;
      state.isDoneDrawing = true;
      console.log('DEBUG:store-setDrawUrl:drawUrl', drawUrl);
    },
    setGameRoom( state, {userName, turn, gameRoom}){
      state.gameRoom = gameRoom;
      console.log('DEBUG:store-setGameRoom:gameRoom', gameRoom);

      !turn? state.playersCount = 2 : state.playersCount = 1;
      if (state.userName === userName) {
      state.isDraw = turn;
      }
    },
    setGameOver(state) {
      state.gameOver = true; 
    }

  },

  actions: {

    setGuess(context, {userGuess}) {
      context.commit('setGuess', {userGuess});
      // console.log('user guess listed', {userGuess});
    },

    setSelctedWord(context, {selectedWord}) {
      context.commit('setSelctedWord', {selectedWord});
      socketEmitter.$socket.emit('wordChosen',context.state.gameRoom, selectedWord); 
      console.log('user selected a word:', {selectedWord});
    },

    setCanvasUrl(context, {canvasUrl}) {
      context.commit('setCanvasUrl', {canvasUrl});
      // console.log('current canvas base64:', {canvasUrl});
    },
    setDoneDrawing(context) {
      context.commit('setDoneDrawing');
    },
    setDrawUrl(context, {drawUrl}) {
      context.commit('setDrawUrl', {drawUrl});
      socketEmitter.$socket.emit('drawSubmitted',context.state.gameRoom, drawUrl); 
      // console.log('draw link:', {drawUrl});
    },
    setUserName({commit}, {name}){
      commit('setUserName', name);
      socketEmitter.$socket.emit('gameRoom', name); 
    },
    setGameOver(context) {
      context.commit('setGameOver');
      socketEmitter.$socket.emit('gameOver',context.state.gameRoom); 
    }, 

    SOCKET_gameRoom(context, {userName, turn, gameRoom}){
      context.commit('setGameRoom', {userName, turn, gameRoom});
      // console.log('socket store', this.state.playersCount);
    },
    SOCKET_wordChosen(context, {selectedWord}) {
      context.commit('setSelctedWord', {selectedWord});
    },
    SOCKET_drawSubmitted(context, {drawUrl}) {
      context.commit('setDrawUrl', {drawUrl});
    },
    SOCKET_gameOver(context) {
      context.commit('setGameOver');
    }

  },

});

