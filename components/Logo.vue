<template>
  <div class="logo-wrapper">
    <img src="logo.jpg" :width="logowidth" :height="logoheight" alt="Volunteerathon logo">
  </div>
</template>

<style scoped lang="scss">
.logo-wrapper {
  margin-left: -4px;
  
  @include breakpoint($sm) {
    margin-left: -9px;  
  }
}
</style>

<script>
export default {
  props: [ 'logowidth', 'logoheight' ]
}
</script>
