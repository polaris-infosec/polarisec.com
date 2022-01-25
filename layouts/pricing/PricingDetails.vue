<template>
  <div class="container-fluid px-0">
    <div :class="$style.container" class="row mx-0">
      <div class="col-sm-2 px-0">
        <ol style="list-style-type: none" class="pl-0">
          <li class="active"><nuxt-link :to="{path: '/pricing', hash: '#overview'}">Overview</nuxt-link></li>
          <li><nuxt-link :to="{path: '/pricing', hash: '#add-on'}">Add-ons</nuxt-link></li>
          <li><nuxt-link :to="{path: '/pricing', hash: '#faq'}">FAQs</nuxt-link></li>
        </ol>
      </div>
      <div class="col-sm-10">
        <pricing-overview id="overview" :is-monthly-type="isMonthlyType"/>
      </div>
    </div>
    <pricing-add-ons id="add-on" :is-monthly-type="isMonthlyType"/>
    <pricing-f-a-q id="faq"/>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-1
  padding 70px 61px 0 60px

  li
    margin-bottom 10px

    &:active
      color $text-8

  li a
    color #D3DCE6 !important

.addOnContainer
  background: $background-2

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import PricingOverview from "~/layouts/pricing/PricingOverview.vue";
import PricingAddOns from "~/layouts/pricing/PricingAddOns.vue";
import PricingFAQ from "~/layouts/pricing/PricingFAQ.vue";

@Component({
  components: {PricingFAQ, PricingAddOns, PricingOverview, PButton}
})
export default class PricingDetails extends Vue {

  isMonthlyType: boolean = true;

  created() {
    this.$nuxt.$on('update', (isMonthly: boolean) => {
      this.isMonthlyType = isMonthly;
    });
  }

}
</script>
