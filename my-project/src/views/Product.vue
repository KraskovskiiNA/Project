<template>
  <div>
    <vHeader />
    <vNav />
    <vArr />
    <section class="products center">
      <div class="category">
        <details>
          <summary id="summary-product">CATEGORY</summary>
          <ul class="category-ul">
            <li>
              <a class="category-li" href>Accessories</a>
            </li>
            <li>
              <a class="category-li" href>Bags</a>
            </li>
            <li>
              <a class="category-li" href>Denim</a>
            </li>
            <li>
              <a class="category-li" href>Hoodies & Sweatshirts</a>
            </li>
            <li>
              <a class="category-li" href>Jackets & Coats</a>
            </li>
            <li>
              <a class="category-li" href>Pants</a>
            </li>
            <li>
              <a class="category-li" href>Polos</a>
            </li>
            <li>
              <a class="category-li" href>Shirts</a>
            </li>
            <li>
              <a class="category-li" href>Shoes</a>
            </li>
            <li>
              <a class="category-li" href>Shorts</a>
            </li>
            <li>
              <a class="category-li" href>Sweaters & Knits</a>
            </li>
            <li>
              <a class="category-li" href>T-Shirts</a>
            </li>
            <li>
              <a class="category-li" href>Tanks</a>
            </li>
          </ul>
        </details>
        <details>
          <summary id="summary-product">BRAND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</summary>
        </details>
        <details>
          <summary id="summary-product">DESIGNER &nbsp;</summary>
        </details>
      </div>
    </section>
    <section class="product-form center marginPR">
      <form action="#">
        <fieldset class="product-forms">
          <legend class="legend">TRENDING NOW</legend>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Bohemian</span>
          </label>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Floral</span>
          </label>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Lace</span>
          </label>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Floral</span>
          </label>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Lace</span>
          </label>
          <label class="legend-word">
            <input type="checkbox" name="test" style="display: none" />
            <span class="word">Bohemian</span>
          </label>
        </fieldset>
      </form>
      <form action="#">
        <fieldset class="product-forms">
          <legend class="legend">SIZE</legend>
          <label for="XXS" class="checkbox-size">
            <input id="XXS" type="checkbox" />XXS
          </label>
          <label for="XS" class="checkbox-size">
            <input id="XS" type="checkbox" />XS
          </label>
          <label for="S" class="checkbox-size">
            <input id="S" type="checkbox" />S
          </label>
          <label for="M" class="checkbox-size">
            <input id="M" type="checkbox" />M
          </label>
          <label for="L" class="checkbox-size">
            <input id="L" type="checkbox" />L
          </label>
          <label for="XL" class="checkbox-size">
            <input id="XL" type="checkbox" />XL
          </label>
          <label for="XXL" class="checkbox-size">
            <input id="XXL" type="checkbox" />XXL
          </label>
        </fieldset>
      </form>
      <form oninput="result.value=(range.value)" action="#">
        <fieldset class="product-forms">
          <legend class="legend">PRICE</legend>
          <label for="range">
            <input id="range" type="range" value="10" step="0.1" />
          </label>
          <br />
          <p>
            $
            <output name="result" for="range">0</output>
          </p>
        </fieldset>
      </form>
    </section>
    <section class="sort center marginPR">
      <form action="#">
        <fieldset class="sort-set">
          <label for="sort-name" class="sort_name">Sort by</label>
          <input id="sort-name" list="sorting" placeholder="Name" />
        </fieldset>
        <datalist id="sorting">
          <option value="Mango"></option>
          <option value="People"></option>
          <option value="T-shirt"></option>
          <option value="Mango"></option>
        </datalist>
      </form>
      <form action="#">
        <fieldset class="sort-set">
          <label for="sort-page" class="sort_name">Show</label>
          <input id="sort-page" list="sortingP" placeholder="9" />
        </fieldset>
        <datalist id="sortingP">
          <option value="12"></option>
          <option value="15"></option>
          <option value="18"></option>
          <option value="all"></option>
        </datalist>
      </form>
    </section>
    <section class="product_photo center marginPR">
      <div class="fetured-img">
        <products v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
        />
      </div>
    </section>
    <section class="viev center marginPR">
      <div class="numbersPage">
        <ul class="viev-ul">
          <li class="viev_li">
            <a class="viev-li" href="#"></a>&lt;
          </li>
          <li class="viev_li" id="viev_li_one">
            <a class="viev-li" href="#"></a>1
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>2
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>3
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>4
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>5
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>6.....20
          </li>
          <li class="viev_li">
            <a class="viev-li" href="#"></a>&gt;
          </li>
        </ul>
      </div>
      <a href="#" class="view_all">View All</a>
    </section>
    <section class="product-offer center">
      <div class="offer-img" id="product-offer-img">
        <img :src="require('../assets/img/Forma_1.svg')" alt="img" />
        <img :src="require('../assets/img/Forma_2.svg')" alt="img" />
        <img :src="require('../assets/img/Forma_3.svg')" alt="img" />
      </div>
      <article class="offer-text" id="product-offer-text">
        <div class="offerText" id="product-offerText">
          <h3 class="one">Free Delivery</h3>
          <p class="one-one">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="offerText" id="product-offerText">
          <h3 class="one">Sales & discounts</h3>
          <p class="one-one">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="offerText" id="product-offerText">
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
import vArr from '../components/v-arr.vue';
import products from '../components/products.vue';

export default {
  name: 'Product',
  components: {
    vHeader,
    vNav,
    products,
    vFooter,
    vSubscribe,
    vArr,
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
    this.getProducts('http://localhost:3000/catalog');
  },
};
</script>

<style>
</style>
