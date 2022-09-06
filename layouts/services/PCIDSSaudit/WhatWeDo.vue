<template>
  <b-row class="p-0 m-0 d-flex mt-lg-0 mb-5">
    <b-col
      class="p-0 m-lg-0 mt-5 align-items-lg-start justify-content-center align-items-center col-lg-8 col-12 text-lg-left text-center">
      <div class="mb-4">
        <img v-if="mobileScreen" src="@/assets/images/services/what-we-do.png" width="280" height="280"/>
      </div>
      <h3 class="brand-2 mb-4">
        {{$t('services.PCI-DSS.what-we-do.text')}}
      </h3>
      <p class="p-0 my-0 body-1 col-lg-7 col-12">
        {{$t('services.PCI-DSS.what-we-do.content')}}
      </p>
    </b-col>

    <b-col cols="12" :class="$style.processingListContainer"
           class="d-flex p-0 flex-column flex-wrap align-content-center align-content-lg-between mt-lg-5">
      <b-col :class="$style.box" cols="0" v-for="item in processingLists" :key="item.title">
        <img src="@/assets/images/services/PCIDSS/label.png"/>
        <span :class="$style.boxTitle" class="h2">
          {{ item.title }}
        </span>
        <div :class="$style.boxContent" class="d-flex justify-content-center align-items-center caption black-text">
          {{ item.content }}
        </div>
      </b-col>
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
.box
  position relative
  height 85px
  width 350px
  margin-top 18px !important

.boxTitle
  position absolute
  left 20px
  top 6px

.boxContent
  position absolute
  left 100px
  height 68px
  max-width 240px
  bottom 0

@media only screen and (min-width: 992px)
  .processingListContainer
    max-height 493px
</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({})
export default class WhatWeDo extends Vue {

  get mobileScreen() {
    return window.screen.width < 992.0
  }

  processingLists: any [] = [
    {
      title: '01',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-1')
    },
    {
      title: '02',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-2')
    },
    {
      title: '03',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-3')
    },
    {
      title: '04',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-4')
    },
    {
      title: '05',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-5')
    },
    {
      title: '06',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-6')
    },
    {
      title: '07',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-7')
    },
    {
      title: '08',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-8')
    },
    {
      title: '09',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-9')
    },
    {
      title: '10',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-10')
    },
    {
      title: '11',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-11')
    },
    {
      title: '12',
      content: this.$t('services.PCI-DSS.what-we-do.list-processing.content-12')
    },
  ]
}
</script>


