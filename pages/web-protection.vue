<template>
  <div>
    <pricing-screen v-if="mobileScreen"/>
    <div v-else>
      <pricing-banner/>
      <pricing-details/>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PricingBanner from "~/layouts/pricing/PricingBanner.vue";
import PricingDetails from "~/layouts/pricing/PricingDetails.vue";
import PricingScreen from "~/layouts/pricing/screen_mobile_device/PricingScreen.vue";

@Component({
  components: {PricingScreen, PricingDetails, PricingBanner}
})
export default class PolarisCyberSecurityWebProtectionWaapPricing extends Vue {
  get head() {
    return {
      title: 'Web Protection Plans',
      meta: [
        {
          name: 'keywords',
          content: 'cyber security, cybersecurity, web protection, api protection, waap, polaris, web security, web firewall, application firewall'
        },
        {
          name: 'description',
          content: 'Polaris is your trusted cyber security partner providing web protection for businesses of all sizes and industries. Try our FREE Basic plan before deciding on an upgrade.'
        }
      ]
    }
  }

  get mobileScreen() {
    return window.screen.width < 992.0
  }

}
</script>
