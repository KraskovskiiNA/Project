<template>
  <div>
    <vHeader />
    <vNav />
    <vArr />
    <section class="promo-photo">
      <a href="#" class="promo-arrow">
        <i class="fas fa-chevron-left"></i>
      </a>
      <div class="ttrr">
        <img :src="require('../assets/img/2490.png')" alt="img" />
      </div>
      <a href="#" class="promo-arrow">
        <i class="fas fa-chevron-right"></i>
      </a>
    </section>
    <section class="collection">
      <h2 class="collection-head">WOMEN COLLECTION</h2>
      <p class="collection-line"></p>
      <h3 class="collection-haed">Moschino Cheap And Chic</h3>
      <p class="collection-text">
        Compellingly actualize fully researched processes before proactive outsourcing.
        Progressively syndicate collaborative architectures before cutting-edge
        services. Completely visualize parallel core competencies rather than exceptional portals.
      </p>
      <p class="collection-material">
        MATERIAL:
        <span class="collection-cotton">COTTON &nbsp;&nbsp;&nbsp;&nbsp;</span> DESIGNER:
        <span class="collection-cotton">BINBURHAN</span>
      </p>
      <h1 class="collection-price">$561</h1>
      <div class="collection-block">
        <form action="#" class="collection-form">
          <legend for="color" class="collection-legend">CHOOSE COLOR</legend>
          <input type="color" list="color" class="collection-input-color" />
        </form>
        <form action="#" class="collection-form">
          <legend class="collection-legend">CHOOSE SIZE</legend>
          <input class="collection-input" list="Size" placeholder="XXL" />
          <datalist id="Size">
            <option value="XL"></option>
            <option value="L"></option>
            <option value="M"></option>
            <option value="S"></option>
          </datalist>
        </form>
        <form action="#">
          <legend for="number" class="collection-legend">QUANTITY</legend>
          <input class="collection-input" type="number" placeholder="2" />
        </form>
      </div>
      <router-link class="collection-button" :to="{name: 'cart'}">
        <img :src="require('../assets/img/2587.png')" alt="img" />&nbsp;&nbsp;Add to Cart
      </router-link>
      <h2 class="you-head">you may like also</h2>
    </section>
    <section class="you center">
      <singleProduct v-for="product in PRODUCTS" :key="product.id" :product_data="product" />
    </section>
    <vSubscribe />
    <vFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vHeader from '../components/v-header.vue';
import vNav from '../components/v-nav.vue';
import vFooter from '../components/v-footer.vue';
import vSubscribe from '../components/v-subscribe.vue';
import vArr from '../components/v-arr.vue';
import singleProduct from '../components/single-product.vue';

export default {
  name: 'Single',
  components: {
    vHeader,
    vNav,
    singleProduct,
    vFooter,
    vSubscribe,
    vArr,
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  mounted() {
    this.getProducts('http://localhost:3000/catalogSingle');
  },
};
</script>

<style>
</style>
