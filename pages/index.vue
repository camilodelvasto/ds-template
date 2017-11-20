<template>
  <div class="index">
    <div class="page-wrapper">
      <Section1/>
      <Section3/>
    </div>
  </div>
</template>

<script>
import Section1 from '~/components/Section1.vue'
import Section3 from '~/components/Section3.vue'

export default {
  components: {
    Section1,
    Section3
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
