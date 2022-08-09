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
  background-image url("@/assets/images/services/service-bg-mobile.png")

@media only screen and (min-width: 992px)
  .gdprContainer
    background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

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
    this.$t('services.GDPR.benefits.content-1').toString(),
    this.$t('services.GDPR.benefits.content-2').toString(),
    this.$t('services.GDPR.benefits.content-3').toString(),
    this.$t('services.GDPR.benefits.content-4').toString(),
    this.$t('services.GDPR.benefits.content-5').toString(),
    this.$t('services.GDPR.benefits.content-6').toString(),
  ]

  introduction: IItroduction = {
    title: this.$t('services.GDPR.title').toString(),
    subTitle: this.$t('services.GDPR.sub-title').toString(),
    content: this.$t('services.GDPR.content').toString(),
    cert: {image: require('@/assets/images/services/GDPR/gdpr.png'), height: 100},
  }
}
</script>


