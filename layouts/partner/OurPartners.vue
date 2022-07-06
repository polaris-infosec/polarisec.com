<template>
  <div :class="$style.ourPartnersPanel">
    <div :class="$style.ourPartnersSection" class="app-width">
      <b-row class="mx-0 justify-content-between text-lg-left text-center">
        <b-col class="p-0 d-flex flex-wrap justify-content-center align-content-center" lg="4" cols="12" order-lg="0" order="1">
          <h1>
            Our Partners
          </h1>
          <p class="text-6 col-10 p-0">
            We need your help in providing security solutions
            to our communities
          </p>
        </b-col>
        <carousel
          class="col-lg-7 col-12 p-0 order-lg-1 order-0"
          :autoplay="partners.length > 1"
          :dots="false"
          autoWidth
          :margin="15"
          :items="1"
          :nav="false"
          :class="$style.ourPartners"
        >
          <template v-for="(items, idx) in partners">
            <div :key="idx" class="pl-2">
              <div :class="$style.box" v-for="partner in items"
                   class="d-flex justify-content-center align-items-center my-3">
                <img :class="$style.logo" alt="" :src="partner.icon"/>
              </div>
            </div>
          </template>
        </carousel>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
.logo
  border-radius 50%
  width 60px !important
  height 60px !important

.nextButton
  position absolute
  right -33px
  top 150px

.prevButton
  position absolute
  left -33px
  top 150px

.ourPartners
  position relative

.box
  width 120px
  height 120px
  border-radius 16px
  background-color white
  padding 45px 15px
  transition box-shadow #fff
  z-index 1

.box:hover
  cursor pointer
  background linear-gradient(142.19deg, #0D0159 1.08%, #8BDFAF 99.93%)
  box-shadow 0 0 1px 3px lightslategray

.ourPartnersSection
  padding 16px

.ourPartnersPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #060606
  background-image url("assets/background/partner-bg.png")

@media only screen and (min-width: 992px)
  .logo
    width 86px !important
    height 86px !important

  .box
    width 190px
    height 190px
  .ourPartnersSection
    padding 55px 0px 57px 152px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

const carousel = require('vue-owl-carousel');

@Component({
  components: {
    carousel
  }
})
export default class ContactSale extends Vue {

  partners: any [] = [
    [
      {
        icon: require("@/assets/partners/vng.png"),
        text: 'VNG'
      },
      {
        icon: require("~/assets/partners/group8.png"),
        text: 'Group 8'
      },
    ],
    [
      {
        icon: require("@/assets/icons/sbd.png"),
        text: 'Sao Bac Dau'
      },
      {
        icon: require("@/assets/partners/vnsec.png"),
        text: 'VNSEC'
      },
    ],
    [
      {
        icon: require("@/assets/partners/cylon.png"),
        text: 'CYLON'
      },
      {
        icon: require("@/assets/partners/ice71.png"),
        text: 'ICE71'
      },
    ],
  ]
}
</script>
