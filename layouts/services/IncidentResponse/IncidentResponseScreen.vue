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
    this.$t('services.incident-response.benefits.content-1').toString(),
    this.$t('services.incident-response.benefits.content-2').toString(),
    this.$t('services.incident-response.benefits.content-3').toString(),
    this.$t('services.incident-response.benefits.content-4').toString(),
    this.$t('services.incident-response.benefits.content-5').toString(),
  ]

  introduction: IItroduction = {
    title: this.$t('services.incident-response.title').toString(),
    content: this.$t('services.incident-response.content').toString(),
    route: '',
  }
}
</script>


