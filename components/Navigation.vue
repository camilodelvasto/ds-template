<template>
  <div class="nav-container">
    <nav class="navbar">
      <div class="container is-fluid navbar-container">
        <div class="navbar-start">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/">Volunteering</nuxt-link>
          <nuxt-link to="/">Nonprofits</nuxt-link>
          <nuxt-link to="/">Tips</nuxt-link>
          <nuxt-link to="/">News</nuxt-link>
          <nuxt-link to="/">Discussions</nuxt-link>
          <nuxt-link to="/">About Us</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">

.navbar {
  background: $color-emphasis-alt;
  min-height: unset !important;
  padding-top: 10px;
}
.navbar-container {
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 0;
}

.navbar-start {
  height: 20px;
  min-height: 0;

  a {
    text-transform: uppercase;
    margin-right: 20px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  } 
}
</style>

<script>
</script>