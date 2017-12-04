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
  text-align: center;

  @include breakpoint($bulma) {
    max-width: 33%;
    min-width: 33%;    
  }

  .icon-wrapper {
    text-align: center;
  }

  h2 {
    font-size: 14px;
    color: $color-text;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 15px;
  }

  p {
    font-size: 12px !important;
  }
}

</style>

<script>
export default {
  props: [ 'iconsrc', 'duplicate' ]
}
</script>
