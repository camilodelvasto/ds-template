<template>
  <div class="index">
    <Parallax fixed="true" bgclass="gray" class="is-fixed">
      <div class="page-wrapper">
        <div class="container">
          <h1>The new way quadruples the benefits</h1>
          <h3>If you do this and invite people to support you</h3>
        </div>
      </div>
    </Parallax>
    <div class="container">
      <div class="logo">
        <Logo logowidth="350" logoheight="62" />
      </div>
      <div class="columns">
        <div class="card column">
          <div class="card-content">
            <img src="s3-1.jpg">
          </div>
        </div>
        <div class="card column">
          <div class="card-content card-loop">
            <div v-for="(image, index) in imgarr">
              <transition name="fade">
                <img :src="imgarr[index]" v-if="index === currentImg % imgarr.length">
              </transition>
            </div>
          </div>
        </div>
        <div class="card column">
          <div class="card-content">
            <img src="s3-2.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Parallax,
    Logo
  },
  data () {
    return {
      imgarr: ['s3-3.jpg', 's3-4.jpg', 's3-5.jpg'],
      currentImg: 0,
      timer: null
    }
  },
  mounted () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000)
    },
    next: function () {
      this.currentImg++
    },
    prev: function () {
      this.currentImg--
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrapper {
  margin-top: 32px;
  padding-top: 32px;
}

h1 {
  color: $color-text;
  text-align: center;
}
h3 {
  padding-bottom: 32px;
  text-align: center;
}
.logo {
  text-align: center;
}
.is-fixed.Masthead {
  height: auto !important;
  min-height: 300px !important;
}

.columns {
  margin-top: 20px;

  .card {
    padding: 0;
    margin: 10px;

    .card-content {
      padding: 10px;

      &.card-loop {
        img {
          position: absolute;
          max-width: 95%;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}

</style>
