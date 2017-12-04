<template>
  <div class="index">
    <div class="page-wrapper">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  </div>
</template>

<script>
import Section1 from '~/components/Section1.vue'
import Section2 from '~/components/Section2.vue'
import Section3 from '~/components/Section3.vue'
import Section4 from '~/components/Section4.vue'

export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4
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
