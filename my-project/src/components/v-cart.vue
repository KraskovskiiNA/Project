<template>
  <tr class="tab-line">
    <td class="tab-img">
      <div class="tab-img-photo">
        <a href="#">
          <img :src="require('../assets/img/' + cart_item.img)" alt="img" />
        </a>
      </div>
      <div class="tab-img-content">
        <a href="#" class="tab-img-content-link">{{ cart_item.name }}</a>
        <p class="tab-img-content-size">
          Color: &nbsp;
          <span class="tab-img-content-color">Red</span>
          <br />Size: &nbsp;
          <span class="tab-img-content-color">XII</span>
        </p>
      </div>
    </td>
    <td>${{ cart_item.price }}</td>
    <td>{{ cart_item.quantity }}</td>
    <td>FREE</td>
    <td>$300</td>
    <td>
      <a href="#" class="cross" @click="deleteItem">
        <i class="fas fa-times-circle"></i>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'vCart',
  props: {
    cart_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem');
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$set(this.cart_item, 'quantity', 1);
  },
};
</script>

<style>
</style>
