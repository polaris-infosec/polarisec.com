<template>
  <div :class="$style.bannerContainer">
    <div class="app-width" :class="$style.bannerSection">
      <b-row class="mx-0">
        <b-col cols="12" lg="8"
               class="p-0 justify-content-lg-start justify-content-center align-items-center flex-lg-row flex-column text-lg-left text-center">
          <h2 class="my-0 text-lg-left mb-3 h3-sm">{{$t('home.header-title')}}</h2>
          <div :class="$style.divide"></div>
          <h3 class="mb-4 mt-lg-0 mt-3 h5-sm">{{$t('home.header-slogan')}}</h3>
          <p class="col-lg-11 col-12 p-0 body-1 my-0 mb-5 pb-2" v-html="$t('home.header-content')">
          </p>
          <p-button :text="$t('button-group.button-1')" :class="$style.button" @click="onClick"/>
        </b-col>
        <b-col
          class="p-0 d-flex flex-column align-items-lg-start align-items-center text-lg-left text-center align-items-lg-end mt-5"
          lg="4" cols="12">
          <div>
            <p class="h5 pl-lg-2 ml-1 mb-3" style="font-weight: 400 !important;">As seen on</p>
            <a
              href="https://www.gartner.com/reviews/market/web-application-and-api-protection/vendor/polaris-infosec/product/polaris-waap"
              target="_blank">
              <img src="@/assets/images/home/gartner-peerinsights-color.png" :class="$style.asSeenOn"/>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.asSeenOn
  width 266px
  height 60px

.divide
  border 2px solid $brand-1
  width 28%
  height 3px
  margin 0 auto

.bannerSection
  padding 45px 16px 65px

.bannerContainer
  background-image url("@/assets/images/home/banner-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

@media only screen and (min-width: 992px)
  .asSeenOn
    width 328px
    height 74px

  .divide
    display none

  .bannerSection
    padding 161px 60px 238px 152px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class HomeBanner extends Vue {

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
