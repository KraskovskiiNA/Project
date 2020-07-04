<template>
  <div>
    <nav class="nav center">
      <ul class="menu">
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'Home'}">Home</router-link>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'product'}">Man</router-link>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'single'}">Women</router-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Dresses</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Tops</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Sweaters/Knits
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Jackets/Coat>
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Blazers</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Denim</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Leggings/Pants
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Skirts/Short
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Accessories</router-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Dresses</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Tops</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Sweaters/Knits
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Jackets/Coats
                  </router-link>
                </li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Dresses</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Tops</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Sweaters/Knits
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Dresses</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Tops</router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Sweaters/Knits
                  </router-link>
                </li>
                <li>
                  <router-link class="drop__link" :to="{name: 'product'}">Jackets/Coats
                  </router-link>
                </li>
                <li>
                  <img :src="require('../assets/img/Layer_42.png')" alt="photo" />
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'product'}">Kids</router-link>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'product'}">Accoseriese</router-link>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'product'}">Featured</router-link>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" :to="{name: 'product'}">Hot Deals</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'vnav',
};
</script>
