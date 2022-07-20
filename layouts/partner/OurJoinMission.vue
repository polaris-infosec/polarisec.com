<template>
  <div :class="$style.missionPanel">
    <div :class="$style.missionSection" class="app-width justify-content-lg-start text-lg-left text-center">
      <b-row class="mx-0 justify-content-center justify-content-lg-start">
        <p class="col-12 body-2 mb-4 pb-2 p-0 brand-2 h5-sm">
          {{ $t('partner.our-joint-mission.title') }}
        </p>
        <h2 class="col-11 m-0 p-0 text-lg-left h3-sm" v-html="$t('partner.our-joint-mission.content')">
        </h2>
      </b-row>
      <div :class="$style.divide" class="mb-4 mt-5 col-12"></div>

      <b-row class="d-flex justify-content-center justify-content-lg-between">
        <h3 class="col-12 col-lg-2 mb-4 brand-2-sm h5-sm">
          {{ $t('partner.program-goal.title') }}
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3 body-1-sm" v-html="$t('partner.program-goal.content-1')">
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3 body-1-sm" v-html="$t('partner.program-goal.content-2')">
        </h3>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
.divide
  border-bottom 0.03em solid #55677E
  margin-bottom 16px

.missionSection
  padding 0 16px 106px

.missionPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #0F0F0F

@media only screen and (min-width: 992px)
  .missionSection
    padding 70px 60px 76px 60px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class OurJoinMission extends Vue {

}
</script>
