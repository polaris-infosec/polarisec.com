<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 flex-column align-items-center text-center">
        <p class="body-1 col-7 p-0 my-0">Need help with choosing a package?
          Get a personalized recommendation</p>
        <p-button class="col-7 mt-4" :gradient="2" text="Answer 3 Easy Questions" @click="goToQuestions()" :show-icon="false"/>
      </b-row>

      <div :class="$style.divide" class="flex-grow-1 mt-5 mb-5"></div>

      <b-row class="mx-0 justify-content-between align-items-center mb-4">
        <p class="col-6 my-0 p-0 body-2 font-weight-bold">
          Save 20% with our
          Yearly payment plan
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
          <p-button class="col-12 mt-2" text="Select Plan" :show-icon="false" @click="onClick()"/>
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
        title: 'Standard',
        addOnsFeatures: [
          {
            title: 'Threat Intelligence',
            price: this.isMonthly ? 87 : 835
          },
          {
            title: 'Zero Trust Access',
            price: this.isMonthly ? 4 : 42
          },

        ]
      },
      {
        title: 'Professional',
        addOnsFeatures: [
          {
            title: 'Professional - Managed Security Services',
            price: this.isMonthly ? 17 : 167
          }, {
            title: 'Threat Intelligence',
            price: this.isMonthly ? 87 : 835
          }, {
            title: 'Zero Trust Access',
            price: this.isMonthly ? 4 : 42
          },
        ]
      },
      {
        title: 'Enterprise',
        addOnsFeatures: [
          {
            title: 'Custom Pricing',
            price: 0
          }, {
            title: 'Threat Intelligence',
            price: this.isMonthly ? 87 : 835
          }, {
            title: 'Zero Trust Access',
            price: this.isMonthly ? 4 : 42
          },
        ]
      }
    ]
  }

  get listPricing() {
    return [
      {
        title: 'Basic',
        price: 0,
        features: [
          {
            title: 'App Security',
            subFeatures: [
              'IP Geolocation',
              'IP Blacklist/Whitelist',
              'Custom Rules',
              'OWASP Top 10 Attack Protection',
              'Static Content Caching',
              'HTTP/2',
            ]
          },
          {
            title: 'BOT Management',
            subFeatures: [
              'Anti-bot protection',
              'Whitelist Good Bots',
            ]
          },
          {
            title: 'Small Business Expertise',
            subFeatures: [
              'CNAME support',
              'DNS Management',
              'DNSSEC',
              'SSL Auto-generation',
            ]
          },
          {
            title: 'Management - Monitoring Reporting',
            subFeatures: [
              'Reporting',
              'Email/ Browser Alert Notifications',
              'Audit Logs'
            ]
          },
          {
            title: 'Scalability & Geographic Presence',
            subFeatures: [
              'Regional PoPs',
            ]
          },
          {
            title: 'Technical Architecture',
            subFeatures: [
              'Cloud Deployment',
            ]
          },
        ]
      },
      {
        title: 'Standard',
        price: this.isMonthly ? 17 : 163,
        features: [
          {
            title: 'App Security',
            subFeatures: [
              'IP Geolocation',
              'IP Blacklist/Whitelist',
              `Custom Rules <span class="brand-2">5</span>`,
              'OWASP Top 10 Attack Protection',
              'Static Content Caching',
              'HTTP/2',
            ]
          },
          {
            title: 'BOT Management',
            subFeatures: [
              'Anti-bot protection',
              'Whitelist Good Bots',
            ]
          },
          {
            title: 'DDoS',
            subFeatures: [
              `DDoS Mitigation (L7 & L3/4)<p class="my-0 brand-2">Up to 1.5Gbps</p>`,
            ]
          },
          {
            title: 'Small Business Expertise',
            subFeatures: [
              'CNAME support',
              'DNS Management',
              'DNSSEC',
              'SSL Auto-generation',
            ]
          },
          {
            title: 'Management - Monitoring Reporting',
            subFeatures: [
              'Reporting',
              'Multi - User Management',
              'Email/ Browser Alert Notifications',
              'Audit Logs'
            ]
          },
          {
            title: 'Scalability & Geographic Presence',
            subFeatures: [
              'Regional PoPs',
            ]
          },
          {
            title: 'Service Level Agreement',
            subFeatures: [
              'Email',
              '8 x 5 x Next Business Day',
              '99.99% Uptime'
            ]
          },
          {
            title: 'Technical Architecture',
            subFeatures: [
              'Cloud Deployment',
              `Threat Intelligence<p class="my-0">(Paid Add-on)</p>`,
              `Zero Trust Access<p class="my-0">(Paid Add-on)</p>`,
            ]
          },
        ]
      },
      {
        title: 'Professional',
        price: this.isMonthly ? 185 : 1176,
        features: [
          {
            title: 'API Security',
            subFeatures: [
              `API Specification <p class="my-0">Protection <span class="brand-2">5</span></p>`,
            ]
          },
          {
            title: 'App Security',
            subFeatures: [
              'IP Geolocation',
              'IP Blacklist/Whitelist',
              `Custom Rules <span class="brand-2">5</span>`,
              'OWASP Top 10 Attack Protection',
              'New Attack Vectors - Zero Day',
              'NDay Rules - \n' +
              'Application Rules',
              'Static Content Caching',
              'Security Header / \n' +
              'CORS Policy',
              'CSP Header',
              'HTTP/2',
            ]
          },
          {
            title: 'BOT Management',
            subFeatures: [
              'Anti-bot protection',
              'Whitelist Good Bots',
            ]
          },
          {
            title: 'DDoS',
            subFeatures: [
              `DDoS Mitigation (L7 & L3/4)<p class="my-0 brand-2">Up to 1.5Gbps</p>`,
            ]
          },
          {
            title: 'Small Business Expertise',
            subFeatures: [
              'CNAME support',
              'DNS Management',
              'DNSSEC',
              'SSL Auto-generation',
              'Custom SSL',
            ]
          },
          {
            title: 'Management - Monitoring Reporting',
            subFeatures: [
              'Reporting',
              'Polaris API Access',
              'Realtime Dashboard',
              'Multi - User Management',
              'Incident Management\n' +
              'Ticket System',
              'Email/ Browser Alert Notifications',
              'Audit Logs',
            ]
          },
          {
            title: 'Scalability & Geographic Presence',
            subFeatures: [
              'Regional PoPs',
            ]
          },
          {
            title: 'Service Level Agreement',
            subFeatures: [
              'Chat',
              'Email',
              '8 x 5 x Next Business Day',
              '24 x 7 x 4',
              '99.99% Uptime',
            ]
          },
          {
            title: 'Technical Architecture',
            subFeatures: [
              'Cloud Deployment',
              `Threat Intelligence<p class="my-0">(Paid Add-on)</p>`,
              `Zero Trust Access<p class="my-0">(Paid Add-on)</p>`,
            ]
          },
        ]
      }
    ]
  }
}
</script>

