<template>
  <div :class="$style.pcidssContainer">
    <div :class="$style.pcidssSection" class="app-width">
      <introduction :introduction="introduction"/>
      <what-we-do/>
      <benefit :benefits="benefits"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.pcidssSection
  padding 16px

.pcidssContainer
  background-repeat no-repeat
  background-attachment fixed
  background-position center
  background-size cover
  background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

@media only screen and (min-width: 992px)
  .pcidssSection
    padding 112px 130px 86px 152px
</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import Introduction from "~/layouts/services/Introduction.vue";
import WhatWeDo from "~/layouts/services/PCIDSSaudit/WhatWeDo.vue";
import Benefit from "~/layouts/services/Benefit.vue";
import {IItroduction} from "~/layouts/services/Introduction.vue";

@Component({
  components: {Benefit, WhatWeDo, Introduction}
})
export default class PCIDSSAuditScreen extends Vue {
  benefits: any [] = [
    '<b>Build trust</b> with customers, partners, and vendors',
    'Ensure your <b>technical infrastructure</b> is more resilient against data breaches',
    '<b>Ensure compliance</b> on a global level',
    'Ensure you have <b>multiple layers of security</b> to prevent cyber incidents',
    'Serves as a <b>baseline for other infosec certifications</b> such as ISO and GDPR',
  ]

  introduction: IItroduction = {
    title: 'PCI-DSS Audit',
    content: 'The Payment Card Industry Data Security Standard (PCI-DSS) is an information security standard applicable to all\n' +
      '        organizations that handle credit cards from the major card companies and is mandated by the card brands.',
    route: ''
  }
}
</script>


