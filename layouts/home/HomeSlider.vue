<template>
  <div>
    <div :class="$style.sliderSection">
      <div class="app-width">
        <b-row class="mx-0 justify-content-center text-center align-items-center black-text"
               :class="$style.sliderContainer">
          <h2 class="my-0 mb-4 pb-3">Featured by:</h2>
          <carousel
            :class="$style.slider"
            autoplay
            class="col-12"
            :nav="false"
            :dots="false"
            :autoplayTimeout="3000"
            :margin="36"
            :items="mobileScreen ? 1 : 4"
          >
            <template v-for="(feature, idx) in listFeature">
              <div :key="feature.img" class="d-flex justify-content-center">
                <img height="68" :src="feature.img" :class="(idx === 5 && $style.asiaOneLogo)" alt="">
              </div>
            </template>

            <template #prev>
              <span class="carousel-control-prev-icon" :class="$style.prevButton" aria-hidden="true"></span>
            </template>
            <template #next>
              <span class="carousel-control-next-icon" aria-hidden="true" :class="$style.nextButton"></span>
            </template>
          </carousel>
        </b-row>
      </div>
    </div>
    <div class="container-fluid p-0" :class="$style.container">
      <div class="app-width" :class="$style.seeItSection">
        <b-row class="mx-0 justify-content-center justify-content-lg-start" :class="$style.seeItContainer">
          <b-col class="p-0 text-lg-left text-center align-items-center" lg="6" cols="12">
            <h2 class="my-0 h4-sm text-lg-left">See it in action</h2>
            <h5 :class="$style.actionText">Request a free demo today and stay ahead of <br> the cyberthreat evolution.
            </h5>
            <p-button text="Request a Consultation" @click="onClick"/>
          </b-col>
          <div class="px-0 pl-5" :class="$style.dashboardImg">
            <img src="@/assets/images/home/site-dashboard.png" class="mx-0 mt-lg-0 mt-5" alt="">
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.slider
  :global(.owl-item + .active)
    width initial !important

  :global(.owl-stage)
    display flex !important
    align-items center !important

.asiaOneLogo
  width 120px !important
  height 120px !important


.seeItSection
  padding 136px 16px 0

.sliderContainer
  padding 41px 60px 71px 60px

.sliderSection
  background-color $brand-2

.nextButton
  position absolute
  top 50%
  right -30px
  transform translateY(-50%)

.prevButton
  position absolute
  left -30px
  top 50%
  transform translateY(-50%)

.container
  background-image url("@/assets/images/home/feature-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.seeItContainer
  padding 37px 20px 0
  border-top-left-radius 10px
  border-top-right-radius 10px
  background-image url("@/assets/images/home/see-it-in-action.png")
  background-position center
  background-repeat no-repeat
  background-size cover
  overflow hidden !important
  position relative
  min-height 520px

.actionText
  margin-top 19px
  margin-bottom 39px
  font-weight 500

.dashboardImg
  position absolute
  bottom 0
  right 0

  img
    border-top-left-radius 12px
    margin-right 10px
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;

@media only screen and (max-width: 767px)
  .dashboardImg
    max-width 402px
    max-height 261px
    position initial

  .seeItContainer
    min-height 520px

@media only screen and (min-width: 992px)
  .seeItSection
    padding 122px 60px 0

  .seeItContainer
    padding 67px 0 59px 60px

  .bodyContainer
    padding 90px 60px 0

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

const carousel = require('vue-owl-carousel');

@Component({
  components: {
    PButton,
    carousel,
  }
})
export default class HomeSlider extends Vue {
  get mobileScreen() {
    return window.screen.width < 992.0
  }

  get listFeature() {
    return [
      {img: require('@/assets/images/home/gartner-peerinsights.png'),},
      {img: require('@/assets/images/home/the-business-time.png'),},
      {img: require('@/assets/images/home/yahoo.png'),},
      {img: require('@/assets/images/home/kaspersky.png'),},
      {img: require('@/assets/images/home/NCSC.png'),},
      {img: require('@/assets/images/home/asiaone.png'),},
      {img: require('@/assets/images/home/channelnewsasia.png'),},
    ];
  }

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
