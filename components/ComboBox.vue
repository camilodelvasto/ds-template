<template>
  <div class="box-wrapper" v-bind:class="{ 'column vertical': layout !== 'row' }">
    <div v-if="layout !== 'row'">
      <div class="icon-wrapper">
        <img class="icon-img" :src="iconsrc" v-bind:class="{ 'large': large }">
        <img class="icon-img" :src="iconsrc" v-if="duplicate === 'true'">
      </div>
      <div>
        <slot>
          Default content for this combo box
        </slot>
      </div>
    </div>
    <div class="columns horizontal" v-if="layout === 'row'" v-bind:class="{ 'reverse': reverse }">
      <div class="icon-wrapper column is-2">
        <img class="icon-img" :src="iconsrc">
      </div>
      <div class="column content">
        <slot>
          Default content for this combo box
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-wrapper {
  text-align: center;

  .icon-wrapper {
    text-align: center;

    .icon-img {
      width: 50px;

      &.large {
        width: auto;
        max-width: 140px;

        @include breakpoint($sm) {
          max-width: 180px;
        }    
      }
    }
  }

  &.vertical {
    @include breakpoint($sm) {
      min-width: 30%;
      max-width: 33%;
    }    
  }

  h2 {
    font-size: 17px;
    color: $color-text;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px !important;
  }

  .horizontal {
    text-align: center;
    margin: 10px 0;
    align-items: center;

    .icon-img {
      max-width: 140px;
      width: auto;
    }

    @include breakpoint($bulma) {
      display: flex;
      flex-direction: row;
      margin: 10px 0;
    }

    &.reverse {
      flex-direction: row-reverse;
    }

    p {
      font-size: 16px !important;

      @include breakpoint($bulma) {
        font-size: 20px !important;
        text-align: left;
      }
    }

  }
}

</style>

<script>
export default {
  props: [ 'iconsrc', 'duplicate', 'layout', 'reverse', 'large' ]
}
</script>
