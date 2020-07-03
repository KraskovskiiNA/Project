<template>
  <div class="img-box">
    <a>
      <img class="img-photo" :src="require('../assets/img/' + product_data.img)" alt="img" />
    </a>
    <div class="fetured-content">
      <a href="single.html" class="info">{{ product_data.name }}</a>
      <p class="price">${{ product_data.price }}</p>
    </div>
    <a href="#" class="fetured-ad" @click="addToCart">
      <img class="fetured-ad-mar" :src="require('../assets/img/cart1.svg')" alt="cart" />
      Add to Cart
    </a>
    <a href="#" class="product_ad">
      <i class="fas fa-sync"></i>
    </a>
    <a href="#" class="product_ad product_ad-two">
      <i class="far fa-heart"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
  },
};
</script>

<style>
</style>
