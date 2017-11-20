<template>
  <div class="nav-container">
    <nav class="navbar is-transparent"
      v-bind:class="{ 'expanded': showMobileMenu }"
    >
      <div class="container is-fluid navbar-container">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo /></nuxt-link>
        </div>

        <div id="#nav-burger-trigger" class="navbar-burger hide-for-now"
          v-bind:class="{ 'is-active': showMobileMenu }"
          v-on:click="toggleMobileMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-start"
          v-on:click="closeMobileMenu()"
        >
          <nuxt-link to="/">Links go here</nuxt-link>
        </div>
        <div class="navbar-end"
          v-on:click="closeMobileMenu()"
        >
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu () {
      var vm = this
      vm.showMobileMenu = !vm.showMobileMenu
      if (vm.showMobileMenu) {
        vm.openMobileMenu()
      } else {
        vm.closeMobileMenu()
      }
    },
    closeMobileMenu () {
      var vm = this
      document.body.classList.remove('modal-open')
      vm.showMobileMenu = false
    },
    openMobileMenu () {
      var vm = this
      document.body.classList.add('modal-open')
      vm.showMobileMenu = true
    }
  }
}
</script>