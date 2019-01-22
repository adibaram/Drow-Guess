import Vue from 'vue';
import Router from 'vue-router';
// import NProgress from 'nprogress';

//views
import Home from './views/home.vue';
import homePage from './views/homePage.vue';
import chooseWord from './views/chooseWord.vue'; 
import draw from './views/draw.vue'; 
import guess from './views/guess.vue'; 
import wait from './views/wait.vue'; 
import gameRoom from './views/gameRoom.vue'; 


Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }, 
    {
      path: '/',
      name: 'home',
      component: homePage
    }, 
    {
      path: '/game',
      name: 'game',
      component: gameRoom
    }, 
    {
      path: '/choose',
      name: 'chooseWord',
      component: chooseWord
    }, 
    {
      path: '/draw',
      name: 'draw',
      // component: () => import('./views/draw.vue')
      component: draw
    }, 
    {
      path: '/guess',
      name: 'guess',
      component: guess
    }, 
    {
      path: '/wait',
      name: 'wait',
      component: wait
    }

  ]
})

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//       NProgress.start()
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   NProgress.done()
// })

export default router;