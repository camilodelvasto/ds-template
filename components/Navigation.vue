<template>
  <div class="nav-container">
    <nav class="navbar is-transparent">
      <div class="container is-fluid navbar-container">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo /></nuxt-link>
        </div>
        <div class="navbar-end">
          <nuxt-link to="/">Login</nuxt-link>
          <nuxt-link to="/">Register</nuxt-link>
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
  }
}
</script>