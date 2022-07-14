<template>
  <div :class="$style.incidentResponseContainer">
    <div :class="$style.incidentResponseSection" class="app-width">
      <introduction :introduction="introduction"/>
      <what-we-do/>
      <benefit :benefits="benefits"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.incidentResponseSection
  padding 16px

.incidentResponseContainer
  background-repeat no-repeat
  background-attachment fixed
  background-position center
  background-size cover
  background-image url("@/assets/images/services/service-bg-mobile.png")

@media only screen and (min-width: 992px)
  .incidentResponseContainer
    background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

  .incidentResponseSection
    padding 82px 133px 120px 152px
</style>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/services/Introduction.vue";
import Benefit from "~/layouts/services/Benefit.vue";
import {IItroduction} from "~/layouts/services/Introduction.vue";
import WhatWeDo from "~/layouts/services/IncidentResponse/WhatWeDo.vue";


@Component({
  components: {
    WhatWeDo,
    Benefit,
    Introduction

  }
})
export default class IncidentResponseScreen extends Vue {
  benefits: string [] = [
    'Immediate resolution of threats in real time, as they happen',
    'Greater awareness of your network environment\'s activities',
    'Trusted advisory on best cyber security practices',
    'Protection of your team members\', customers\', and partners\' digital assets',
    'Maintain brand image and reputation'
  ]

  introduction: IItroduction = {
    title: 'Incident Response',
    content: `In case an organization suffers a cyber attack, an incident response is warranted to resolve the issue. It is
        the <b>immediate triage of the incident</b> in determining who is involved, how it happened, what the immediate
        impact
        is, and what the customer can do about it.
        <br><br>
        Incident response can be <b>retained or on-demand.</b>
        <br><br>
        <b>Retained</b> - a Managed Security Service in which we'll assess your organization's current breach status and
        actively monitor your network daily for attacks. When an attack occurs, we immediately remediate the threat.
        Retained response customers will always have priority.
        <br><br>
        <b>On-demand</b> - Call us when you need us. We'll do an assessment of the incident and immediately remediate it
        for you.`,
    route: '',
  }
}
</script>


