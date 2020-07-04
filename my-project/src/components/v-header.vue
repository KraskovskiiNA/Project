<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <router-link class="logo" :to="{name: 'Home'}">
          <img class="logo__img" :src="require('../assets/img/logo.svg')" alt="logo" />BRAN
          <b class="red">D</b>
        </router-link>
      </div>
      <div class="header__right">
        <div class="cart-menu">
          <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <p class="cart_length" v-if="CART.length">{{ CART.length }}</p>
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

export default {
  name: 'vHeader',
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
