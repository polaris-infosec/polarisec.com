<template>
  <b-row class="p-0 m-0 d-flex mt-lg-0 mb-5">
    <b-col
      class="p-0 m-lg-0 mt-5 align-items-lg-start justify-content-center align-items-center col-lg-8 col-12 text-lg-left text-center">
      <div>
        <img v-if="mobileScreen" src="@/assets/images/services/what-we-do.png" width="280" height="280"/>
      </div>
      <h3 class="brand-2 p-lg-0 pt-5 mb-4">
        What we do
      </h3>
      <p class="p-0 body-1 col-lg-7 col-12">
        Audits follow along with the 12 PCI-DSS compliance standards.
        Ensure your organization is ready to securely manage
        your customers' card data and provide them with additional
        assurance that you're continuing to look out for their data
        safety and privacy.
      </p>
    </b-col>

    <div class="d-flex flex-wrap justify-content-lg-between justify-content-center mt-lg-5">
      <b-col :class="$style.box" cols="0" v-for="item in processingLists" :key="item.title">
        <img src="@/assets/images/services/PCIDSS/label.png"/>
        <span :class="$style.boxTitle" class="h2">
          {{ item.title }}
        </span>
        <div :class="$style.boxContent" class="d-flex justify-content-center align-items-center caption black-text">
          {{ item.content }}
        </div>
      </b-col>
    </div>
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
  right 10px
  height 68px
  width 240px
  bottom 0

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
      content: 'Install and maintain a firewall configu-ration to protect cardholder data'
    },
    {
      title: '02',
      content: 'Do not use vendor-supplied defaults for system passwords and other security parameters'
    },
    {
      title: '03',
      content: 'Protect stored cardholder data'
    },
    {
      title: '04',
      content: 'Encrypt transmission of cardholder data across open, public networks'
    },
    {
      title: '05',
      content: 'Use and regularly update anti-virus software or programs'
    },
    {
      title: '06',
      content: 'Develop and maintain secure systems and applications'
    },
    {
      title: '07',
      content: 'Restrict access to cardholder data by business need to know'
    },
    {
      title: '08',
      content: 'Assign a unique ID to each person with computer access'
    },
    {
      title: '09',
      content: 'Restrict physical access to cardholder data'
    },
    {
      title: '10',
      content: 'Track and monitor all access to network resources and cardholder data'
    },
    {
      title: '11',
      content: 'Regularly test security systems and processes'
    },
    {
      title: '12',
      content: 'Maintain a policy that addresses information security for all personnel'
    },
  ]
}
</script>


