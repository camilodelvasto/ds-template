<template>
  <div>
    <section class="hero">
      <div class="hero-img" v-bind:style="{ backgroundImage: `url(${imgsrc})` }"></div>
      <div class="hero-body">
        <div class="container content-container">
          <h1 class="title" v-html="headline"></h1>
          <h3 class="cta" v-html="cta"></h3>
        </div>
      </div>
    </section>
    <div class="container">
      <h3 class="tagline" v-html="tagline"></h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  text-align: center;
  width: 100vw;
  min-height: 40vh;
  position: relative;

  @include breakpoint($sm) {
    min-height: 35vh;
  }

  @include breakpoint($bulma) {
    min-height: 45vw;
  }

  @include breakpoint($lg) {
    min-height: 34vw;
  }

  .hero-img {
    width: 100vw;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;

    @include breakpoint($sm) {
      background-size: contain;
      height: 35vh;
    }

    @include breakpoint($bulma) {
      background-size: contain;
      min-height: 34vw;
      background-position: center;
    }
  }

  .hero-body {
    padding: 0;

    h1 {
      position: absolute;
      text-align: left;
      top: 17px;
      font-size: 28px;

      @include breakpoint($sm) {
        left: 10px;
      }
      @include breakpoint($bulma) {
        font-size: 44px;
      }
    }
    h3 {
      @include breakpoint($sm) {
        left: 10px;
      }      
    }
  }
}

.tagline {
  z-index: 1;
  position: static;
  margin-top: 10px;
  width: 100%;
  text-align: center;
  line-height: 1.1;
  font-size: 36px;
}

.cta {
  font-size: 20px;
  color: $color-emphasis;
  bottom: 16vw;
  position: absolute;

  @include breakpoint($sm) {
    bottom: 10vw;
  }

  @include breakpoint($md) {
    font-size: 28px;
    bottom: 7vw;
  }

  @include breakpoint($lg) {
    bottom: 7vw;
  }
}


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}

</style>

<script>
export default {
  props: [ 'headline', 'imgsrc', 'tagline', 'cta' ]
}
</script>
