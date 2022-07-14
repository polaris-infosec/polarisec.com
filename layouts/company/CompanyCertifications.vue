<template>
  <div class="container-fluid px-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0 justify-content-between">
        <b-col class="p-0 text-center text-lg-left mb-3 mb-lg-0" lg="3" cols="12">
          <h2>Company Certifications</h2>
        </b-col>
        <b-col class="p-0 mt-3 mt-lg-0 d-flex flex-wrap flex-lg-row justify-content-lg-start justify-content-center"
               lg="8" cols="12">
          <b-col class="p-0 d-flex justify-content-center flex-wrap" lg="4" cols="10">
            <div v-for="cert in leftCerts" :key="cert.img" class="mx-2 mx-lg-0 mr-lg-3 pb-3 pb-lg-0">
              <img :src="cert.img" :width="cert.width" :height="cert.height">
            </div>
          </b-col>
          <b-col class="p-0 d-flex justify-content-center flex-wrap mt-4 mx-lg-5 mt-lg-0" lg="2" cols="12">
            <img src="@/assets/images/company/iso.png" width="170" height="170">
          </b-col>
          <b-col class="p-0 d-flex justify-content-center flex-wrap mt-4 mt-lg-0" lg="4" cols="8">
            <div v-for="cert in rightCerts" :key="cert.img" class="mx-2 mx-lg-0 ml-lg-3 pt-lg-0 pt-3 pb-lg-0">
              <img :src="cert.img" :width="cert.width" :height="cert.height">
            </div>
          </b-col>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-image url("@/assets/images/company/cert-bg.png")
  background-repeat: no-repeat;
  background-size: cover;

.bodyContainer
  padding 70px 16px 127px 16px

  h2
    color $text-8

.leaderContainer
  margin-bottom 14px
  padding 18px 16px


@media only screen and (min-width: 992px)
  .bodyContainer
    padding 73px 149px 105px 145px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyCertifications extends Vue {
  get rightCerts() {
    return [
      {
        img: require('@/assets/images/company/csslp.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/cissp.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/aws-cert.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/ceh.png'),
        width: 65,
        height: 65,
      },
    ]
  }

  get leftCerts() {
    return [
      {
        img: require('@/assets/images/company/gsec.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gpen.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gcfa.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gcih.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/giac.png'),
        width: 65,
        height: 65,
      }
    ]
  }

}
</script>
