<template>
  <div class="logo-wrapper">
    <img src="logo.jpg" :width="logowidth" :height="logoheight" alt="Volunteerathon logo">
  </div>
</template>

<style scoped lang="scss">
</style>

<script>
export default {
  props: [ 'logowidth', 'logoheight' ]
}
</script>
