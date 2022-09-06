<template>
  <div :class="$style.container" class="container-fluid">
    <div :class="$style.section">
      <h5>{{ pricing.title }}</h5>
      <b-row class="mx-0 flex-column flex-grow-1">
        <h4 class="p-0 my-0 brand-2 mr-3">
          ${{ pricing.price }}
        </h4>
        <b-col class="p-0 caption-2">
          <p v-html="$t('pricing.per-domains')"></p>
          <p v-if="isMonthly" v-html="$t('pricing.per-month')"></p>
          <p v-else v-html="$t('pricing.per-year')"></p>
        </b-col>
      </b-row>
      <div class="divide flex-grow-1 mt-4 mb-4"></div>
      <b-col class="p-0" cols="12" v-for="(feature, idx) in pricing.features" :key="idx">
        <p class="my-0 body-2 brand-2 mt-4">{{ feature.title }}</p>
        <b-row class="mx-0 justify-content-between align-items-center" v-for="item in feature.subFeatures" :key="item">
          <span class="col-6 p-0 my-0 caption mt-2" v-html="item"></span>
          <div>
            <img src="@/assets/images/pricing/done-icon.png" width="18" height="18">
          </div>
        </b-row>
      </b-col>
    </div>
  </div>
</template>
<style module lang="stylus">
.section
  padding 24px

.container
  background-color #333333
</style>
<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";

export interface IPricing {
  title: string,
  price: number,
  features: IFeature[]
}

export interface IFeature {
  title: string,
  subFeatures: string [],
}

@Component({})
export default class PricingTable extends Vue {
  @Prop() pricing: IPricing;
  @Prop() isMonthly: boolean;

}
</script>


