<template>
  <div :class="$style.ourPartnersPanel">
    <div :class="$style.ourPartnersSection" class="app-width">
      <b-row class="mx-0 justify-content-between text-lg-left text-center">
        <b-col class="d-flex flex-wrap align-content-center p-0" lg="4" cols="12" order-lg="0"
               order="1">
          <h1>
            Our Partners
          </h1>
          <p class="text-6">
            We're looking for your help in providing security solutions to our communities
          </p>
        </b-col>
        <carousel
          class="col-lg-6 col-12 p-0 order-lg-1 order-0"
          :autoplay="partners.length > 1"
          :dots="false"
          autoWidth
          :margin="16"
          :items="3"
          :nav="false"
          :class="$style.ourPartners"
        >
          <template v-for="(items, idx) in partners">
            <div :key="idx" class="pl-2">
              <div :class="$style.box" v-for="partner in items"
                   class="d-flex justify-content-center align-items-center my-3" @click="goToPath(partner.path)">
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
  max-width 100% !important
  width auto !important
  max-height 60px !important

.box
  width 120px
  height 120px
  border-radius 16px
  background-color white
  padding 45px 15px
  transition box-shadow #fff
  z-index 1
  box-sizing border-box !important

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
  .ourPartners
    max-width 640px

  .logo
    max-height 80px !important

  .box
    width 190px
    height 190px

  .ourPartnersSection
    padding 55px 60px 57px 152px
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
        icon: require("~/assets/partners/group8.png"),
        path: "https://group8.co/",
      },
      {
        icon: require("@/assets/partners/vnsec.png"),
        path: "https://www.vnsecurity.net/",
      },
    ],
    [
      {
        icon: require("@/assets/partners/vng-cloud.png"),
        path: "https://www.vnsecurity.net/",
      },
      {
        icon: require("@/assets/partners/nus.png"),
        path: "https://www.nus.edu.sg",
      },
    ],
    [
      {
        icon: require("@/assets/partners/ecloud_valley.png"),
        path: "https://www.ecloudvalley.com/",
      },
      {
        icon: require("@/assets/partners/singtel.png"),
        path: "https://www.singtel.com",
      },
    ],
    [
      {
        icon: require("@/assets/partners/saobacdau.png"),
        path: "https://saobacdau.vn/",
      },
      {
        icon: require("@/assets/partners/vng.png"),
        path: "https://vng.com.vn/",
      },
    ],
    [
      {
        icon: require("@/assets/partners/vnisa.png"),
        path: "https://vnisa.org.vn/",
      },     {
        icon: require("@/assets/partners/mstar.png"),
        path: "https://mstarcorp.vn/",
      },
    ],
  ]

  goToPath(url: string) {
    window.open(url, '_blank');
  }
}
</script>
