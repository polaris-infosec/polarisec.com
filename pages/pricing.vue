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
export default class Pricing extends Vue {

}
</script>
