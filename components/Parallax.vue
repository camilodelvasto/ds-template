<template>
  <parallax>
    <div class="bg-parallax" :class="bgclass">
      <img :src="imgsrc">
      <slot>
        content slot
      </slot>
    </div>
  </parallax>
</template>

<style scoped lang="scss">
.bg-parallax {
  &.gray {
    background-color: $color-light-gray;
  }
}

.Masthead__image.is-parallax {
  img {
    position: absolute;
    z-index: -1;
  }
}
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  props: [ 'imgsrc', 'bgclass' ]
}
</script>
