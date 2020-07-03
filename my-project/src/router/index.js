import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/single',
    name: 'single',
    component: () => import('../views/Single.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/Cart',
    name: 'cart',
    component: Cart,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
