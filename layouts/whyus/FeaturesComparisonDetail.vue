<template>
  <div>
    <features-comparison-table :title="$t('whyUs.feature-comparison.detect-and-protection.text').toString()"
                               :features="featuresDetectionAndProtection"/>
    <features-comparison-table class="mt-5"
                               :title="$t('whyUs.feature-comparison.monitoring-and-reporting.text').toString()"
                               :features="featuresMonitoringAndReporting"/>
    <features-comparison-table class="mt-5" :title="$t('whyUs.feature-comparison.service.text').toString()"
                               :features="featuresService"/>
  </div>
</template>
<style module lang="stylus">
@import "@/styles/config.styl"

</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import FeaturesComparisonTable, {IFeature} from "~/layouts/whyus/FeaturesComparisonTable.vue";

@Component({
  components: {FeaturesComparisonTable}
})
export default class FeaturesComparisonDetailsTable extends Vue {

  featuresDetectionAndProtection: IFeature [] = [
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-1').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: true
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-2').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: 'Add-on'
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-3').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: true
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-4').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: true
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-5').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: true
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-6').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: ''
        },
        {
          comp: 'Imperva',
          isSupport: ''
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-7').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: ''
        },
        {
          comp: 'F5',
          isSupport: ''
        },
        {
          comp: 'Imperva',
          isSupport: ''
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-8').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: true
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-9').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: 'Add-on'
        },
        {
          comp: 'F5',
          isSupport: ''
        },
        {
          comp: 'Imperva',
          isSupport: ''
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-10').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: ''
        },
        {
          comp: 'F5',
          isSupport: ''
        },
        {
          comp: 'Imperva',
          isSupport: true
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-11').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: 'Add-on'
        },
        {
          comp: 'F5',
          isSupport: 'Add-on'
        },
        {
          comp: 'Imperva',
          isSupport: ''
        },
      ]
    },
    {
      title: this.$t('whyUs.feature-comparison.detect-and-protection.option-12').toString(),
      support: [
        {
          comp: 'Polaris',
          isSupport: true
        },
        {
          comp: 'CloudFlare',
          isSupport: true
        },
        {
          comp: 'F5',
          isSupport: ''
        },
        {
          comp: 'Imperva',
          isSupport: ''
        },
      ]
    },
  ];

  featuresMonitoringAndReporting: IFeature [] =
    [
      {
        title: this.$t('whyUs.feature-comparison.monitoring-and-reporting.option-1').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: true
          },
          {
            comp: 'F5',
            isSupport: ''
          },
          {
            comp: 'Imperva',
            isSupport: ''
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.monitoring-and-reporting.option-2').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: true
          },
          {
            comp: 'F5',
            isSupport: true
          },
          {
            comp: 'Imperva',
            isSupport: true
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.monitoring-and-reporting.option-3').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: 'Manual'
          },
          {
            comp: 'F5',
            isSupport: ''
          },
          {
            comp: 'Imperva',
            isSupport: true
          },
        ]
      },
    ];

  featuresService: IFeature [] =
    [
      {
        title: this.$t('whyUs.feature-comparison.service.option-1').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: 'Add-on'
          },
          {
            comp: 'CloudFlare',
            isSupport: ''
          },
          {
            comp: 'F5',
            isSupport: 'Add-on'
          },
          {
            comp: 'Imperva',
            isSupport: 'Add-on'
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.service.option-2').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: 'Enterprise Only'
          },
          {
            comp: 'F5',
            isSupport: ''
          },
          {
            comp: 'Imperva',
            isSupport: ''
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.service.option-3').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: ''
          },
          {
            comp: 'F5',
            isSupport: ''
          },
          {
            comp: 'Imperva',
            isSupport: ''
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.service.option-4').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: true
          },
          {
            comp: 'F5',
            isSupport: true
          },
          {
            comp: 'Imperva',
            isSupport: true
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.service.option-5').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: ''
          },
          {
            comp: 'F5',
            isSupport: true
          },
          {
            comp: 'Imperva',
            isSupport: true
          },
        ]
      },
      {
        title: this.$t('whyUs.feature-comparison.service.option-6').toString(),
        support: [
          {
            comp: 'Polaris',
            isSupport: true
          },
          {
            comp: 'CloudFlare',
            isSupport: 'Add-on'
          },
          {
            comp: 'F5',
            isSupport: ''
          },
          {
            comp: 'Imperva',
            isSupport: ''
          },
        ]
      },
    ];
}
</script>


