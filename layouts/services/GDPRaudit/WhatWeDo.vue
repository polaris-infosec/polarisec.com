<template>
  <b-row class="p-0 m-0 d-flex mb-5 mt-5">
    <b-col class="d-flex p-0 m-0 flex-column justify-content-center col-lg-8 col-12 text-lg-left text-center">
      <div class="mb-4">
        <img v-if="mobileScreen" src="@/assets/images/services/what-we-do.png" width="280" height="280"/>
      </div>
      <h3 class="p-0 m-0 brand-2 mb-4">
        {{ $t('services.GDPR.what-we-do.text') }}
      </h3>
      <p class="p-0 m-0 body-1">
        {{ $t('services.GDPR.what-we-do.sub-title') }}
      </p>
      <b-row
        class="d-flex flex-lg-row flex-column align-items-lg-baseline align-items-center flex-lg-nowrap p-0 m-0 mt-5">
        <b-col :class="$style.contentBox" class="p-0 m-0 mb-sm-4" v-for="itemBox in processingLists"
               :key="itemBox.icon">
          <img :src="itemBox.box" :class="$style.box"/>
          <div :class="$style.content" class="d-flex flex-lg-column align-items-center justify-content-center">
            <img :src="itemBox.icon" :class="$style.boxIcon">
            <p class="p-lg-0 m-lg-0 m-0 ml-1 text-center" style="width: 80%; word-wrap: break-word; line-height: 1.1">
              {{ itemBox.title }}</p>
          </div>
          <ul class="mt-2 pt-1 caption text-left">
            <li v-for="item in itemBox.contents" :key="item" class="pb-2 pr-3">
              {{ item }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
.boxIcon
  width 48px
  height 48px

.contentBox
  position relative
  background-color #011659
  width 246px !important
  border-radius 43px
  margin-right 54px !important

.content
  position absolute
  font-family 'Inter'
  font-style normal
  font-weight 700
  font-size 44px
  line-heigh: 55px
  color #011659
  width 100%
  height 245px
  top 0

.box
  width inherit
  height 245px

@media only screen and (max-width: 991px) and (min-width: 281px)
  .boxIcon
    width 32px
    height 32px

  .content
    font-size 32px
    line-height 42px
    height 120px

  .box
    height 120px

  .contentBox
    width 320px !important
    margin-right 0 !important
    margin-top 24px !important
    border-radius 16px

</style>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {
    PButton
  }
})
export default class WhatWeDo extends Vue {

  get mobileScreen() {
    return window.screen.width < 992.0
  }

  get processingLists() {
    return [
      {
        box: this.mobileScreenResolution ? require('@/assets/images/services/GDPR/what-we-do-box-mobile.png') : require('@/assets/images/services/GDPR/what-we-do-box1.png'),
        icon: require('@/assets/images/services/GDPR/plan-icon.png'),
        title: this.$t('services.GDPR.what-we-do.plan.text'),
        contents: [
          this.$t('services.GDPR.what-we-do.plan.content-1'),
          this.$t('services.GDPR.what-we-do.plan.content-2'),
          this.$t('services.GDPR.what-we-do.plan.content-3'),
          this.$t('services.GDPR.what-we-do.plan.content-4'),
          this.$t('services.GDPR.what-we-do.plan.content-5'),
          this.$t('services.GDPR.what-we-do.plan.content-6'),
        ]
      },
      {
        box: this.mobileScreenResolution ? require('@/assets/images/services/GDPR/what-we-do-box-mobile.png') : require('@/assets/images/services/GDPR/what-we-do-box2.png'),
        icon: require('@/assets/images/services/GDPR/do-icon.png'),
        title: this.$t('services.GDPR.what-we-do.do.text'),
        contents: [
          this.$t('services.GDPR.what-we-do.do.content-1'),
          this.$t('services.GDPR.what-we-do.do.content-2'),
          this.$t('services.GDPR.what-we-do.do.content-3'),
          this.$t('services.GDPR.what-we-do.do.content-4'),
          this.$t('services.GDPR.what-we-do.do.content-5'),
        ]
      },
      {
        box: this.mobileScreenResolution ? require('@/assets/images/services/GDPR/what-we-do-box-mobile.png') : require('@/assets/images/services/GDPR/what-we-do-box1.png'),
        icon: require('@/assets/images/services/GDPR/check-icon.png'),
        title: this.$t('services.GDPR.what-we-do.check.text'),
        contents: [
          this.$t('services.GDPR.what-we-do.check.content-1'),
          this.$t('services.GDPR.what-we-do.check.content-2'),
        ]
      },
      {
        box: this.mobileScreenResolution ? require('@/assets/images/services/GDPR/what-we-do-box-mobile.png') : require('@/assets/images/services/GDPR/what-we-do-box2.png'),
        icon: require('@/assets/images/services/GDPR/act-icon.png'),
        title: this.$t('services.GDPR.what-we-do.act.text'),
        contents: [
          this.$t('services.GDPR.what-we-do.act.content-1'),
          this.$t('services.GDPR.what-we-do.act.content-2'),
        ]
      },
    ]
  };

  get mobileScreenResolution() {
    return window.screen.width < 992.0
  }
}
</script>


