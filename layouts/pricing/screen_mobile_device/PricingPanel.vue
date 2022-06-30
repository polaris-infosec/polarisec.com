<template>
  <div>
    <pricing-intro/>
    <pricing-contact-sales/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import PricingIntro from "~/layouts/pricing/screen_mobile_device/PricingIntro.vue";
import PricingContactSales from "~/layouts/pricing/screen_mobile_device/PricingContactSales.vue";

@Component({
  components: {PricingContactSales, PricingIntro}
})
export default class PricingPanel extends Vue{

}
</script>

<style module lang="stylus">

</style>
