<template>
  <div>
    <section class="subscribe">
      <div class="subscribe-left center">
        <article class="subscribe-content">
          <img class="woman" :src="require('../assets/img/Layer_40.png')" alt="photo" />
          <div class="subscribe-text">
            <p class="vest">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              a pulvinar purus condimentum a. Aliquam condimentum mattis
              neque sed pretium”
            </p>
            <p class="bin">Bin Burhan</p>
            <p class="ghaka">Dhaka, Bd</p>
          </div>
          <div class="subscribe-line">
            <a href class="grey-line"></a>
            <a href class="grey-line active-line"></a>
            <a href class="grey-line"></a>
          </div>
        </article>
      </div>
      <div class="subscribe-right center">
        <h3 class="sub">
          <span class="subs">Subscribe</span>
          <br />FOR OUR NEWLETTER AND PROMOTION
        </h3>
        <div class="subscribe-enter">
          <form action="#" class="form-email">
            <input id="email" placeholder="Enter Your Email" required pattern="\S+@[a-z]+.[a-z]+" />
            <input type="submit" class="butt" value="Subscribe" />
          </form>
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
