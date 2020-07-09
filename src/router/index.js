import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Counter from '../views/Counter/Counter.vue';
import Reverse from '../views/Reverse.vue';
import Weather from '../views/Weather.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/reverse',
    name: 'reverse',
    component: Reverse,
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
