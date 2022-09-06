<template>
  <div class="container-fluid p-0">
    <h2 class="mb-4">{{ $t('whyUs.testimonials.text') }}</h2>
    <carousel class="col-12"
              :nav="false"
              autoplay
              :items="itemsQuantity"
              :class="$style.testimonials"
    >
      <template v-for="item in testimonialsContents">
        <div class="d-flex justify-content-center">
          <div :class="$style.testimonialsBox" :key="item.text">
            <b-avatar variant="info" :size="50" :src="item.icon" :class="$style.logo"></b-avatar>
            <p class="body-2 m-0">
              {{ item.text }}
            </p>
            <p class="body-1 m-0 text-capitalize" :class="$style.name">
              {{ item.name }}
            </p>
            <p :class="$style.role">
              {{ item.role }}
            </p>
          </div>
        </div>
      </template>
      <template #prev v-if="!mobileScreenResolution">
        <span class="carousel-control-prev-icon" :class="$style.prevButton" aria-hidden="true"></span>
      </template>
      <template #next v-if="!mobileScreenResolution">
        <span class="carousel-control-next-icon" aria-hidden="true" :class="$style.nextButton"></span>
      </template>
    </carousel>
  </div>
</template>

<style module lang="stylus">
@import "@/styles/config.styl"
.nextButton
  position absolute
  right -20px
  top 40%

.prevButton
  position absolute
  left -20px
  top 40%

.testimonials
  position relative

:global(.owl-dots)
  margin-top 45px !important

.sliderItem
  padding 10px 22px
  background-color: $brand-2
  border-radius 8px

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

.sliderContainer
  padding-bottom 120px

@media only screen and (max-width: 992px)
  .testimonialsBox
    background-color $secondary-1
    margin 0 10px
</style>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

const carousel = require('vue-owl-carousel');

@Component({
  components: {carousel}
})
export default class Testimonials extends Vue {
  testimonialsContents: any[] = [
    {
      text: this.$t('whyUs.testimonials.testimonial-1.text').toString(),
      name: this.$t('whyUs.testimonials.testimonial-1.name'),
      role: this.$t('whyUs.testimonials.testimonial-1.role'),
      icon: require('@/assets/icons/vng.png'),
    },
    {
      text: this.$t('whyUs.testimonials.testimonial-2.text'),
      name: this.$t('whyUs.testimonials.testimonial-2.name'),
      role: this.$t('whyUs.testimonials.testimonial-2.role'),
      icon: require('@/assets/icons/sbd.png'),
    },
    {
      text: this.$t('whyUs.testimonials.testimonial-3.text'),
      name: this.$t('whyUs.testimonials.testimonial-3.name'),
      role: this.$t('whyUs.testimonials.testimonial-3.role'),
      icon: require('@/assets/icons/nus.png'),
    },
    {
      text: this.$t('whyUs.testimonials.testimonial-4.text'),
      name: this.$t('whyUs.testimonials.testimonial-4.name'),
      role: this.$t('whyUs.testimonials.testimonial-4.role'),
      icon: require('@/assets/icons/azdigi.png'),
    },
  ]

  get mobileScreenResolution() {
    return window.screen.width < 992.0;
  }

  get itemsQuantity() {
    return this.mobileScreenResolution ? 1 : 3;
  }
}
</script>

