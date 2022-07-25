<template>
  <div :class="$style.pciDssContainer">
    <div :class="$style.pciDssSection" class="app-width">
      <introduction :introduction="introduction"/>
      <what-we-do/>
      <benefit class="mt-3" :benefits="benefits"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.pciDssSection
  padding 16px

.pciDssContainer
  background-repeat no-repeat
  background-attachment fixed
  background-position center
  background-size cover
  background-image url("@/assets/images/services/service-bg-mobile.png")

@media only screen and (min-width: 992px)
  .pciDssContainer
    background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

  .pciDssSection
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
    this.$t('services.PCI-DSS.benefits.content-1'),
    this.$t('services.PCI-DSS.benefits.content-2'),
    this.$t('services.PCI-DSS.benefits.content-3'),
    this.$t('services.PCI-DSS.benefits.content-4'),
    this.$t('services.PCI-DSS.benefits.content-5'),
  ]

  introduction: IItroduction = {
    title: this.$t('services.PCI-DSS.title').toString(),
    cert: {
      image: require('@/assets/images/services/PCIDSS/pcidss.png'),
    },
    content: this.$t('services.PCI-DSS.content').toString(),
    route: '',
  }
}
</script>


