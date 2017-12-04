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
          <img class="share-button" :src="shareButtonImgSrc" width="">
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
    line-height: 1;
    margin-right: 10px;
    padding-right: 10px;

    &:first-child {
      border-right: 1px solid $color-emphasis;
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
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;

  @include breakpoint($bulma) {
    height: 20px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

.share-button {
  margin-bottom: -5px;

  @include breakpoint($bulma) {
    margin-top: -5px;
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
      maxGoodImgSrc: 'maximum-good-logo-reduced.png',
      shareButtonImgSrc: 'share-button.png'
    }
  }
}
</script>