<template>
  <div :class="$style.addonContainer" class="row">
    <div class="col-sm-4 pl-0">
      <div :class="$style.title" v-html="$t('pricing.plans.standard-professional')"></div>
      <div class="d-inline-flex justify-content-center align-items-center">
        <h4 :class="$style.price">{{ isMonthlyType ? '$4' : "$43" }}</h4>
        <div :class="$style.priceDetail">
          <div v-html="$t('pricing.per-user')"></div>
        </div>
      </div>
      <p-button :class="$style.btn"
                :show-icon="false"
                :gradient="2"
                v-html="$t('pricing.custom.selectPlan')"
                @click="onClick"/>
    </div>
    <div class="col" :class="$style.detailContainer">
      <template v-for="item in zeroTrustAccessAddOns">
        <div :key="item.title">
          <div :class="$style.itemTitle" class="body-2 color-text-8">{{ item.title }}</div>
          <template v-for="child in item.child">
            <div class="d-inline-flex justify-content-between align-items-center w-100">
              <div :class="$style.childTitle">{{ child.title }}</div>
              <img v-if="child.info" :src="child.isExpand ? icons.close : icons.info" @click="child.isExpand = !child.isExpand"
                   alt="" width="24" height="24">
            </div>
            <hr :class="$style.hr">
            <div v-if="child.info && child.isExpand" :class="$style.childInfo">{{child.info}}</div>
          </template>
        </div>
      </template>
    </div>
    <div :class="$style.comingsoon" class="col-sm-12 px-0" v-html="$t('pricing.note.note-1')"></div>
    <div :class="$style.comingsoon" class="col-sm-12 px-0" v-html="$t('pricing.note.note-2')"></div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.addonContainer
  padding 24px
  border-radius 12px
  background linear-gradient(0deg, #1B1C1D, #1B1C1D)
  margin-top 35px

  img
    cursor pointer

.itemTitle
  margin-top 20px

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
  margin-top -20px

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

.childTitle
  color $text-5
  font-size 13px
  line-height 21px
  font-weight 400
  margin-top 15px

.childInfo
  color $text-5
  font-size 12px
  line-height 20px
  margin-top 10px

.hr
  margin-top 7px
  margin-bottom 0
  border: 0.5px solid $text-6

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingAddOnsZeroTrustAccess extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;

  get icons() {
    return {
      'close': require('@/assets/icons/close.png'),
      'info': require('@/assets/icons/info.png')
    }
  }

  zeroTrustAccessAddOns: any = [
    {
      title: this.$t('pricing.zero-trust-access-add-on.device-management.text').toString(),
      child: [
        {
          title: this.$t('pricing.zero-trust-access-add-on.device-management.sub-option-1').toString(),
          info: this.$t('pricing.zero-trust-access-add-on.device-management.info-1').toString(),
          isExpand: false,
        }
      ],
    },
    {
      title: this.$t('pricing.zero-trust-access-add-on.vendor-management.text').toString(),
      child: [
        {
          title: this.$t('pricing.zero-trust-access-add-on.vendor-management.sub-option-1').toString(),
          info: this.$t('pricing.zero-trust-access-add-on.vendor-management.info-1').toString(),
          isExpand: false,
        },
        {
          title: this.$t('pricing.zero-trust-access-add-on.vendor-management.sub-option-2').toString(),
          info: '',
          isExpand: false,
        }
      ],
    },
    {
      title: this.$t('pricing.zero-trust-access-add-on.identity-access-management.text').toString(),
      child: [
        {
          title: this.$t('pricing.zero-trust-access-add-on.identity-access-management.sub-option-1').toString(),
          info: '',
          isExpand: false,
        },
        {
          title: this.$t('pricing.zero-trust-access-add-on.identity-access-management.sub-option-2').toString(),
          info: '',
          isExpand: false,
        }
      ],
    },
    {
      title: this.$t('pricing.zero-trust-access-add-on.customization.text').toString(),
      child: [
        {
          title: this.$t('pricing.zero-trust-access-add-on.customization.sub-option-1').toString(),
          info: this.$t('pricing.zero-trust-access-add-on.customization.info-1').toString(),
          isExpand: false,
        },
        {
          title: this.$t('pricing.zero-trust-access-add-on.customization.sub-option-2').toString(),
          info: this.$t('pricing.zero-trust-access-add-on.customization.info-2').toString(),
          isExpand: false,
        }
      ],
    },
    {
      title: this.$t('pricing.zero-trust-access-add-on.bots-management.text').toString(),
      child: [
        {
          title: this.$t('pricing.zero-trust-access-add-on.bots-management.sub-option-1').toString(),
          info: '',
          isExpand: false,
        }
      ],
    },
  ];

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }
}
</script>
