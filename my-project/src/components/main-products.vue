<template>
  <div class="img-box">
    <a>
      <img class="img-photo" :src="require('../assets/img/' + product_data.img)" alt="img" />
    </a>
    <div class="fetured-content">
      <a class="info">{{ product_data.name }}</a>
      <p class="price">${{ product_data.price }}</p>
    </div>
    <a class="fetured-add" @click="addToCart">Add to Cart</a>
  </div>
</template>

<script>
export default {
  name: 'mainProducts',
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
