<template>
  <div :class="$style.certContainer">
    <div :class="$style.certSection" class="app-width">
      <introduction :introduction="introduction"/>
      <what-we-do/>
      <benefit :benefits="benefits"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.certSection
  padding 16px

.certContainer
  background-repeat no-repeat
  background-attachment fixed
  background-position center
  background-size cover
  background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

@media only screen and (min-width: 992px)
  .certSection
    padding 82px 133px 120px 152px
</style>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";
import Introduction from "~/layouts/services/Introduction.vue";
import WhatWeDo from "~/layouts/services/ISO27001audit/WhatWeDo.vue";
import Benefit from "~/layouts/services/Benefit.vue";
import {IItroduction} from "~/layouts/services/Introduction.vue";

@Component({
  components: {
    Benefit,
    WhatWeDo,
    Introduction,
    PButton
  }
})
export default class ISO27001AuditScreen extends Vue {
  benefits: any [] = [
    'Provides companies with <b>insight into the current status</b> of how they manage confidential information and data',
    '<b>Identifies key risks</b> across people, processes, and technology for remediation',
    'Provides a <b>roadmap for improvement</b> across cyber governance, defense, and preparation',
    'Allows companies to <b>better protect</b> their team members, customers, vendors, and partners',
    'Displays to customers, partners, and vendors that you meet <b>international compliance standards</b> for managing their data'
  ]

  introduction: IItroduction = {
    title: 'ISO 27001 Audit',
    content: ' The most well known and utilized international standard on how to manage information security. The purpose\n' +
      '        is to ensure companies have the right governance, processes, and technical capabilities to maintain\n' +
      '        control\n' +
      '        of their data and information assets. Our service prepares you for attaining the ISO 27001 certification\n' +
      '        which identifies you as being in compliance with international Information Security standards.',
    cert: {image: require('@/assets/images/services/ISO27001/iso27001.png'), height: 80},
    route: '',
  }
}
</script>


