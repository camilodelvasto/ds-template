<template>
  <div class="index">
    <div class="page-wrapper">
      <Masthead/>
      <Navigation />
      <Hero :headline="hero.headline" :imgsrc="hero.imgsrc" :tagline="hero.tagline"/>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import Navigation from '~/components/Navigation.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Masthead,
    Navigation,
    Hero
  },
  data () {
    return {
      hero: {
        headline: 'Raise donations<br> while doing<br> good!',
        imgsrc: 'https://res.cloudinary.com/startics/image/upload/v1511201291/hero_kovj60.png',
        tagline: 'Join NOW! It’s FUN…'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
