<template>
  <div class="you-photo">
    <router-link class="you-img" :to="{name: 'product'}">
      <img :src="require('../assets/img/' + product_data.img)" alt="img" />
    </router-link>
    <a class="you-link">{{ product_data.name }}</a>
    <p class="you-price">${{ product_data.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'singleProduct',
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>
