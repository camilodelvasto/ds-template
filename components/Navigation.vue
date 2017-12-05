<template>
  <div class="nav-container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="container">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/">Volunteering</nuxt-link>
          <nuxt-link to="/">Nonprofits</nuxt-link>
          <nuxt-link to="/">Tips</nuxt-link>
          <nuxt-link to="/">News</nuxt-link>
          <nuxt-link to="/">Discussions</nuxt-link>
          <nuxt-link to="/">About Us</nuxt-link>
        </div>
      </div>
      <button class="button navbar-burger" @click="toggleMenu()" v-bind:class="{'is-active': showMobileMenu}">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</template>

<style scoped lang="scss">

.nav-container {
  position: absolute;
  top: 0;
  left: 0;

  @include breakpoint($bulma) {
    position: static;
  }
}

.button {
  border: none;
}
.navbar-burger {
  z-index: 200;
}

.navbar {
  @include breakpoint($md) {
    background: $color-emphasis-alt;
    padding-top: 10px;
  }
  @include breakpoint($bulma) {
    min-height: 45px;
    justify-content: center;
  }
}
.navbar-container {
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 0;
}

.navbar-start {
  height: 20px;
  min-height: 0;

  a {
    text-transform: uppercase;
    margin-right: 20px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  } 
}

.navbar-menu {
  position: absolute;

  @include breakpoint($bulma) {
    display: flex;

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    a {
      color: $white;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  &.is-active {
    width: 100vw;
    background: $white;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    z-index: 100;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    a {
      display: block;
      font-size: 20px;
      line-height: 1.3;
      margin: 10px 0;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>