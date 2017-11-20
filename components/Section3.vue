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
    <div class="container">
      <div class="columns combo-wrapper is-multiline">
        <ComboBox iconsrc="money.png" duplicate="false">
          <h2>You raise more money</h2>
          <p>People will donate larger amounts to your fundraiser if you spend your time serving others than if you walk, run or bike.</p>
        </ComboBox>
        <ComboBox iconsrc="money.png" duplicate="true">
          <h2>More of it goes to charity</h2>
          <p>About 15% of proceeds of bikeathons etc. go to event admin and credit card costs. In a Volunteerathon, only 4% goes to those. The extra 11% goes to charity.</p>
        </ComboBox>
        <ComboBox iconsrc="bag.png" duplicate="false">
          <h2>You save a nonprofit lots of money</h2>
          <p>If you volunteer 100 hours instead of training to ride or run long-distance, you save a nonprofit $1,200 to $1,800. That triples or quadruples your impact.</p>
        </ComboBox>
        <ComboBox iconsrc="smiley.png" duplicate="true">
          <h2>You’ll be happier</h2>
          <p>You’ll be more satisifed serving others than walking or running, and you’ll be happier from creating a bigger impact.</p>
        </ComboBox>
        <ComboBox iconsrc="smiley.png" duplicate="false">
          <h2>Your friends will be happier</h2>
          <p>People are happier about donating their money when your time is spent volunteering than when your time is spent walking or biking.</p>
        </ComboBox>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
import ComboBox from '~/components/ComboBox.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Parallax,
    ComboBox,
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

.combo-wrapper {
  margin: 40px 0;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}

</style>
