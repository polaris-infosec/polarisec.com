<template>
  <div class="container-fluid px-0">
    <div :class="$style.container">
      <div :class="$style.section" class="row app-width">
        <div class="col-sm-2 px-0">
          <ol style="list-style-type: none" class="pl-0">
            <li class="active">
              <nuxt-link :to="{path: localePath('/web-protection'), hash: '#overview'}"
                         v-html="$t('pricing.tags.overview')"></nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{path: localePath('/web-protection'), hash: '#add-on'}"
                         v-html="$t('pricing.tags.add-ons')"></nuxt-link>
            </li>
            <li>
              <a
                href="https://support.polarisec.com/portal/en/kb/polaris-kb/frequently-asked-questions-faq">
                FAQs
              </a>
            </li>
          </ol>
        </div>
        <div class="col-sm-10">
          <pricing-overview id="overview" :is-monthly-type="isMonthlyType" :is-expand-all="isExpandAll"/>
        </div>
      </div>
    </div>
    <pricing-add-ons id="add-on" :is-monthly-type="isMonthlyType" :is-expand-all="isExpandAll"/>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.section
  padding 70px 61px 0 60px

  li
    margin-bottom 10px

    &:active
      color $text-8

  li a
    color #D3DCE6 !important

.container
  background-color: $background-1

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
  isExpandAll: boolean = true;

  created() {
    this.$nuxt.$on('update-type', (isMonthly: boolean) => {
      this.isMonthlyType = isMonthly;
    });
    this.$nuxt.$on('update-expand', (isExpandAll: boolean) => {
      this.isExpandAll = isExpandAll;
    });
  }

}
</script>
