<template>
  <div class="nav-container">
    <nav class="navbar is-transparent">
      <div class="container is-fluid navbar-container">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo logowidth="350" logoheight="62" /></nuxt-link>
        </div>
        <div class="navbar-start">
          <nuxt-link to="/">Login</nuxt-link>
          <nuxt-link to="/">Register</nuxt-link>
        </div>
        <div class="navbar-end">
          <span class="small">Powered by </span>
          <img :src="maxGoodImgSrc" width="200px">
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar-start {
  text-align: center;

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

  @include breakpoint($bulma) {
    margin-left: 50px;
    margin-top: 33px;
  }
}

.navbar-brand {
  justify-content: center;
}
.navbar-end {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;

  @include breakpoint($bulma) {
    height: 20px;
    margin-top: 25px;
    margin-right: 45px;
  }
  span {
    color: $color-medium-gray;
    font-size: 12px;
  }
}
.navbar {
  >.container {
    margin: 0 !important;

    @include breakpoint($md) {
      margin: 10px 20px !important;
      display: flex;
      align-items: center;
    }    
  }
}


</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      maxGoodImgSrc: 'maximum-good-logo-reduced.png'
    }
  }
}
</script>