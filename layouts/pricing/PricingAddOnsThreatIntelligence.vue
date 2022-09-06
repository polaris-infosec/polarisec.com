<template>
    <div :class="$style.addonContainer" class="row">
      <div class="col-sm-4 pl-0">
        <div :class="$style.title" v-html="$t('pricing.plans.standard-professional')"></div>
        <div class="d-inline-flex justify-content-center align-items-center">
          <h4 :class="$style.price">{{isMonthlyType ? '$87' : "$1043"}}</h4>
          <div :class="$style.priceDetail">
            <div v-html="$t('pricing.per-domains')"></div>
            <div>{{ isMonthlyType ? $t('pricing.per-month') : $t('pricing.per-year') }}</div>
          </div>
        </div>
        <p-button :class="$style.btn" :show-icon="false" :gradient="2" v-html="$t('pricing.custom.selectPlan')" @click="onClick"/>
      </div>
      <div class="col" :class="$style.detailContainer">
        <template v-for="(item, idx) in threatIntelligenceAddOns">
          <div :key="idx">
            <div :class="$style.itemTitle">{{item}}</div>
            <hr :class="$style.hr">
          </div>
        </template>
      </div>
      <div :class="$style.comingsoon" class="col-sm-12 px-0" v-html="$t('pricing.note.note-1')"></div>
    </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.addonContainer
  padding 24px
  border-radius 12px
  background linear-gradient(0deg, #1B1C1D, #1B1C1D)
  margin-top 35px

.price
  color $text-8
  margin-bottom 0
  margin-right: 10px

.priceDetail
  font-size 12px
  line-height 16px
  color $text-6

.detailContainer
  padding-left 35px
  padding-right 26px

.btn
  width 100%
  margin-top 15px
  font-weight 500 !important
  font-size 14px !important
  line-height 18px !important

.title
  font-size 20px
  line-height 32px
  font-weight 700
  color $text-8
  margin-bottom 15px

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 10px

.itemTitle
  font-size 14px
  line-height 22px
  font-weight 400
  color $text-5

.hr
  margin-top 7px
  margin-bottom 17px
  border: 0.5px solid $text-6

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingAddOnsThreatIntelligence extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;

  get threatIntelligenceAddOns() {
    return [
      this.$t('pricing.threat-intelligence-add-on.sub-option-1').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-2').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-3').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-4').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-5').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-6').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-7').toString(),
      this.$t('pricing.threat-intelligence-add-on.sub-option-8').toString(),
    ];
  }

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }

}
</script>
