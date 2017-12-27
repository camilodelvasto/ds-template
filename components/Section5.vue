<template>
  <div class="page-wrapper">
    <h1>Change the world in 3 easy steps:</h1>
    <div class="container">
      <div class="columns combo-wrapper is-multiline">
        <ComboBox iconsrc="check.png" duplicate="false" :large="true">
        </ComboBox>
        <ComboBox iconsrc="invite.png" duplicate="false" :large="true">
        </ComboBox>
        <ComboBox iconsrc="act.png" duplicate="false" :large="true">
        </ComboBox>
      </div>
    </div>
    <div class="container">
      <div class="form-wrapper">
        <form method="post" action="/">
          <div class="field work">
            <label class="label">I will do the following volunteer work or service project:</label>
            <div class="control">
              <input class="input" type="text" name="action" placeholder="">
            </div>
            <p class="help">To find nonprofits to help or independent projects to do, <a target="_blank" href="http://aqua.dailysource.org/donation/helpcreatethis">click here</a></p>
          </div>
          <div class="field hours">
            <label class="label">Number of hours I will volunteer:</label>
            <div class="control">
              <input class="input" type="text" name="hours" placeholder="">
            </div>
          </div>
          <div class="select donations">
            <label class="label">The donations will go to:</label>
            <select>
                <option disabled selected value> -- Please select -- </option>
                <option value="np1">Nonprofit 1</option>
                <option value="np2">Nonprofit 2</option>
                <option value="np3">Nonprofit 3</option>
            </select>
          </div>
          <button class="button is-success is-large" type="submit">Next</button>
        </form>
      </div>
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
  background-color: $white;
  color: white;
  text-align: center;
}

h1 {
  color: $color-emphasis;
  margin-bottom: 40px;
}

.combo-wrapper {
  justify-content: center;

  @include breakpoint($sm) {
    display: flex;
    padding: 0 7%;
  }
}

.form-wrapper {
  max-width: 600px;
  margin: 50px auto 0;

  @include breakpoint($md) {
    margin-top: 80px;
  }

  button[type=submit] {
    margin: 50px 0 30px;
  }

  label {
    font-size: 18px;
  }
}

.help {
  color: $color-dark-gray;
  font-size: 16px;
  margin-top: 10px;
}

.work {
  @include breakpoint($md) {
    label {
      text-align: left;
    }
    .help {
      text-align: left;
    }
  }
}

.work {
  label {
    text-align: left;
  }
}

.donations,
.hours {
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    text-align: left;
    width: 50%;
    margin-bottom: 0;

    @include breakpoint($sm) {
      width: 60%;
    }
  }

  select,
  .control {
    width: 45%;

    @include breakpoint($sm) {
      width: 40%;
    }
  }
}

</style>
