<template>
  <form class="header__form" action="#" @submit.prevent="$emit('searchForm', searchStr)">
    <details class="browse">
      <summary id="summary-browse">Browse</summary>
      <div class="drop drop__browse">
        <div class="drop__flex">
          <h3 class="drop__h3">Women</h3>
          <ul class="drop__ul">
            <li>
              <a href="product.html" class="drop__link">Dresses</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Tops</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Sweaters/Knits</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Jackets/Coats</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Blazers</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Denim</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Leggings/Pants</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Skirts/Shorts</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Accessories</a>
            </li>
          </ul>
          <h3 class="drop__h3">Man</h3>
          <ul class="drop__ul">
            <li>
              <a href="product.html" class="drop__link">Tees/Tank tops</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Shirts/Polos</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Sweaters</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Sweatshirts/Hoodies</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Blazers</a>
            </li>
            <li>
              <a href="product.html" class="drop__link">Jackets/vests</a>
            </li>
          </ul>
        </div>
      </div>
    </details>
    <input type="text" class="text-s" placeholder="Search for Item..." v-model="searchStr" />
    <a href class="sear">
      <img :src="require('../assets/img/search.png')" alt="search" />
    </a>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchStr: '',
    };
  },
};
</script>

<style>
</style>
