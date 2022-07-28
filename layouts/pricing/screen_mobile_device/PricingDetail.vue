<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 flex-column align-items-center text-center">
        <p class="body-1 col-7 p-0 my-0" v-html="$t('pricing.question')"></p>
        <p-button class="col-7 mt-4" :gradient="2" v-html="$t('pricing.question-1')" @click="goToQuestions()" :show-icon="false"/>
      </b-row>

      <div :class="$style.divide" class="flex-grow-1 mt-5 mb-5"></div>

      <b-row class="mx-0 justify-content-between align-items-center mb-4">
        <p class="col-6 my-0 p-0 body-2 font-weight-bold" v-html="$t('pricing.pricing-detail.content')">
        </p>
        <p-toggle-button :is-monthly="isMonthly" :is-yearly="isYearly"/>
      </b-row>
      <carousel
        :nav="false"
        autoplay
        autoWidth
        :margin="16"
        :items="1"
        :dots="false"
        autoplayHoverPause
        class="mb-5"
      >
        <b-col cols="12" class="p-0 " v-for="pricing in listPricing" :key="pricing.title">
          <pricing-table class="mb-3" :is-monthly="isMonthly" :pricing="pricing"
                         style="border-radius: 10px"/>
          <p-button class="col-12 mt-2" v-html="$t('pricing.custom.selectPlan')" :show-icon="false" @click="onClick()"/>
        </b-col>
      </carousel>
            <carousel
              :nav="false"
              autoplay
              :items="1"
              autoWidth
              :margin="16"
              :dots="false"
              autoplayHoverPause
              class="mb-5"
            >
              <b-col cols="12" class="p-0" v-for="addOns in listAddOns" :key="addOns.title">
                <pricing-addons style="border-radius: 10px; max-width: 353px" class="mb-2"  :is-monthly="isMonthly"
                                :add-ons="addOns"/>
              </b-col>
            </carousel>
    </div>
  </div>
</template>

<style module lang="stylus">
@import "@/styles/config.styl"

.divide
  border-bottom 0.03em solid #55677E

.section
  padding 32px 16px

.container
  background-color black
</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";
import PToggleButton from "~/components/PToggleButton.vue";
import PricingTable from "~/layouts/pricing/screen_mobile_device/PricingTable.vue";
import PricingAddons from "~/layouts/pricing/screen_mobile_device/PricingAddons.vue";

const carousel = require('vue-owl-carousel');

@Component({
  components: {PricingAddons, PricingTable, PToggleButton, PButton, carousel}
})
export default class PricingDetail extends Vue {
  isMonthly: boolean = true
  isYearly: boolean = false

  private mounted() {
    this.$nuxt.$on('setOption', (isMonthly: boolean, isYearly: boolean) => {
      this.isMonthly = isMonthly;
      this.isYearly = isYearly;
    });
  }

  onClick(){
    window.open('https://polarisec.io/', '_blank');
  }

  goToQuestions(){
    return this.$router.push({path:'/questions'})
  }

  get listAddOns() {
    return [
      {
        title: this.$t('pricing.plans.standard').toString(),
        addOnsFeatures: [
          {
            title: this.$t('pricing.add-ons.option-2').toString(),
            price: this.isMonthly ? 87 : 835
          },
          {
            title: this.$t('pricing.add-ons.option-3').toString(),
            price: this.isMonthly ? 4 : 42
          },

        ]
      },
      {
        title: this.$t('pricing.plans.professional').toString(),
        addOnsFeatures: [
          {
            title: this.$t('pricing.add-ons.option-1').toString(),
            price: this.isMonthly ? 17 : 167
          }, {
            title: this.$t('pricing.add-ons.option-2').toString(),
            price: this.isMonthly ? 87 : 835
          }, {
            title: this.$t('pricing.add-ons.option-3').toString(),
            price: this.isMonthly ? 4 : 42
          },
        ]
      },
      {
        title: this.$t('pricing.plans.enterprise').toString(),
        addOnsFeatures: [
          {
            title: this.$t('pricing.custom.pricing').toString(),
            price: 0
          }, {
            title: this.$t('pricing.add-ons.option-2').toString(),
            price: this.isMonthly ? 87 : 835
          }, {
            title: this.$t('pricing.add-ons.option-3').toString(),
            price: this.isMonthly ? 4 : 42
          },
        ]
      }
    ]
  }

  get listPricing() {
    return [
      {
        title: this.$t('pricing.plans.basic').toString(),
        price: 0,
        features: [
          {
            title: this.$t('pricing.pricing-detail.app-security.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.app-security.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-2').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-3').toString(),             
              this.$t('pricing.pricing-detail.app-security.sub-option-4').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-7').toString(),             
              this.$t('pricing.pricing-detail.app-security.sub-option-10').toString(), 
          ]},
          {
            title: this.$t('pricing.pricing-detail.bot-management.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.bot-management.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.bot-management.sub-option-3').toString(),              
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.small-business-expertise.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-1').toString(), 
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-2').toString(),            
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-3').toString(),              
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-4').toString(),              
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.management-monitoring-reporting.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-1').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-6').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-8').toString(),

            ]
          },
          {
            title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-3').toString(),

            ]
          },
          {
            title: this.$t('pricing.pricing-detail.technical-architecture.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-1').toString(),
            ]
          },
        ]
      },
      {
        title: this.$t('pricing.plans.standard').toString(),
        price: this.isMonthly ? 17 : 163,
        features: [
          {
            title: this.$t('pricing.pricing-detail.app-security.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.app-security.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-2').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-3').toString() + '<span class="brand-2"> 5</span>',
              this.$t('pricing.pricing-detail.app-security.sub-option-4').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-7').toString(),             
              this.$t('pricing.pricing-detail.app-security.sub-option-10').toString(),
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.bot-management.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.bot-management.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.bot-management.sub-option-3').toString(),              
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.ddos.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.ddos.sub-option-1')+ '<p class="my-0 brand-2">Ups to 1.5Gbps</p>',
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.small-business-expertise.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-1').toString(), 
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-2').toString(),            
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-3').toString(),              
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-4').toString(),      
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.management-monitoring-reporting.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-1').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-4').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-6').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-8').toString(),
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-3').toString(),
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.service-level-agreement.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-3').toString(),   
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-4').toString(),
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-7').toString(),            
              ]
          },
          {
            title: this.$t('pricing.pricing-detail.technical-architecture.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-1').toString(),
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-4').toString()+'<p class="my-0">(Paid Add-on)</p>',                   
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-5').toString()+'<p class="my-0">(Paid Add-on)</p>',
            ]
          },
        ]
      },
      {
        title: this.$t('pricing.plans.professional').toString(),
        price: this.isMonthly ? 185 : 1176,
        features: [
          {
            title: this.$t('pricing.pricing-detail.API-security.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.API-security.sub-option-1').toString() + '<span class="brand-2"> 5</span>',
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.app-security.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.app-security.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-2').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-3').toString()+ '<span class="brand-2"> 5</span>',
              this.$t('pricing.pricing-detail.app-security.sub-option-4').toString(),  
              this.$t('pricing.pricing-detail.app-security.sub-option-5').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-6').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-7').toString(),               
              this.$t('pricing.pricing-detail.app-security.sub-option-8').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-9').toString(),              
              this.$t('pricing.pricing-detail.app-security.sub-option-10').toString(),
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.bot-management.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.bot-management.sub-option-1').toString(),              
              this.$t('pricing.pricing-detail.bot-management.sub-option-3').toString(),          
            ]
          },
          {
            title: 'DDoS',
            subFeatures: [
              this.$t('pricing.pricing-detail.ddos.sub-option-1')+ '<p class="my-0 brand-2">Ups to 1.5Gbps</p>',
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.small-business-expertise.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-1').toString(), 
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-2').toString(),            
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-3').toString(),              
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-4').toString(), 
              this.$t('pricing.pricing-detail.small-business-expertise.sub-option-5').toString(), 

            ]
          },
          {
            title: this.$t('pricing.pricing-detail.management-monitoring-reporting.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-1').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-2').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-3').toString(),              
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-4').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-5').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-6').toString(),
              this.$t('pricing.pricing-detail.management-monitoring-reporting.sub-option-8').toString(),
            ]
          },
          {
           title: this.$t('pricing.pricing-detail.scalability-and-geographic-presence.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.scalability-and-geographic-presence.sub-option-3').toString(),
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.service-level-agreement.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-2').toString(),
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-3').toString(),   
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-4').toString(),
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-5').toString(),
              this.$t('pricing.pricing-detail.service-level-agreement.sub-option-7').toString(),            
            
            ]
          },
          {
            title: this.$t('pricing.pricing-detail.technical-architecture.text').toString(),
            subFeatures: [
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-1').toString(),
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-4').toString()+'<p class="my-0">(Paid Add-on)</p>',                   
              this.$t('pricing.pricing-detail.technical-architecture.sub-option-5').toString()+'<p class="my-0">(Paid Add-on)</p>',
            ]
          },
        ]
      }
    ]
  }
}
</script>

