<template>
  <div>
    <pricing-banner/>
    <pricing-details/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PricingBanner from "~/layouts/pricing/PricingBanner.vue";
import PricingDetails from "~/layouts/pricing/PricingDetails.vue";

@Component({
  components: {PricingDetails, PricingBanner}
})
export default class PolarisCyberSecurityWebProtectionWaapPricing extends Vue {
  get head() {
    return {
      title: 'Web Protection Products Pricing (Application & API  - WAAP) | Polaris Cyber Security',
      meta: [
        {
          name: 'cybersecurity'
        },
        {
          name: 'cyber security'
        }, {
          name: 'web protection'
        }, {
          name: 'api protection'
        }, {
          name: 'waap'
        }, {
          name: 'polaris'
        }, {
          name: 'web security'
        }, {
          name: 'web firewall'
        }, {
          name: 'application firewall'
        }, {
          name: 'ddos protection'
        },
      ]
    }
  }
}
</script>
