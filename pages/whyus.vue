<template>
  <div class="container-fluid body-1 p-0">
    <div :class="$style.container">
      <div :class="$style.section" class="app-width text-lg-left text-center">
        <div>
          <h1 class="h3-sm mb-3">Why us</h1>
        </div>
        <div class="d-flex justify-content-between mt-lg-5 col-12 p-0 row mx-0">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1 mb-3 pb-1">
            Polaris is your <span class="highlight-text">premier local solution</span> with local support, dedicated to
            providing users with a first rate security service.
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1 mb-3 pb-1">
            We understand that cyber security can sometimes be overly complex and seek to simplify the process, <span
            class="highlight-text">making it accessible to anyone, anywhere.</span>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-lg-5 pl-lg-1">
            We’re <span class="highlight-text">scalable at every level</span> from the first time cyber user to the
            seasoned veteran, addressing the concerns of small businesses and enterprises alike.
          </div>
        </div>

        <div :class="$style.divide" class="mb-3 mt-5"></div>

        <b-row class="justify-content-lg-center mx-0 body-1 flex-wrap text-left mb-lg-0 mb-5">
          <b-col v-for="item in serviceContent" :key="item.icon"
                 class="d-flex flex-wrap justify-content-between mx-0 pr-lg-5 mt-5" cols="12" lg="4">
            <b-col class="p-0 mt-2 mt-lg-0" lg="12" cols="2">
              <img :src="item.icon" alt="Kitten" height="48" width="48">
            </b-col>
            <b-col class="mt-lg-2 p-0 pl-2 pl-lg-0" lg="12" cols=10>
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
      text: 'In 2021, Web Application attacks are up <b>800%</b>.',
      source: '(source: CDNetworks)',
    },
    {
      title: '30,000',
      text: 'On average, <b>30,000</b> new websites are hacked a day.',
      source: '(source: Forbes)',
    },
    {
      title: '73%',
      text: '<b>73%</b> of black hat hackers say traditional firewall and antivirus security solutions are now obsolete.',
      source: '(source: Thycotic.com)',
    },
  ]

  serviceContent: any [] = [
    {
      text: '24/7 premium support to ensure your business operations are always up and running',
      icon: require("@/assets/icons/availability.png")
    },
    {
      text: 'The ability to manage services on your behalf so you don’t ever have to think about it',
      icon: require("@/assets/icons/folder.png")
    },
    {
      text: 'Real-time threat management capabilities to ensure timely and decisive response to unwanted actions',
      icon: require("@/assets/icons/clock.png")
    },
    {
      text: 'Growing intelligence capabilities to provide even greater insight into your business’ web presence',
      icon: require("@/assets/icons/chart.png")
    },
    {
      text: 'Monitor your entire organization via one simple dashboard',
      icon: require("@/assets/icons/file.png")
    },
    {
      text: 'Flexible payment options and terms - monthly or annual, pay via card or bank transfer',
      icon: require("@/assets/icons/card.png")
    },
    {
      text: 'Try our free version for as long as you like before deciding on any upgrade',
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
