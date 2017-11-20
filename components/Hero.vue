<template>
  <section class="herox" v-bind:style="{ backgroundImage: `url('${imgsrc}')` }">
    <div class="herox-body">
      <div class="container">
        <h1 class="title" v-html="headline"></h1>
        <h3 class="tagline" v-html="tagline"></h3>
        <button class="cta button is-success">Learn more</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.herox {
  background-size: cover;
  position: relative;
  height: 580px;
  width: 1280px;
  margin: 0 auto;

  .herox-body {
    .container {
      position: static;
    }

    h1 {
      position: absolute;
      top: 30px;
      font-size: 60px;
      font-style: italic;
      font-weight: bold;
      color: $color-emphasis-alt;
    }

    h3 {
      font-size: 24px;
      position: absolute;
      bottom: 20px;
    }

    .cta {
      position: absolute;
      bottom: 120px;
      font-size: 24px;
    }
  }
}
</style>

<script>
export default {
  props: [ 'headline', 'imgsrc', 'tagline' ]
}
</script>
