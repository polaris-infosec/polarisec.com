<template>
  <div :class="$style.missionPanel">
    <div :class="$style.missionSection" class="app-width justify-content-lg-start text-lg-left text-center">
      <b-row class="mx-0 justify-content-center justify-content-lg-start">
        <p class="col-12 body-2 mb-4 pb-2 p-0 brand-2 h5-sm">
          Our Joint Mission
        </p>
        <h2 class="col-11 m-0 p-0 text-lg-left h3-sm">
          “Collaborating to protect our community through <span class="brand-2">raising cybersecurity awareness and capabilities.</span>”
        </h2>
      </b-row>
      <div :class="$style.divide" class="mb-4 mt-5 col-12"></div>

      <b-row class="d-flex justify-content-center justify-content-lg-between">
        <h3 class="col-12 col-lg-2 mb-4 brand-2-sm h5-sm">
          Program Goals
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3 body-1-sm">
          Provide <b class="brand-2">reliable</b> and <b class="brand-2">knowledgeable</b> support to
          partners
          and customers
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3 body-1-sm">
          Expand <b class="brand-2">networks</b> and <b class="brand-2">capabilities</b> to grow service and
          value
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
