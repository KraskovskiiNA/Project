<template>
  <tr class="tab-line">
    <td class="tab-img">
      <div class="tab-img-photo">
        <a href="#">
          <img class="cart_item_img" :src="require('../assets/img/' + cart_item.img)" alt="img" />
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
    <td><span class="btn_quantity" @click="decrease">-  &nbsp;</span>{{ cart_item.quantity }}
    <span class="btn_quantity" @click="increment">&nbsp;  +</span></td>
    <td>FREE</td>
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
    increment() {
      this.$emit('increment');
    },
    decrease() {
      this.$emit('decrease');
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

<style lang="scss">
  .btn_quantity {
    cursor: pointer;
  }
  .cart_item_img {
    width: 70px;
  }
</style>
