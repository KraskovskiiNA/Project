<template>
  <div>
    <vHeader />
    <vNav />

    <section class="promo center">
      <div class="promo__content">
        <h2 class="promo__h2">THE BRAND</h2>
        <h3 class="promo__h3">
          OF LUXERIOUS
          <span class="promo__color">FASHION</span>
        </h3>
      </div>
    </section>
    <section class="hot_deal center">
      <div class="first">
        <p class="deal-text">
          HOT DEAL
          <br />
          <span class="deal-color">FOR MEN</span>
        </p>
      </div>
      <div class="second">
        <p class="deal-text" id="marg">
          LUXIROUS & trendy
          <br />
          <span class="deal-color">ACCESORIES</span>
        </p>
      </div>
      <div class="third">
        <p class="deal-text">
          30% offer
          <br />
          <span class="deal-color">woman</span>
        </p>
      </div>
      <div class="fourth">
        <p class="deal-text">
          new arrivals
          <br />
          <span class="deal-color">FOR kids</span>
        </p>
      </div>
    </section>
    <section class="fetured center">
      <h4 class="items">Fetured Items</h4>
      <p class="items-text">Shop for items based on what we featured in this week</p>
      <div class="fetured-img">
        <mainProducts
          v-for="product in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
          />
      </div>
    </section>

    <section class="browse-link">
      <a href="product.html" class="button second-button">Browse All Product &#10144;</a>
    </section>
    <section class="offer center">
      <div class="sale">
        <p class="sale-text">
          <span class="size">
            <b>30%&nbsp;</b>
          </span>
          <span class="pink">
            <b>OFFER</b>
          </span>
          <br />FOR WOMEN
        </p>
      </div>
      <div class="offer-img">
        <img :src="require('../assets/img/Forma_1.svg')" alt="img" />
        <img :src="require('../assets/img/Forma_2.svg')" alt="img" />
        <img :src="require('../assets/img/Forma_3.svg')" alt="img" />
      </div>
      <article class="offer-text">
        <div class="offerText">
          <h3 class="one">Free Delivery</h3>
          <p class="one-one">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="offerText">
          <h3 class="one">Sales & discounts</h3>
          <p class="one-one">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="offerText">
          <h3 class="one">Quality assurance</h3>
          <p class="one-one">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
      </article>
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
import mainProducts from '../components/main-products.vue';

export default {
  name: 'Home',
  components: {
    vHeader,
    vNav,
    mainProducts,
    vSubscribe,
    vFooter,
  },
  methods: {
    ...mapActions(['getProducts', 'addCart']),
    addToCart(data) {
      this.addCart(data);
    },
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
  },
  mounted() {
    this.getProducts('http://localhost:3000/catalogHome');
  },
};
</script>
