<template>
  <parallax>
    <img :src="imgsrc">
    <slot>
      content slot
    </slot>
  </parallax>
</template>

<style scoped lang="scss">
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  props: [ 'imgsrc' ]
}
</script>
