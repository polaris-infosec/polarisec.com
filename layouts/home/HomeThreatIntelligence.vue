<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0 justify-content-between">
        <b-col class="p-0 d-flex justify-content-center" cols="12" lg="6">
          <img :class="$style.img" src="@/assets/images/home/threat-intelligence.png" alt="">
        </b-col>
        <b-col :class="$style.textContainer"
               class="p-0 d-flex flex-column justify-content-center text-lg-left text-center mt-lg-0 mt-5" lg="5"
               cols="12">
          <h2 class="my-0 mb-4">Threat Intelligence<span class="brand-2">.</span></h2>
          <p class="my-0 mb-4">
            Polaris utilizes a variety of trusted cyber intelligence sources to aggregate, compare, and analyze threat
            data to form a more comprehensive detection and defense strategy in real time as events happen.
          </p>
          <p class="body-1 my-0">
            Our threat intelligence capabilities grow alongside evolving enemy threats to stay up to date, forming <b>a
            more comprehensive advance warning system.</b>
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-1;
  background-repeat no-repeat
  background-image url("@/assets/images/home/threat-intelligence-bg.png")
  background-size: cover;
  background-position center

.bodyContainer
  padding 71px 16px 47px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-left 152px

@media only screen and (max-width: 768px)
  .img
    max-width 345px
    max-height 275px

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 162px 60px 98px 108px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeThreatIntelligence extends Vue {


}
</script>
