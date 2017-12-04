<template>
  <div>
    <section class="hero">
      <div class="hero-img" v-bind:style="{ backgroundImage: `url(${imgsrc})` }"></div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-html="headline"></h1>
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
    min-height: 70vh;
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
      background-size: cover;
      min-height: 70vh;
    }
  }

  .hero-body {
    padding: 0;

    h1 {
      position: absolute;
      text-align: left;
      top: 17px;
      font-size: 28px;

      @include breakpoint($bulma) {
        font-size: 40px;
      }
    }

    .cta {
      font-size: 24px;
    }
  }
}

.tagline {
  font-size: 20px;
  text-align: center;
  color: $color-emphasis;
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
  props: [ 'headline', 'imgsrc', 'tagline' ]
}
</script>
