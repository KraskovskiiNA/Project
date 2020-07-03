<template>
  <div>
    <section class="new-arrivals">
      <div class="arrival-content center">
        <div class="arrival-text">
          <h3 class="arrivals-h3">New Arrivals</h3>
        </div>
        <div class="breadcrumb">
          <router-link class="crumb" :to="{name: 'Home'}">Home/</router-link>
          <router-link class="crumb" :to="{name: 'product'}">Man/</router-link>
          <a href="#" class="crumb active">New Arrivals</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
