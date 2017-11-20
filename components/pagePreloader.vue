<template>
  <div class="wrapper-preloader"  v-bind:class="{ 'hide-on-load': loading }">
    <Logo />
  </div>
</template>

<style scoped lang="scss">
.wrapper-preloader {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.1s ease-in-out;
  background-color: $color-bglight;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>