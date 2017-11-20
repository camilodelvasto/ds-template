<template>
  <div class="wrapper">
    <transition name="fade">
      <div class="preloader" v-if="loading">
        <pagePreloader/>
      </div>
    </transition>
    <div class="default-layout" v-if="!loading">
      <nuxt />
      <DailyFooter />
    </div>
  </div>
</template>

<script>
import pagePreloader from '~/components/pagePreloader.vue'
import DailyFooter from '~/components/DailyFooter.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    pagePreloader,
    DailyFooter,
    Navigation
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 200)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style scoped lang="scss">

.fade-enter, .fade-leave-active {
  animation: appearOut 0.1s;
}


</style>