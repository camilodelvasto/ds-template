<template>
  <div class="index">
    <Parallax fixed="true" imgsrc="19.jpg">
      <div class="page-wrapper">
        <div class="container">
          <h1>The new way quadruples the benefits</h1>
        </div>
      </div>
    </Parallax>
  </div>
</template>

<script>
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    Parallax
  }
}
</script>

<style scoped lang="scss">
.page-wrapper {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid red;
}
</style>
