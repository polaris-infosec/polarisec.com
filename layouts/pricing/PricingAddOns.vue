<template>
  <div class="container-fluid px-0">
    <div :class="$style.container">
      <div :class="$style.section" class="row app-width">
        <div class="col-sm-2"/>
        <div class="col-sm-10">
          <h2 class="color-text-8 ml-4" v-html="$t('pricing.add-ons.title')"></h2>
          <div class="body-2 color-text-8 ml-4" v-html="$t('pricing.add-ons.content')"></div>
          <pricing-add-ons-table :is-monthly-type="isMonthlyType"/>
          <h5 class="color-text-6 ml-4 font-weight-bold"
              v-html="$t('pricing.managed-security-services-add-on.title')"></h5>
          <div class="body-2 ml-4 color-text-6" v-html="$t('pricing.managed-security-services-add-on.content')"></div>
          <pricing-add-ons-service :is-monthly-type="isMonthlyType" :is-expand-all="isExpandAll"/>
          <div class="row">
            <div class="col mr-4">
              <h5 class="color-text-6 mx-4 font-weight-bold"
                  v-html="$t('pricing.threat-intelligence-add-on.title')"></h5>
              <div class="body-2 color-text-6 mx-4" v-html="$t('pricing.threat-intelligence-add-on.content')">
              </div>
              <pricing-add-ons-threat-intelligence :is-monthly-type="isMonthlyType"/>
            </div>
            <div class="col ml-4">
              <h5 class="color-text-6 mx-4 font-weight-bold" v-html="$t('pricing.zero-trust-access-add-on.title')"></h5>
              <div class="body-2 color-text-6 mx-4" v-html="$t('pricing.zero-trust-access-add-on.content')">
              </div>
              <pricing-add-ons-zero-trust-access :is-monthly-type="isMonthlyType"/>
            </div>
          </div>
        </div>
        <div class="d-flex col-12 justify-content-center">
          <p class="mt-5">
            {{ $t('pricing.article.content') }}
            <nuxt-link class="brand-2" :to="localePath('/web-protection-platform')"> {{ $t('pricing.article.link') }} ->
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.section
  padding 70px 60px

  h5
    margin-top 70px
    margin-bottom 13px

.container
  background $background-2

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PricingAddOnsTable from "~/layouts/pricing/PricingAddOnsTable.vue";
import PricingAddOnsService from "~/layouts/pricing/PricingAddOnsService.vue";
import PricingAddOnsThreatIntelligence from "~/layouts/pricing/PricingAddOnsThreatIntelligence.vue";
import PricingAddOnsZeroTrustAccess from "~/layouts/pricing/PricingAddOnsZeroTrustAccess.vue";

@Component({
  components: {PricingAddOnsZeroTrustAccess, PricingAddOnsThreatIntelligence, PricingAddOnsService, PricingAddOnsTable}
})
export default class PricingAddOns extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;
  @Prop({default: true, type: Boolean, required: true}) isExpandAll: boolean;

}
</script>
