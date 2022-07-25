<template>
  <div class="container-fluid body-1 p-0">
    <div :class="$style.container">
      <div :class="$style.section" class="app-width text-lg-left text-center">
        <div>
          <h1 class="h3-sm mb-3">{{ $t('whyUs.title') }}</h1>
        </div>
        <div class="d-flex justify-content-between mt-lg-5 col-12 p-0 row mx-0">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1 mb-3 pb-1" v-html="$t('whyUs.intro-1')">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1 mb-3 pb-1" v-html="$t('whyUs.intro-2')">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1" v-html="$t('whyUs.intro-3')">
          </div>
        </div>

        <div :class="$style.divide" class="mb-3 mt-5"></div>

        <b-row class="justify-content-lg-center mx-0 body-1 flex-wrap text-left mb-lg-0 mb-5">
          <b-col v-for="item in serviceContent" :key="item.icon"
                 class="d-flex flex-wrap justify-content-between mx-0 pr-lg-5 mt-5" cols="12" lg="4">
            <b-col class="p-0 mt-2 mt-lg-0" lg="12" cols="2">
              <img :src="item.icon" alt="Kitten" height="48" width="48">
            </b-col>
            <b-col class="mt-lg-2 mt-lg-3 pt-lg-1 p-0 pl-2 pl-lg-0" lg="12" cols=10>
              {{ item.text }}
            </b-col>
          </b-col>
        </b-row>
      </div>
    </div>

    <div :class="$style.analyticPanel">
      <div :class="$style.analyticSection" class="d-flex row app-width">
        <div v-for="item in analyticContent" :key="item.title"
             class="p-0 col-sm-12 col-12 col-lg-4 col-md-4 pr-5 pl-1 black-text">
          <h1 class="p-0 mb-2">
            {{ item.title }}
          </h1>
          <p v-html="item.text" class="m-0">
          </p>
          <i>
            {{ item.source }}
          </i>
        </div>
      </div>
    </div>

    <features-comparison :class="$style.comparison"/>

    <div :class="$style.testimonialsPanel">
      <div :class="$style.testimonialsSection" class="app-width">
        <testimonials/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Testimonials from "~/layouts/whyus/Testimonials.vue";
import FeaturesComparison from "~/layouts/whyus/FeaturesComparison.vue";

@Component({
  components: {
    FeaturesComparison,
    Testimonials
  }
})
export default class WhyUs extends Vue {

  get head() {
    return {
      title: 'Why Us'
    }
  }

  analyticContent: any[] = [
    {
      title: '800%',
      text: this.$t('whyUs.analytic-1'),
      source: '(source: CDNetworks)',
    },
    {
      title: '30,000',
      text: this.$t('whyUs.analytic-2'),
      source: '(source: Forbes)',
    },
    {
      title: '73%',
      text: this.$t('whyUs.analytic-3'),
      source: '(source: Thycotic.com)',
    },
  ]

  serviceContent: any [] = [
    {
      text: this.$t('whyUs.content-1'),
      icon: require("@/assets/icons/availability.png")
    },
    {
      text: this.$t('whyUs.content-2'),
      icon: require("@/assets/icons/folder.png")
    },
    {
      text: this.$t('whyUs.content-3'),
      icon: require("@/assets/icons/clock.png")
    },
    {
      text: this.$t('whyUs.content-4'),
      icon: require("@/assets/icons/chart.png")
    },
    {
      text: this.$t('whyUs.content-5'),
      icon: require("@/assets/icons/file.png")
    },
    {
      text: this.$t('whyUs.content-6'),
      icon: require("@/assets/icons/card.png")
    },
    {
      text: this.$t('whyUs.content-7'),
      icon: require("@/assets/icons/device.png")
    }
  ]
}
</script>

<style module lang="stylus">
@import "@/styles/config.styl"
.testimonialsSection
  padding 16px

.analyticSection
  padding 30px 27px

.section
  padding 48px 16px 24px 26px

.testimonialsPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #0F0F0F

.analyticPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color $brand-2

.divide
  width 100%
  border-bottom 0.03em solid #55677E
  margin-bottom 16px

.container
  background-repeat repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/why-us-bg.png")

@media only screen and (min-width: 992px)

  .testimonialsSection
    padding 71px 65px 104px 102px

  .analyticSection
    min-height 271px
    padding 35px 98px 63px 153px

  .section
    padding 119px 98px 104px 153px
    min-height 1081px

@media only screen and (max-width: 992px)
  .comparison
    display none
</style>
