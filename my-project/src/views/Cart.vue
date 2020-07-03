<template>
  <div>
    <vHeader />
    <vNav />
    <vArr />
    <section class="table-product center">
      <table class="tab-product">
        <tr class="first-line">
          <td id="product-left">Product Details</td>
          <td>unite Price</td>
          <td>Quantity</td>
          <td>shipping</td>
          <td>Subtotal</td>
          <td>ACTION</td>
        </tr>

        <vCart
          v-for="(item, index) in cart_data"
          :key="item.id"
          :cart_item="item"
          @deleteItem="deleteItem(index)"
          />
      </table>
      <div class="table-button">
        <input type="button" value="CLEAR SHOPPING CART" class="table-button-b" />
        <input type="button" value="CONTINUE sHOPPING" class="table-button-b" />
      </div>
      <section class="shipping">
        <div class="shipping-adress">
          <legend class="shipping-head">Shipping Adress</legend>
          <input class="shipping-input" list="country" placeholder="Bangladesh" />
          <datalist id="country">
            <option value="Bangladesh"></option>
            <option value="Bangladesh"></option>
            <option value="Bangladesh"></option>
            <option value="Bangladesh"></option>
          </datalist>
          <input class="shipping-input" type="text" placeholder="State" />
          <input class="shipping-input" type="text" placeholder="Postcode / Zip" />
          <input class="shipping-input-button" type="button" value="get a quote" />
        </div>
        <form action="#" class="coupon">
          <legend class="shipping-head">coupon discount</legend>
          <p class="coupon-text">Enter your coupon code if you have one</p>
          <input class="shipping-input" type="text" placeholder="state" />
          <input class="shipping-input-button" type="button" value="Apply coupon" />
        </form>
        <form class="total" action="#">
          <p class="total-sub">Sub total &nbsp;${{ cartTotal }}</p>
          <p class="shipping-head">
            GRAND TOTAL &nbsp;
            <span class="total-color">$900</span>
          </p>
          <input class="total-button" type="button" value="proceed to checkout" />
        </form>
      </section>
    </section>

    <vSubscribe />

    <vFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import vHeader from '../components/v-header.vue';
import vNav from '../components/v-nav.vue';
import vFooter from '../components/v-footer.vue';
import vSubscribe from '../components/v-subscribe.vue';
import vArr from '../components/v-arr.vue';
import vCart from '../components/v-cart.vue';

export default {
  name: 'Cart',
  components: {
    vHeader,
    vNav,
    vFooter,
    vCart,
    vSubscribe,
    vArr,
  },
  computed: {
    cartTotal() {
      let result = [];
      for (const item of this.cart_product) {
        result.push(item.price * item.quantity);
      }

      result = result.reduce((sum, elem) => sum + elem);
      return result;
    },
  },
  methods: {
    ...mapActions(['deleteFromCart']),
    deleteItem(index) {
      this.deleteFromCart(index);
    },
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },
};
</script>

<style>
</style>
