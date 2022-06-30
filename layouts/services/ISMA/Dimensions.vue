<template>
  <div :class="$style.dimensionsContainer">
    <div :class="$style.dimensionsSection" class="app-width mobile-container">
      <p class="text-9 mb-5 text-lg-left text-center p-lg-0 px-4">The 6 DIMENSIONS of the ISMA</p>
      <b-row class="p-0 m-0 flex-column" :class="$style.dimensionCard">
        <b-col v-for="item in dimensions" :key="item.title" class="p-0 m-0 col-lg-6 col-md-12 col-sm-12 col-xs-12 mr-4 mb-5 ">
          <b-row class="p-0 m-0">
            <b-col class="p-0 m-0 mr-3 col-2 d-flex justify-content-center align-items-center">
              <img :src="item.step" alt="" width="80" height="80">
            </b-col>
            <b-col class="p-0 m-0 col-lg-8 col-xs-11 col-9" :class="$style.dimensionInfo">
              <p :class="$style.dimensionTitle" class="text-center my-0">
                {{ item.title }}
              </p>
              <p :class="$style.dimensionContent" class="my-0">
                {{ item.content }}
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<style module lang="stylus">
.dimensionsSection
  padding 16px

.dimensionsContainer
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("../../../assets/images/services/ISMA/dimension-bg.png")

.dimensionTitle
  background #374B61
  border-radius 4px 4px 4px 0px
  height 24px
  margin-bottom 11px !important

.dimensionContent
  font-family 'Inter'
  font-style normal
  font-weight 400
  font-size 13px
  line-height 21px

@media only screen and (min-width: 993px)
  .dimensionInfo
    max-width 350px

  .dimensionsSection
    padding 112px 182px 86px 152px

  .dimensionCard
    max-height 500px

</style>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

@Component({})
export default class Dimensions extends Vue {
  dimensions: any[] = [
    {
      title: "Leadership & Governance",
      content: "Assessing leadership and policy for due diligence, ownership, and effective management of risk",
      step: require('~/assets/images/services/ISMA/dimensions/step1.png')
    },
    {
      title: "Information Risk Management",
      content: "The approach to achieving comprehensive and effective risk management of information throughout the organisation and its delivery and supply partners",
      step: require('~/assets/images/services/ISMA/dimensions/step2.png')
    }, {
      title: "Operations & Technology",
      content: "The level of control measures implemented to address identified risks and minimise the impact of compromise",
      step: require('~/assets/images/services/ISMA/dimensions/step3.png')
    },
    {
      title: "Human Factors",
      content: "The level of security focused culture that empowers and ensures the right people, skills, culture and knowledge",
      step: require('~/assets/images/services/ISMA/dimensions/step4.png')
    },
    {
      title: "Business Continuity & Crisis Management",
      content: "Preparations for a security event and ability to prevent or minimise the impact through successful crisis and stakeholder management",
      step: require('~/assets/images/services/ISMA/dimensions/step5.png')
    },
    {
      title: "Legal & Compliance",
      content: "Regulatory and international certification standards",
      step: require('~/assets/images/services/ISMA/dimensions/step6.png')
    },
  ]
}
</script>


