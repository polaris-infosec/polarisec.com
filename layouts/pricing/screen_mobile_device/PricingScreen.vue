<template>
  <div>
    <pricing-panel/>
    <pricing-detail/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import PricingPanel from "~/layouts/pricing/screen_mobile_device/PricingPanel.vue";
import PricingDetail from "~/layouts/pricing/screen_mobile_device/PricingDetail.vue";

@Component({
  components: {PricingDetail, PricingPanel}
})
export default class PricingScreen extends Vue{

}
</script>

<style module lang="stylus">

</style>
