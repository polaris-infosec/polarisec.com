<template>
  <div class="container-fluid px-0">
    <div :class="$style.container" class="row">
      <div class="px-0 col-sm-12">
        <h2 class="pl-4">Pricing</h2>
        <div class="body-2 pl-4" v-html="$t('pricing.pricing-detail.content')"></div>
        <div :class="$style.pricingContainer" class="p-4">
          <div :class="$style.headerContainer">
            <div class="row" :class="$style.tableHeader">
              <div @click="onChangeExpand(!isExpandAll)" :class="$style.headerItem"
                   class="col-sm-3 body-2 d-inline-flex align-items-center justify-content-between">
                <div>Billing cycle</div>
                <img :src="isExpandAll ? iconExpand.collapse : iconExpand.expand" alt="" width="24" height="24">
              </div>
              <div :class="$style.headerItem" class="col" v-html="$t('pricing.plans.basic')"></div>
              <div :class="$style.headerItem" class="col" v-html="$t('pricing.plans.standard')"></div>
              <div :class="$style.headerItem" class="col" v-html="$t('pricing.plans.professional')"></div>
              <div :class="$style.headerItem" class="col" v-html="$t('pricing.plans.enterprise')"></div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="d-inline-flex align-items-center">
                  <div @click="onChangeType(true)" :class="[$style.selectType, isMonthlyType && $style.active]"
                       class="mr-1">
                    Monthly
                  </div>
                  <div @click="onChangeType(false)" :class="[$style.selectType, !isMonthlyType && $style.active]">
                    Yearly
                  </div>
                </div>
              </div>
              <template v-for="type in billingCycle">
                <div :key="type.type" class="col">
                  <div class="d-inline-flex align-items-center">
                    <h4 :class="$style.price">{{ !isNaN(type.price) ? '$' : '' }}{{ type.price }}</h4>
                    <div :class="$style.priceDetail" v-if="!isNaN(type.price)">
                      <div v-html="$t('pricing.per-domains')"></div>
                      <div>per {{ isMonthlyType ? 'month' : 'year' }}</div>
                    </div>
                  </div>
                  <p-button :gradient="2"
                            :class="$style.btn"
                            :text="type.button_text"
                            :show-icon="false"
                            @click="type.action"/>
                </div>
              </template>
            </div>
          </div>
          <template v-for="type in functionTypes">
            <div :class="$style.typeContainer" :key="type.title">
              <div class="row">
                <div @click="type.isExpand = !type.isExpand" :class="$style.typeTitle"
                     class="body-2 d-inline-flex align-items-center justify-content-between col-sm-3">
                  <div>{{ type.title }}</div>
                  <img :src="type.isExpand ? iconExpand.collapse : iconExpand.expand" alt="" width="24" height="24">
                </div>
                <div class="col"/>
                <div class="col"/>
                <div class="col"/>
                <div class="col"/>
              </div>
              <template v-if="type.isExpand" v-for="child in type.child">
                <div :key="child.title" class="row" :class="$style.childContainer">
                  <div class="col col-sm-3 caption d-inline-flex align-items-center justify-content-between"
                       :class="$style.childTitle">
                    <div>{{ child.title }}</div>
                    <img v-if="child.info" :class="$style.img" :src="child.isExpand ? icons.close : icons.info"
                         @click="child.isExpand = !child.isExpand"
                         alt="" width="24" height="24">
                  </div>
                  <template v-for="support in child.supports">
                    <div class="col d-inline-flex align-items-center">
                      <img v-if="support.isSupport" src="@/assets/icons/done.png" alt="" width="24" height="24">
                      <span :class="$style.supportInfo">{{ support.info }}</span>
                    </div>
                  </template>
                  <div class="col-sm-12">
                    <hr :class="$style.hr">
                  </div>
                </div>
                <div v-if="child.isExpand" class="row">
                  <div class="col col-sm-3" :class="$style.childInfo">{{ child.info }}</div>
                  <div class="col"/>
                  <div class="col"/>
                  <div class="col"/>
                  <div class="col"/>
                </div>
              </template>
              <div v-if="type.isComingSoon && type.isExpand" :class="$style.comingsoon" v-html="$t('pricing.note.note-1')"></div>
            </div>
          </template>
        </div>
        <div class="d-inline-flex align-items-center justify-content-between" :class="$style.needHelpContainer">
          <div>
            <h5 v-html="$t('pricing.question')"></h5>
            <h5 v-html="$t('pricing.question-break')"></h5>
          </div>
          <p-button v-html="$t('pricing.question-1')" @click="onClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.headerContainer
  position sticky
  top 72px
  background-color #0F0F0F
  z-index 1
  padding-top 8px

.container
  background-color: $background-1

.img
  cursor pointer

.pricingContainer
  background $background-2
  border-radius 12px
  margin-top 35px
  padding-top 16px !important

  .typeContainer:last-child
    margin-bottom 4px

.childContainer
  margin-top 15px

.btn
  width 100%
  padding-top 10px
  padding-bottom 10px
  margin-top 15px
  margin-bottom 10px
  font-weight 500 !important
  font-size 14px !important
  line-height 18px !important

.price
  color $text-8
  margin-bottom 0
  margin-right: 10px

.priceDetail
  font-size 12px
  line-height 16px
  color $text-6

.selectType
  font-size 13px
  line-height 13px
  width 82px
  padding-top: 6px;
  padding-bottom 6px
  text-align center
  cursor pointer

  a
    color $text-8

.active
  border-radius 2px
  background-color: #3D3F44

.tableHeader
  margin-bottom 15px

.headerItem
  color $text-8
  align-items center

  &:first-child
    font-size 16px
    line-height 26px
    cursor pointer

  &:not(:first-child)
    font-size 20px
    line-height 32px
    font-weight bold

.typeTitle
  color $text-8
  cursor pointer

.childTitle
  color $text-5

.childInfo
  font-size 12px
  line-height 20px
  color $text-5
  margin-top 10px

.hr
  margin-bottom 0
  margin-top 12px
  border 0.5px solid #93A1B4

.typeContainer
  margin-bottom 40px

.supportInfo
  font-size 14px
  line-height 22px
  color $text-8
  margin-left 8px

.needHelpContainer
  padding 22px 29px
  background-color: #3D3F44
  border-radius 8px
  margin-top 70px
  margin-bottom 70px
  width 100%

  h5
    color $text-8
    margin-bottom 0

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 15px

</style>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingOverview extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;
  @Prop({default: true, type: Boolean, required: true}) isExpandAll: boolean;


  get icons() {
    return {
      'close': require('@/assets/icons/close.png'),
      'info': require('@/assets/icons/info.png')
    }
  }

  get iconExpand() {
    return {
      'expand': require('@/assets/icons/expand.png'),
      'collapse': require('@/assets/icons/collapse.png')
    }
  }

  get billingCycle() {
    return [
      {
        type: this.$t('pricing.plans.basic').toString(),
        price: 0,
        button_text: this.$t('pricing.custom.selectPlan').toString(),
        action: () => this.goPolaris(),
      },
      {
        type: this.$t('pricing.plans.standard').toString(),
        price: this.isMonthlyType ? 17 : 163,
        button_text: this.$t('pricing.custom.selectPlan').toString(),
        action: () => this.goPolaris(),
      },
      {
        type: this.$t('pricing.plans.professional').toString(),
        price: this.isMonthlyType ? 185 : 1776,
        button_text: this.$t('pricing.custom.selectPlan').toString(),
        action: () => this.goPolaris(),
      },
      {
        type: this.$t('pricing.plans.enterprise').toString(),
        price: 'Contact us',
        button_text: this.$t('pricing.custom.selectDemo').toString(),
        action: () => this.goContact(),
      },
    ];
  }

  goContact() {
    this.$router.push({path: '/contact'});
  }

  goPolaris() {
    window.open('https://polarisec.io/', '_blank');
  }

  @Watch('isExpandAll', {deep: true, immediate: true})
  onExpandChange() {
    this.functionTypes.forEach((type: any) => type.isExpand = this.isExpandAll);
  }

  functionTypes: any = [
    {
      title: 'API Security',
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.API-security.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.API-security.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '5',
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.custom'),
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.app-security.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-2').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-2').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-3').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-3').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '5 Rules',
            },
            {
              isSupport: true,
              info: '50 Rules',
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.custom'),
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-4').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-4').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-5').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-4').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-6').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-6').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-7').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-7').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-8').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-8').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-9').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-9').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.app-security.sub-option-10').toString(),
          info: this.$t('pricing.pricing-detail.app-security.info-10').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.bot-management.text').toString(),
      isExpand: true,
      isComingSoon: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.bot-management.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.bot-management.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.advanced'),
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.bot-management.sub-option-2').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.custom'),
            },
          ],
        },
        {
          title:this.$t('pricing.pricing-detail.bot-management.sub-option-3').toString(),
          info: this.$t('pricing.pricing-detail.bot-management.info-3').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.ddos.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.ddos.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.ddos.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Up to 1.5 Gbps',
            },
            {
              isSupport: true,
              info: 'Up to 7.5 Gbps',
            },
            {
              isSupport: true,
              info: 'Custom Pricing (Up to 2 Tbps)',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.ddos.sub-option-2').toString(),
          info: this.$t('pricing.pricing-detail.ddos.info-2').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.small-business-expertise.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.small-business-expertise.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.small-business-expertise.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.small-business-expertise.sub-option-2').toString(),
          info: this.$t('pricing.pricing-detail.small-business-expertise.info-2').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.small-business-expertise.sub-option-3').toString(),
          info: this.$t('pricing.pricing-detail.small-business-expertise.info-3').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.small-business-expertise.sub-option-4').toString(),
          info: this.$t('pricing.pricing-detail.small-business-expertise.info-4').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.small-business-expertise.sub-option-5').toString(),
          info: this.$t('pricing.pricing-detail.small-business-expertise.info-5').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.management-monitoring-reporting.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-1').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: this.$t('pricing.plans.basic'),
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.basic'),
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.advanced'),
            },
            {
              isSupport: true,
              info: this.$t('pricing.plans.custom'),
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-2').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-3').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-4').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-5').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-6').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-7').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-8').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-1').toString(),
          info: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.info-1').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-2').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-3').toString(),
          info: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.info-3').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-4').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: this.$t('pricing.custom.pricing').toString(),
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.service-level-agreement.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-1').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-2').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-3').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-4').toString(),
          info: this.$t('pricing.pricing-detail.service-level-agreement.info-4').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-5').toString(),
          info: this.$t('pricing.pricing-detail.service-level-agreement.info-5').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-6').toString(),
          info: this.$t('pricing.pricing-detail.service-level-agreement.info-6').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.service-level-agreement.sub-option-7').toString(),
          info: this.$t('pricing.pricing-detail.service-level-agreement.info-7').toString(),
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: this.$t('pricing.pricing-detail.technical-architecture.text').toString(),
      isExpand: true,
      child: [
        {
          title: this.$t('pricing.pricing-detail.technical-architecture.sub-option-1').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.technical-architecture.sub-option-2').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.technical-architecture.sub-option-3').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.technical-architecture.sub-option-4').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: this.$t('pricing.custom.paidAddOn').toString(),
            },
            {
              isSupport: true,
              info: this.$t('pricing.custom.paidAddOn').toString(),
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: this.$t('pricing.pricing-detail.technical-architecture.sub-option-5').toString(),
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: this.$t('pricing.custom.paidAddOn').toString(),
            },
            {
              isSupport: true,
              info: this.$t('pricing.custom.paidAddOn').toString(),
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
  ];

  onChangeType(isMonthly: boolean) {
    this.$nuxt.$emit('update-type', isMonthly);
  }

  onChangeExpand(isExpandAll: boolean) {
    this.$nuxt.$emit('update-expand', isExpandAll);
  }

  onClick() {
    this.$router.push({path: '/questions'});
  }

}
</script>
