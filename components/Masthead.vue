<template>
  <div class="nav-container">
    <nav class="navbar is-transparent">
      <div class="container is-fluid navbar-container">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo logowidth="350" logoheight="62" /></nuxt-link>
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
.navbar-end {
  height: 20px;
  margin-top: 25px;

  a {
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid $color-emphasis;
    line-height: 1;

    &:last-child {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }
}
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>