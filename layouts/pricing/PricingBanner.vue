<template>
  <div class="container-fluid px-0">
    <div :class="$style.bannerContainer">
      <div :class="$style.bannerSection" class="row app-width">
        <b-row class="mx-0 flex-grow-1">
          <b-col cols="3" class="p-0">
            <h1 v-html="$t('pricing.title')"></h1>
            <div :class="$style.pricingSubTitle" class="body-1" v-html="$t('pricing.content')"></div>
            <p-button v-html="$t('pricing.consultation')" @click="onClick"/>
          </b-col>
          <b-col class="p-0 d-flex justify-content-end" cols="9">
            <img src="@/assets/images/pricing/basic.png" width="275" height="237">
            <img src="@/assets/images/pricing/standard.png" class="ml-4" width="275" height="237">
            <img src="@/assets/images/pricing/professional.png" class="ml-4" width="275" height="237">
          </b-col>
        </b-row>
      </div>
    </div>

    <div :class="$style.contactSaleContainer">
      <div :class="$style.contactSaleSection"
           class="d-flex justify-content-between align-items-center app-width">
        <div>
          <h4 class="mb-1" v-html="$t('pricing.polaris-for-enterprises.title')"></h4>
          <div class="body-2" v-html="$t('pricing.polaris-for-enterprises.content')"></div>
        </div>
        <nuxt-link :to="localePath('/contact')" >
          <div :class="$style.contact" v-html ="$t('pricing.contact-us')">
            <span class="ml-2"><img src="@/assets/icons/call_made.png" alt="" width="24"
                                                  height="24"></span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.bannerSection
  padding 112px 60px 118px 152px
  align-items center

.bannerContainer
  background-image url("@/assets/images/pricing/pricing-banner-background.png")
  background-color: $background-1
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1
    color $text-8

.pricingSubTitle
  margin-top 20px
  margin-bottom 50px
  color $text-8

.pricingContainer
  background-image url("@/assets/images/pricing/pricing-banner.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height 286px

.contactSaleSection
  padding 27px 64px 20px 59px
  color $text-1

.contactSaleContainer
  background-color: $brand-2

.contact
  font-size 16px
  line-height 21px
  font-weight 600
  color $text-1

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class CompanyBanner extends Vue {

  onClick() {
    return this.$router.push({path: this.localePath('/contact')})
  }

}
</script>
