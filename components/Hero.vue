<template>
  <div>
    <section class="herox">
      <img class="hero-img" :src="imgsrc">
      <div class="herox-body">
        <div class="container">
          <h1 class="title" v-html="headline"></h1>
          <button class="cta button is-success" @click="toggleLipsum()" v-if="!showingLipsum">Learn more</button>
          <button class="cta button is-success" @click="toggleLipsum()" v-if="showingLipsum">Hide info</button>
          <transition name="fade">
            <p class="lipsum" v-if="showingLipsum">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at diam eu nunc porttitor commodo. Vestibulum egestas vel eros sed posuere. 
              Cras non condimentum mauris, ac luctus sem. Sed ex eros, ornare ut tincidunt et, consectetur et dui. Vestibulum non lacus eros. Nunc id fermentum leo. Praesent ultrices massa eu.
            </p>
          </transition>
        </div>
      </div>
    </section>
    <div class="container">
      <h3 class="tagline" v-html="tagline"></h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.herox {
  text-align: center;

  .hero-img {
    height: 444px;
    width: 980px;
    margin: 30px auto 0;
  }

  .herox-body {

    h1 {
      position: absolute;
      top: -350px;
      font-size: 48px;
      font-style: italic;
      font-weight: bold;
      color: $color-emphasis-alt;
      text-align: left;
    }

    h3 {
      font-size: 24px;
    }

    .cta {
      position: absolute;
      left: 0;
      top: -160px;
      font-size: 24px;
    }

    .lipsum {
      background: $color-light-gray;
      padding: 20px;
      margin: 0 auto 20px;
      text-align: left;
    }
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
  props: [ 'headline', 'imgsrc', 'tagline' ],
  data () {
    return {
      showingLipsum: false
    }
  },
  methods: {
    toggleLipsum () {
      console.log(this.showingLipsum)
      this.showingLipsum = !this.showingLipsum
    }
  }
}
</script>
