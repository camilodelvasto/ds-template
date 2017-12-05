<template>
  <div class="page-wrapper">
    <div class="container">
      <h1>A big opportunity for good</h1>
      <div class="combo-wrapper">
        <ComboBox iconsrc="volunteers-red.jpg" duplicate="false" layout="row" :reverse="false">
          <p>The average Volunteerathon raises $700, which is somewhat higher than the $600 that the average walkathon and bijeathon raise. This is because people on average will donate more if your time is helping a nonprofit than if you're exercising.</p>
        </ComboBox>
        <ComboBox iconsrc="multiply-logo.jpg" duplicate="false" layout="row" :reverse="true">
          <p>If you volunteer 60 hours, you’re saving a nonprofit about $720. If you spend another hour emailing invites and raise close to the average of $700, you double your impact in 1/60 th of the time. Would you rather contribute $720 in 60 hours or $1,420 in 61 hours?</p>
        </ComboBox>
        <ComboBox iconsrc="spread-the-word.png" duplicate="false" layout="row" :reverse="false">
          <p>A Volunteerathon also raises awareness about your cause. Some of the people you invite will be more likely to donate to or volunteer for that cause in the future. So the impact of a Volunteerathon over normal volunteering is more than double.</p>
        </ComboBox>
        <ComboBox iconsrc="money-stack-red.jpg" duplicate="false" layout="row" :reverse="true">
          <p>100 million people volunteer each year. They’re putting in the same effort as a walkathon, but they’re not generating any donations from it. If even 10% make their next volunteering be a “Volunteerathon” and invite their friends to be sponsors and raise $700, that is $7 billion in donations per year.</p>
        </ComboBox>
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
  background-color: $color-light-bg;
  text-align: center;
  padding: 40px 0;

  h1 {
    color: $color-text;
  }
}

.combo-wrapper {
  padding: 40px 0;
}



</style>
