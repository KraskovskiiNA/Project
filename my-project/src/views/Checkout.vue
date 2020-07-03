<template>
  <div>
    <vHeader />
    <vNav />
    <vArr />
    <section class="check center">
      <details open>
        <summary class="check-summary">01.&nbsp;Shipping Adress</summary>
        <article class="check-art">
          <div class="check-left">
            <h2 class="check-head">Check as a guest or register</h2>
            <p class="check-text">Register with us for future convenience</p>
            <form action="#" class="check-form">
              <input type="radio" name="checkout" value="guest" id="checkout1" />
              <label class="check-radio" for="checkout1">checkout as guest</label>
              <br />
              <input type="radio" name="checkout" value="register" id="checkout2" />
              <label class="check-radio" for="checkout2">register</label>
            </form>
            <h2 class="check-head">register and save time!</h2>
            <p class="check-text">Register with us for future convenience</p>
            <a href="#" class="check-link">&raquo; Fast and easy checkout</a>
            <a href="#" class="check-link">&raquo; Easy access to your order history and status</a>
            <input type="button" class="check-button" value="Continue" />
          </div>
          <div class="check-right">
            <h2 class="check-head">Already registed?</h2>
            <p class="check-text">Please log in below</p>
            <form action="#" class="check-form-right">
              <label class="check-label" for="email">
                EMAIL ADDRESS
                <em>*</em>
              </label>
              <br />
              <input
                class="check-email"
                placeholder="email@server.com"
                required
                pattern="\S+@[a-z]+.[a-z]+"
              />
            </form>
            <form action="#" class="check-form-right">
              <label class="check-label" for="userPassword">
                PASSWORD
                <em>*</em>
              </label>
              <br />
              <input class="check-email" type="password" required />
            </form>
            <p class="check-requ">* Required Fileds</p>
            <input type="button" class="check-button" value="Log in" />
            <input type="button" class="check-button-left" value="Forgot Password ?" />
          </div>
        </article>
      </details>
      <details>
        <summary class="check-summary">02.&nbsp;BILLING INFORMATION</summary>
      </details>
      <details>
        <summary class="check-summary">03.&nbsp;SHIPPING INFORMATION</summary>
      </details>
      <details>
        <summary class="check-summary">04.&nbsp;SHIPPING METHOD</summary>
      </details>
      <details>
        <summary class="check-summary">05.&nbsp;PAYMENT METHOD</summary>
      </details>
      <details>
        <summary class="check-summary">06.&nbsp;ORDER REVIEW</summary>
      </details>
    </section>
    <vSubscribe />
    <vFooter />
  </div>
</template>

<script>
import vHeader from '../components/v-header.vue';
import vNav from '../components/v-nav.vue';
import vFooter from '../components/v-footer.vue';
import vSubscribe from '../components/v-subscribe.vue';
import vArr from '../components/v-arr.vue';

export default {
  name: 'Checkout',
  components: {
    vHeader,
    vNav,
    vFooter,
    vSubscribe,
    vArr,
  },
};
</script>

<style>
</style>
