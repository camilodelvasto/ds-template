<template>
  <div class="index">
    <div class="page-wrapper">
      <Masthead/>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'

export default {
  components: {
    Masthead
  },
  transition: 'page',
  data () {
    return {
      showingModal: false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
