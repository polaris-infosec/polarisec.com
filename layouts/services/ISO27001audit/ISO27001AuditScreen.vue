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
  background-image url("@/assets/images/services/service-bg-mobile.png")

@media only screen and (min-width: 992px)
  .certContainer
    background-image url("@/assets/images/services/ISO27001/iso27001-bg.png")

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
    this.$t('services.ISO-27001.benefits.content-1'),
    this.$t('services.ISO-27001.benefits.content-2'),
    this.$t('services.ISO-27001.benefits.content-3'),
    this.$t('services.ISO-27001.benefits.content-4'),
    this.$t('services.ISO-27001.benefits.content-5'),
  ]

  introduction: IItroduction = {
    title: this.$t('services.ISO-27001.title').toString(),
    content: this.$t('services.ISO-27001.content').toString(),
    cert: {image: require('@/assets/images/services/ISO27001/iso27001.png'), height: 80},
    route: '',
  }
}
</script>


