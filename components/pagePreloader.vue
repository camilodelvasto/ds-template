<template>
  <div class="wrapper-preloader"  v-bind:class="{ 'hide-on-load': loading }">
    dailysource.org
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
  background-color: $color-emphasis;
  display: flex;
  justify-content: center;
  align-items: center;
    
  svg {
    animation: spin 1s ease-in-out infinite;

    path {
      fill: $color-bg-light;
      fill-rule:nonzero;
    }
  }
}
</style>

<script>
export default {
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