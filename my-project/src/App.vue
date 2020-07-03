<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['CART']),
  },
};
</script>
<style lang="scss">
@import "assets/style.css";
</style>
