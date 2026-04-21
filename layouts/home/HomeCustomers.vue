<template>
  <div :class="$style.section">
    <div class="app-width">
      <div class="text-center" :class="$style.bodyContainer">
        <h2 class="my-0 mb-5">{{ $t('home.customers.title') }}</h2>
        <carousel
          :class="$style.carousel"
          autoplay
          loop
          :nav="false"
          :dots="false"
          :autoplayTimeout="2500"
          :margin="24"
          :items="mobileScreen ? 2 : 5"
        >
          <template v-for="customer in customers">
            <div :key="customer.name" class="d-flex justify-content-center">
              <div :class="$style.logoWrapper">
                <img :src="customer.img" :alt="customer.name" :class="$style.logo">
              </div>
            </div>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.section
  background-color $background-1

.bodyContainer
  padding 64px 16px 72px

  h2
    color $text-8

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 80px 60px 88px

.carousel
  :global(.owl-stage)
    display flex !important
    align-items center !important

.logoWrapper
  display flex
  justify-content center
  align-items center
  padding 20px
  background-color #141414
  border-radius 12px
  width 240px
  height 140px
  transition opacity 0.2s ease

  &:hover
    opacity 0.85

.logo
  max-width 200px
  max-height 105px
  width auto
  height auto
  object-fit contain
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

const carousel = require('vue-owl-carousel');

@Component({
  components: {carousel}
})
export default class HomeCustomers extends Vue {
  get mobileScreen() {
    return window.screen.width < 992.0
  }

  get customers() {
    return [
      {name: 'GZone', img: require('@/assets/images/customer/gzone.png')},
      {name: 'J&T Express', img: require('@/assets/images/customer/j&t.png')},
      {name: 'NEC Vietnam', img: require('@/assets/images/customer/nec-vn.png')},
      {name: 'Pizza Hut', img: require('@/assets/images/customer/pizza-hut.png')},
      {name: 'TH True Milk', img: require('@/assets/images/customer/th-true-milk.png')},
      {name: 'VTC', img: require('@/assets/images/customer/vtc.png')},
      {name: 'CIC', img: require('@/assets/images/customer/cic.png')},
      {name: 'Blockchain Vietnam', img: require('@/assets/images/customer/blockchain-vn.png')},
      {name: 'NCSC', img: require('@/assets/images/customer/ncsc.png')},
      {name: 'Techfest', img: require('@/assets/images/customer/techfest.png')},
      {name: 'VNG', img: require('@/assets/images/customer/vng.png')},
    ];
  }
}
</script>
