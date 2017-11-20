<template>
  <div class="index">
    <div class="page-wrapper">
      <blockquote>
        <div class="container">
          A traditional fundraiser only happens one day out of the year in one place.<br>
          You can do a Volunteerathon any time of the year anywhere in the world.
        </div>
      </blockquote>
      <h1>Change the world in 3 easy steps:</h1>
    </div>
    <div class="container">
      <div class="columns combo-wrapper is-multiline">
        <ComboBox iconsrc="check.png" duplicate="false">
          <h2>Select</h2>
        </ComboBox>
        <ComboBox iconsrc="invite.png" duplicate="false">
          <h2>Invite</h2>
        </ComboBox>
        <ComboBox iconsrc="act.png" duplicate="false">
          <h2>Act</h2>
        </ComboBox>
      </div>
    </div>
    <div class="container form-wrapper">
      <form method="post" action="/">
        <div class="field">
          <label class="label">I will do the following volunteer work or service project:</label>
          <div class="control">
            <input class="input" type="text" name="action" placeholder="">
          </div>
          <p class="help">To find nonprofits to help or independent projects to do, <a target="_blank" href="http://aqua.dailysource.org/donation/helpcreatethis">click here</a></p>
        </div>
        <div class="field">
          <label class="label">Number of hours I will volunteer:</label>
          <div class="control">
            <input class="input" type="text" name="hours" placeholder="">
          </div>
        </div>
        <div class="field">
          <label class="label">The donations will go to:</label>
          <div class="control">
            <select>
              <option disabled selected value> -- Please select -- </option>
              <option value="np1">Nonprofit 1</option>
              <option value="np2">Nonprofit 2</option>
              <option value="np3">Nonprofit 3</option>
            </select>
          </div>
        </div>
        <button class="button is-success" type="submit">Submit</button>
      </form>        
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ComboBox from '~/components/ComboBox.vue'

export default {
  components: {
    Logo,
    ComboBox
  }
}
</script>

<style scoped lang="scss">
.page-wrapper {
  background-color: $color-dark-gray;
  color: white;
  text-align: center;
  padding: 40px 0;
}

.combo-wrapper {
  justify-content: center;  
}

.form-wrapper {
  max-width: 600px;
  margin: 30px auto;
}

</style>
