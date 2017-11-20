<template>
  <div class="column">
    <div class="icon-wrapper">
      <img class="icon-img" :src="iconsrc" width="40">
      <img class="icon-img" :src="iconsrc" v-if="duplicate === 'true'" width="40">
    </div>
    <slot>
      Default content for this combo box
    </slot>
  </div>
</template>

<style scoped lang="scss">
.column {
  max-width: 27%;
  min-width: 27%;
  text-align: center;

  .icon-wrapper {
    text-align: center;
  }

  h2 {
    font-size: 24px;
    color: $color-emphasis;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 15px;
  }
}

</style>

<script>
export default {
  props: [ 'iconsrc', 'duplicate' ]
}
</script>
