<template>
  <div>
    <features-comparison-table title="Detection & Protection" :features="featuresDetectionAndProtection"/>
    <features-comparison-table class="mt-5" title="Monitoring & Reporting" :features="featuresMonitoringAndReporting"/>
    <features-comparison-table class="mt-5" title="Service" :features="featuresService"/>
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
      title: 'Artificial Intelligence & Machine Learning',
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
        {
          comp: 'Aws',
          isSupport: ''
        }
      ]
    },
    {
      title: 'DDoS Layers 3/4',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'DDoS Layers 7',
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
        {
          comp: 'Add-on',
          isSupport: true
        }
      ]
    },
    {
      title: 'OWASP Top 10',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Bot Mitigation',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Custom Security Rules',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Server Vulnerability Scans',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'API Security',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Zero Trust Access',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Phishing Scans',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Compromised Credential Checks',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
    {
      title: 'Custom SSL',
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
        {
          comp: 'Add-on',
          isSupport: ''
        }
      ]
    },
  ];

  featuresMonitoringAndReporting: IFeature [] =
    [
      {
        title: 'Real Time Attack Reporting',
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
          {
            comp: 'Add-on',
            isSupport: ''
          },
        ]
      },
      {
        title: 'Attack Analytics',
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
          {
            comp: 'Add-on',
            isSupport: 'Add-on'
          },
        ]
      },
      {
        title: 'Attack Correlation & Integration',
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
          {
            comp: 'Add-on',
            isSupport: ''
          },
        ]
      },
    ];

  featuresService: IFeature [] =
    [
      {
        title: 'Managed Security',
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
          {
            comp: 'Add-on',
            isSupport: 'Add-on'
          },
        ]
      },
      {
        title: 'Service Level Agreements (SLAs)',
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
          {
            comp: 'Add-on',
            isSupport: true
          },
        ]
      },
      {
        title: 'Local APAC Support 24x7x365',
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
          {
            comp: 'Add-on',
            isSupport: ''
          },
        ]
      },
      {
        title: 'Cloud Deployment',
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
          {
            comp: 'Add-on',
            isSupport: true
          },
        ]
      },
      {
        title: 'On-Premise Deployment',
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
          {
            comp: 'Add-on',
            isSupport: ''
          },
        ]
      },
      {
        title: 'Mainland China Access',
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
          {
            comp: 'Add-on',
            isSupport: 'Add-on'
          },
        ]
      },
    ];
}
</script>


