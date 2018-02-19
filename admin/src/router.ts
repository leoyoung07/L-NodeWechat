import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from './views/ViewHome.vue';
import ViewAbout from './views/ViewAbout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/about',
      name: 'about',
      component: ViewAbout
    }
  ]
});
