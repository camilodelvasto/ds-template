<template>
  <section class="page-wrapper" :fixed="true" v-bind:style="{ backgroundImage: `url(${parallaxImgSrc})`, backgroundPosition: bgPosition }" breakpoint="(min-width: 968px)">
    <div>
      <div class="container capped">
        <h1>The old way is OK</h1>
      </div>
      <div class="container capped">
        <div class="logo-badge">
          <h3>If you do one of these and invite people to support you:</h3>
        </div>
        <div class="columns">
          <div class="card column">
            <div class="card-content" style="backgroundImage: url(s2-1.jpg)">
            </div>
            <footer class="card-footer">
              Walkathon
            </footer>
          </div>
          <div class="card column">
            <div class="card-content" style="backgroundImage: url(s2-2.jpg)">
            </div>
            <footer class="card-footer">
              Bikeathon
            </footer>
          </div>
          <div class="card column">
            <div class="card-content" style="backgroundImage: url(s2-3.jpg)">
            </div>
            <footer class="card-footer">
              Charity Run
            </footer>
          </div>
        </div>
      </div>
      <div class="container capped">
        <h2 class="result">The result is: </h2>
        <div class="columns combo-wrapper is-multiline">
          <ComboBox iconsrc="money.png" duplicate="false">
            <h2>You raise some money</h2>
            <p>The average walkathon, bikeathon and charity run raises $600 for charity.</p>
          </ComboBox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
import ComboBox from '~/components/ComboBox.vue'

export default {
  components: {
    Parallax,
    ComboBox
  },
  data () {
    return {
      imgarr: ['s2-3.jpg', 's2-4.jpg', 's2-5.jpg'],
      parallaxImgSrc: 'bg-tile.jpg',
      currentImg: 0,
      timer: null,
      scrollTop: 0
    }
  },
  mounted () {
    this.startRotation()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
    },
    handleScroll () {
      this.scrollTop = window.scrollY;
    }
  },
  computed: {
    bgPosition () {
      var translate = this.scrollTop / 3
      return `0 ${translate}px`
    }
  }
}
</script>

<style scoped lang="scss">

.Masthead {
  min-height: 120vh;
}

h3 {
  padding-bottom: 32px;
  text-align: center;
}

.result {
  display: block;
  margin-top: 20px;
  color: $color-text;
  font-weight: bold;
}

.columns {
  margin-top: 20px;

  @include breakpoint($sm) {
    justify-content: flex-start;
    display: flex;
  }
}

.card-footer {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  display: block;
  padding: 10px;
  border: none;
}

</style>
