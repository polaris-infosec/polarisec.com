<template>
  <div class="container-fluid p-0">
    <div :class="$style.container">
      <h2 :class="$style.sliderTitle" class="text-sm-center">Featured by:</h2>
      <carousel :class="$style.sliderContainer"
                autoplay
                loop
                autoWidth
                :nav="false"
                :dots="false"
                :margin="60">
        <template v-for="feature in listFeature">
          <div :key="feature.img" :class="$style.sliderItem">
            <img height="48" :src="feature.img" alt="">
          </div>
        </template>
      </carousel>
      <div :class="$style.seeItContainer">
        <h2>See it in action</h2>
        <h5 :class="$style.actionText">Request a free demo today and stay ahead of <br> the cyberthreat evolution.</h5>
        <p-button text="Request a Demo" @click="onClick"/>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-image url("@/assets/images/home/feature-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding 90px 60px 0

  .sliderTitle
    margin-bottom 65px

.sliderItem
  padding 10px 22px
  background-color: $brand-2
  border-radius 8px

.sliderContainer
  padding-bottom: 115px

.seeItContainer
  padding 84px 0 67px 60px
  border-top-left-radius 10px
  border-top-right-radius 10px
  background-image url("@/assets/images/home/see-it-in-action.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.actionText
  margin-top 19px
  margin-bottom: 39px;
  font-weight 500

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

  get listFeature() {
    return [
      {img: require('@/assets/images/home/gartner-peerinsights.png'),},
      {img: require('@/assets/images/home/the-business-time.png'),},
      {img: require('@/assets/images/home/yahoo.png'),},
      {img: require('@/assets/images/home/asiaone.png'),},
      {img: require('@/assets/images/home/kaspersky.png'),},
      {img: require('@/assets/images/home/NCSC.png'),},
      {img: require('@/assets/images/home/channelnewsasia.png'),},
    ];
  }

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
