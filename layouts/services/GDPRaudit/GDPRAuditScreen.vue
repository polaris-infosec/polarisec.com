<template>
  <div :class="$style.gdprContainer">
    <div :class="$style.gdprSection" class="app-width">
      <introduction :introduction="introduction"/>
      <what-we-do/>
      <benefit :benefits="benefits"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.gdprSection
  padding 16px

.gdprContainer
  background-repeat no-repeat
  background-attachment fixed
  background-position center
  background-size cover
  background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

@media only screen and (min-width: 992px)
  .gdprSection
    padding 112px 147px 86px 152px
</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import Introduction from "~/layouts/services/Introduction.vue";
import Benefit from "~/layouts/services/Benefit.vue";
import WhatWeDo from "~/layouts/services/GDPRaudit/WhatWeDo.vue";
import {IItroduction} from "~/layouts/services/Introduction.vue";

@Component({
  components: {WhatWeDo, Benefit, Introduction}
})
export default class GDPRAuditScreen extends Vue {
  benefits: any [] = [
    'Provides companies with <b>insight into the current status</b> of how they manage confidential information and data',
    '<b>Identifies key risks</b> across people, processes, and technology for remediation',
    'Provides a <b>roadmap for improvement</b> across cyber governance, defense, and preparation',
    'Allows companies to <b>better protect</b> their team members, customers, vendors, and partners',
    'Displays to customers, partners, and vendors that you meet <b>international compliance standards</b> for managing their data',
    '<b>Compliance for GDPR standards</b> for business in the EU'
  ]

  introduction: IItroduction = {
    title: 'GDPR Audit',
    subTitle: 'For businesses that conduct business in the European Union, GDPR Compliance is\n' +
      '        mandatory.',
    content: 'The General Data Protection Regulation (GDPR)is a legal framework that serves as a set of guidelines for how personal information should be collected and processed for those who live in the European Union. They outline rights belonging to citizens in the EU and the steps that companies must take when storing and managing confidential data.',
    cert: {image: require('@/assets/images/services/GDPR/gdpr.png'), height: 100},
  }
}
</script>


