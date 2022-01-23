<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="#0F0F0F"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <h1>Testimonials</h1>
      <b-carousel-slide
      >
        <div class="d-flex justify-content-between mb-5">
          <div :class="$style.testimonialsBox" v-for="item in testimonialsContent" :key="item.item">
            <b-avatar variant="info" :size="50" :src="item.icon" :class="$style.logo"></b-avatar>
            <p class="body-2 m-0">
              {{ item.text }}
            </p>
            <p class="body-1 m-0" :class="$style.name">
              {{ item.name }}
            </p>
            <p :class="$style.role">
              {{ item.role }}
            </p>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>


<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

const carousel = require('vue-owl-carousel');

@Component({})
export default class Testimonials extends Vue {
  slide: number = 0;
  sliding: boolean = false;

  onSlideStart() {
    this.sliding = true
  }

  onSlideEnd() {
    this.sliding = false
  }

  testimonialsContent: any[] = [
    {
      text: `“Polaris is being used to protect work-from-home services for more than 3,500 employees and collaborators of
              VNG. The system is developed by leading experts in Vietnam and provides features that are rarely found in
              other products.”`,
      name: 'Mr. V.D.C',
      role: 'HEAD OF SYSTEM OPERATIONS, VNG',
      icon: require('@/assets/icons/vng.png'),
    },
    {
      text: `“Currently, Polaris is being used on Sao Bac Dau’s cloud system to meet load capacity needs and provide security, and in features for important public system applications. ”`,
      name: 'Mr. N.S.T',
      role: 'CHIEF EXCECUTIVE OFFICER, SAO BAC DAU (SOUTHERN BRANCH)',
      icon: require('@/assets/icons/sbd.png'),
    },
    {
      text: `“Polaris is a next-generation application security solution that uses machine learning to automate access analysis to accurately detect sophisticated attack patterns. Polaris is partnered with BGP.net to deploy to more than 9 locations globally.”`,
      name: '',
      role: 'Business Department, National University of Singapore, ICE71 Competition review',
      icon: require('@/assets/icons/nus.png'),
    },
  ]

}
</script>

<style module lang="stylus">
:global(.carousel-item)
  margin-right 0 !important

:global(.carousel-caption)
  width 100% !important
  position unset !important

.logo
  margin-bottom 25px

.name
  font-weight 800 !important
  margin-top 20px !important

.role
  font-size 14px
  line-height 21px
  font-weight 400

.testimonialsBox
  width 348px
  height 412px
  border-radius 12px
  background-color #1B1C1D
  padding 30px 25px 49px 25px
  text-align left
</style>
