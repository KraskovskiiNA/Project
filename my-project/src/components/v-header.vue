<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <router-link class="logo" :to="{name: 'Home'}">
          <img class="logo__img" :src="require('../assets/img/logo.svg')" alt="logo" />BRAN
          <b class="red">D</b>
        </router-link>

        <search searchForm />

      </div>
      <div class="header__right">
        <div class="cart-menu">
          <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <p class="cart_length">{{ CART.length }}</p>
            <img class="header__cart" :src="require('../assets/img/cart.svg')" alt="cart" />

          </router-link>
        </div>
        <details>
          <summary id="account">My account</summary>
        </details>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import search from './search.vue';

export default {
  name: 'vHeader',
  components: {
    search,
  },
  props: {},
  data() {
    return {
      title: 'header',
    };
  },
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {},
  mounted() {
    console.log('jnvnnvtnjvntvnjt');
  },
};
</script>
