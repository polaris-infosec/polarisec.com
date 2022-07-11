<template>
  <b-row class="mx-0 mb-5 mt-5 pt-lg-3 text-center text-lg-left">
    <h3 class="p-0 m-0 brand-2 mb-5 pb-lg-3 col-12">
      What we do
    </h3>
    <b-row class="p-0 m-0 d-flex justify-content-between">
      <b-col class="p-0 m-0 col-lg-8 col-12">
        <p :class="$style.subTitle" class="p-0">
          Retained Incident Response
        </p>
        <ul class="body-1 p-0 pl-lg-4 mt-3" :class="$style.content">
          <li v-for="item in listRetainedIncidents" :key="item" class="mt-2">
            {{ item }}
          </li>
        </ul>
      </b-col>
      <b-col class="p-0 m-0 col-lg-3 col-12">
        <img src="@/assets/images/services/incidents/what-we-do1.png" width="350" height="350"/>
      </b-col>
    </b-row>

    <b-row class="p-0 m-0 flex-grow-1 justify-content-between">
      <b-col class="p-0 m-0 col-lg-6 col-12" :order="1">
        <p :class="$style.subTitle" class="p-0">
          Retained Incident Response
        </p>
        <ul class="d-flex flex-column flex-lg-wrap body-1 p-0 pl-lg-4 mt-2 mb-lg-0 mb-5" :class="$style.content"
            style="max-height: 170px">
          <li v-for="item in listInvestigations" :key="item" class="mt-2">
            {{ item }}
          </li>
        </ul>
      </b-col>
      <b-col
        class="d-flex justify-content-lg-start justify-content-center align-items-center p-0 m-0 col-lg-6 col-12 order-0">
        <img src="@/assets/images/services/incidents/what-we-do2.png" width="330" height="250"/>
      </b-col>
    </b-row>
  </b-row>
</template>
<style module lang="stylus">
.content
  color #EFF2F7

.subTitle
  font-weight 400
  font-size 22px
  line-height 32px
  color #5DB18C
  text-transform uppercase

.image
  width 320px
  height 320px

@media only screen and (max-width: 991px)
  ul.content
    list-style-type none

  .image
    width 250px
    height 250px
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
  listRetainedIncidents: string [] = [
    '24/7 x 365 Alert Driven Passive Monitoring',
    'Active Threat Hunting',
    'Weekly Vulnerability & Security Assessment Reports',
    'Automated Scanning of External Vulnerabilities as well as Internal, i.e., Dark Web'
  ]

  listInvestigations: string [] = [
    'Business Email Compromise',
    'Stolen Credentials',
    'Data Leaks/Breaches',
    'Phishing',
    'Ransomware',
    'Digital Forensics',
    'OWASP Top 10 and more'
  ]
}
</script>


