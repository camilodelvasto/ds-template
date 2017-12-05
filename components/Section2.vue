<template>
  <div class="index">
    <Parallax :fixed="true" class="is-fixed" v-bind:style="{ backgroundImage: `url(${parallaxImgSrc})` }">
      <div class="page-wrapper">
        <div class="container capped">
          <h1>The old way is OK</h1>
        </div>
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
      <div class="container capped">
        <h3></h3>
      </div>
    </Parallax>
  </div>
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
      parallaxImgSrc: 'parallax.png',
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

.Masthead {
  min-height: 120vh;
}

h1 {
  color: $color-text;
  text-align: center;
  font-size: 30px;
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

.logo-badge {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h3 {
    color: $color-text;
    font-size: 16px;
    padding-bottom: 0;
  }
}

.columns {
  margin-top: 20px;

  @include breakpoint($sm) {
    justify-content: flex-start;
  }

  .card {
    padding: 0;
    margin: 10px;

    .card-content {
      padding: 10px;
      height: calc(100vw - 30px);
      border: 10px solid $white;

      @include breakpoint($sm) {
        height: calc(252px - 30px);
      }
    }
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
