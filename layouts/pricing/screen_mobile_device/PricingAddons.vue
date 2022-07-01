<template>
  <div :class="$style.container">
    <div :class="$style.section">
      <b-row class="mx-0">
        <h5 class="fw-800 p-0 mb-5">{{ addOns.title }}</h5>
      </b-row>
      <b-row class="mx-0" v-for="addOnsFeature in addOns.addOnsFeatures" :key="addOnsFeature.title">
        <p class="col-6 my-0 p-0 body-2 brand-2">{{ addOnsFeature.title }}</p>
        <div class="divide mt-4 mb-4"></div>
        <b-row class="mx-0" v-if="addOnsFeature.title !== 'Custom Pricing'">
          <h4 class="p-0 my-0 brand-2 mr-3">
            ${{ addOnsFeature.price }}
          </h4>
          <b-col class="p-0 caption-2">
            <p>per domain</p>
            <p v-if="isMonthly">per month</p>
            <p v-else>per year</p>
          </b-col>
        </b-row>
        <p-button class="col-12 mb-4" :show-icon="false"
                  :text="addOnsFeature.title === 'Custom Pricing' ? 'Request a Consultation' : 'Add-on'"
                  :gradient="2"></p-button>
      </b-row>
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
import PButton from "~/components/PButton.vue";

interface IAddOns {
  title: string,
  addOnsFeatures: IAddOnsFeature[]
}

interface IAddOnsFeature {
  title: string,
  price: number
}

@Component({
  components: {PButton}
})
export default class PricingAddons extends Vue {
  @Prop() addOns: IAddOns;
  @Prop() isMonthly: boolean;
}
</script>

