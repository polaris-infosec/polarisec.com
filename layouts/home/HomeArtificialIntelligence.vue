<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0 justify-content-between">
        <b-col class="p-0 d-flex justify-content-center" cols="12" lg="6" order-lg="1">
          <img :class="$style.img" src="@/assets/images/home/artificial-intelligence.png" alt="">
        </b-col>
        <b-col :class="$style.textContainer"
               class="p-0 d-flex flex-column justify-content-center text-lg-left text-center mt-lg-0 mt-5" order-lg="0"
               lg="5" cols="12">
          <h2 class="my-0 mb-4 text-lg-left" v-html="$t('home.feature-2.title')"></h2>
          <p class="my-0 body-1 mb-4" v-html="$t('home.feature-2.content-1')">
          </p>
          <p class="body-1 my-0" v-html="$t('home.feature-2.content-2')">
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-2
  background-image url("@/assets/images/home/artificial-intelligence-bg.png")
  background-position bottom
  background-repeat no-repeat
  background-size cover

.bodyContainer
  padding 71px 16px 47px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-right 60px

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
export default class HomeArtificialIntelligence extends Vue {


}
</script>
