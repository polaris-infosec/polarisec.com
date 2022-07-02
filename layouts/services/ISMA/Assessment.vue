<template>
  <div :class="$style.assessmentContainer">
    <div :class="$style.assessmentSection" class="app-width">
      <b-row class="p-0 m-0 d-flex justify-content-between">
        <b-col class="p-0 m-0 col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-0 order-1 text-lg-left text-center">
          <h2 class="mb-2 p-0 text-lg-left">Infosec Maturity Assessments</h2>
          <div class="mt-3" :class="$style.assessmentContent">
            <p class="text-6">
              Conduct a gap assessment to check the state of your cyber security preparedness. Polaris’ Infosec Maturity
              Assessment (ISMA) Methodology is designed to assess an organization's ability to protect and manage its
              sensitive, most valuable information assets, protect itself against cyber attack as well as to identify,
              manage, and minimize the impact if one should occur.
            </p>
          </div>
          <p-button class="mt-4" text="Request a Consultation" @click="onClick"/>
        </b-col>
        <b-col class="p-0 m-0 col-lg-3 col-12 justify-content-center align-items-center d-flex order-lg-1 order-0 mb-4">
          <img src="~/assets/images/services/ISMA/service-pattern.png" alt="" width="315" height="315"
               :class="$style.image"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang="stylus">
.assessmentContainer
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("../../../assets/images/services/ISMA/assessment-bg.png")

.assessmentSection
  padding 16px 16px 58px 16px

@media only screen and (max-width: 575px)
  .image
    width 280px
    height 280px

@media only screen and (min-width: 992px)
  .assessmentContent
    max-width 670px

  .assessmentSection
    padding 112px 182px 86px 152px
    min-height 513px
</style>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class Assessment extends Vue {
  onClick() {
    this.$router.push({path: '/contact'});
  }
}
</script>


