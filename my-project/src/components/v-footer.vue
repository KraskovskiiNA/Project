<template>
  <div>
    <footer class="footer">
      <div class="footer-content center">
        <div class="footer-text">
          <router-link class="logo" :to="{name: 'Home'}">
            <img class="logo__img" :src="require('../assets/img/logo.svg')" alt="logo" />BRAN
            <b class="red">D</b>
          </router-link>
          <p class="footerText">
            Objectively transition extensive data rather than cross
            functional solutions. Monotonectally syndicate
            multidisciplinary materials before go forward benefits.
            Intrinsicly syndicate an expanded array of processes and
            cross-unit partnerships.
            <br />
            <br />Efficiently plagiarize 24/365 action items
            and focused infomediaries. Distinctively seize superior
            initiatives for wireless technologies. Dynamically optimize.
          </p>
        </div>
        <div class="footer-link">
          <ul class="c">
            <li>
              <p class="b">COMPANY</p>
            </li>
            <li>
              <router-link class="a" :to="{name: 'Home'}">Home</router-link>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Shop</router-link>
            </li>
            <li>
              <a class="a" href="#">About</a>
            </li>
            <li>
              <a class="a" href="#">How It Works</a>
            </li>
            <li>
              <router-link class="a" :to="{name: 'checkout'}">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-link">
          <ul class="c">
            <li>
              <p class="b">INFORMATION</p>
            </li>
            <li>
              <a class="a" href="#">Tearms & Condition</a>
            </li>
            <li>
              <a class="a" href="#">Privacy Policy</a>
            </li>
            <li>
              <a class="a" href="#">How to Buy</a>
            </li>
            <li>
              <a class="a" href="#">How to Sell</a>
            </li>
            <li>
              <a class="a" href="#">Promotion</a>
            </li>
          </ul>
        </div>
        <div class="footer-link">
          <ul class="c">
            <li>
              <p class="b">SHOP CATEGORY</p>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Men</router-link>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Woman</router-link>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Child</router-link>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Apparel</router-link>
            </li>
            <li>
              <router-link class="a" :to="{name: 'product'}">Brows All</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-footer center">
        <div class="footer-left">
          <p class="footer-left-text">&copy; 2020 Brand All Rights Reserved.</p>
        </div>
        <div class="footer-right">
          <a href="#" class="footer-img">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#" class="footer-img">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#" class="footer-img">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="footer-img">
            <i class="fab fa-pinterest-square"></i>
          </a>
          <a href="#" class="footer-img">
            <i class="fab fa-google-plus-square"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
