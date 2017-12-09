<template>
  <div class="nav-container">
    <nav class="navbar is-transparent">
      <div class="container navbar-container">
        <div class="navbar-brand">
          <nuxt-link to="/"><Logo logowidth="350" logoheight="62" /></nuxt-link>
        </div>
        <div class="navbar-start">
          <nuxt-link to="/">Login</nuxt-link>
          <nuxt-link to="/">Register</nuxt-link>
          <img class="share-button" :src="shareButtonImgSrc" width="">
        </div>
        <div class="navbar-end">
          <div class="max-good" @click="toggleOtherMaxGoodSites()">
            <span class="small">Powered by </span>
            <img :src="maxGoodImgSrc" width="200px">
            <ul class="other-max-good-sites">
              <li>
                <span class="other-sites-arrow" :class="{ 'turn': showingMaxGoodSites }">&#9662;</span>
                <ul class="sub" :class="{ 'active': showingMaxGoodSites }">
                  <li v-for="site in maxGoodSites"><a :href="site.href" target="_blank">{{ site.name }}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      maxGoodImgSrc: 'maximum-good-logo-reduced.png',
      shareButtonImgSrc: 'share-button.png',
      showingMaxGoodSites: false,
      maxGoodSites: [
        { name: 'Volunteerathon', href: '#' },
        { name: 'Quitathon', href: '#' },
        { name: 'Loseathon', href: '#' },
        { name: 'Give it up for Good', href: '#' },
        { name: 'Vacation for Good', href: '#' },
        { name: 'Waterathon', href: '#' },
        { name: 'Christmas for Good', href: '#' },
        { name: 'MLK Day for Good', href: '#' },
        { name: 'The Lent Site', href: '#' },
        { name: 'Valentines for Good', href: '#' },
        { name: 'Fools for Good', href: '#' },
        { name: 'Resolutions for Good', href: '#' },
        { name: 'Run for good', href: '#' },
        { name: 'Bike for Good', href: '#' },
        { name: 'Walk for Good', href: '#' },
        { name: 'Birthdays for Good', href: '#' },
        { name: 'Polar Plunge for Good', href: '#' },
        { name: 'Bake for Good', href: '#' }
      ]
    }
  },
  methods: {
    toggleOtherMaxGoodSites () {
      this.showingMaxGoodSites = !this.showingMaxGoodSites
      console.log(this.showingMaxGoodSites)
    }
  }
}
</script>

<style scoped lang="scss">
.other-max-good-sites {
  padding-left: 10px;

  li {
    position: relative;

    .other-sites-arrow {
      font-size: 40px;
      line-height: 25px;
      color: $color-medium-gray;
      transition: color 0.2s ease-in-out;

      &.turn {
        color: $color-light-gray;
      }
    }

    ul.sub {
      opacity: 0;
      z-index: -1;
      transition: opacity 0.2s ease-in-out;
      position: absolute;
      top: 35px;
      right: 0;
      background: rgba($white, 0.9);
      text-align: right;
      border: 1px solid $color-light-gray;

      @include breakpoint($lg) {
        top: 30px;
      }

      &.active {
        opacity: 1;
        z-index: 24;

        @include breakpoint($lg) {
          opacity: 0;
          z-index: -1;
        }
      }

      li {
        border-bottom: 1px solid $color-light-gray;
        min-width: 65vw;
        transition: background-color 0.2s ease-in-out;

        @include breakpoint($md) {
          min-width: 40vw;
        }

        @include breakpoint($lg) {
          min-width: 300px;
        }

        a {
          display: block;
          padding: 10px 30px;
          transform: translateX(20px);
        }

        &:hover {
          background: rgba($color-light-gray, 0.8);
        }
      }
    }
  }
}

.max-good {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;

  .small {
    padding-right: 10px;
  }

  @include breakpoint($lg) {
    &:hover {
      .other-sites-arrow {
        color: $color-light-gray;
      }


      ul.sub {
        opacity: 1;
        z-index: 24;      

        &.active {
          opacity: 1;
          z-index: 24;
        }
      }
    }
  }
}


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
    margin-top: 24px;
    padding-bottom: 10px;
  }
}

.navbar-brand {
  justify-content: center;
  margin-bottom: 10px;

  a {
    width: 200px;
    padding-top: 10px;

    @include breakpoint($bulma) {
      width: auto;
    }
  }
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
    @include breakpoint($md) {
      display: flex;
      align-items: center;
    }    
  }
}

.navbar-container {
  @include breakpoint($xs) {
    margin-left: 0 !important;
  }
}

.share-button {
  margin-bottom: -5px;

  @include breakpoint($bulma) {
    margin-top: -5px;
  }
}

.nav-container {
  border-bottom: 1px solid $color-silver;
}
</style>