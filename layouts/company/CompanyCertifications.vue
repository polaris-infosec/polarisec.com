<template>
  <div class="container-fluid px-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0">
        <b-col class="p-0 text-center text-lg-left mb-3 mb-lg-0" lg="3" cols="12">
          <h2>Company Certifications</h2>
        </b-col>
        <b-col class="p-0 mt-3 mt-lg-0" lg="7" cols="12" :class="$style.certContainer">
          <b-row class="mx-0 justify-content-center">
            <b-col v-for="(certs, position) in certifications" :key="position"
                   class="p-0 d-flex flex-wrap justify-content-center align-items-center"
                   :lg="position === 0 ? 5 : 7" :cols="position === 0 ? 10 : 9">
              <template v-for="certification in certs">
                <div :key="certification.img" class="mb-4 d-flex justify-content-center align-items-center p-lg-2 mr-lg-2 px-3">
                  <img :src="certification.img" alt="" :width="certification.width" :height="certification.height">
                </div>
              </template>
            </b-col>
          </b-row>
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

.certContainer
  margin 0 auto

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 73px 149px 105px 145px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyCertifications extends Vue {

  certifications: any = [
    [
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
    ],
    [
      {
        img: require('@/assets/images/company/iso.png'),
        width: 170,
        height: 170,
      },
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
    ]

  ]


}
</script>
