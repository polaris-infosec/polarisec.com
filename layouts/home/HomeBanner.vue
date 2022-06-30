<template>
  <div class="container-fluid" :class="$style.bannerContainer">
    <div class="app-width" :class="$style.bannerSection">
      <b-row
        class="mx-0 justify-content-lg-start justify-content-center align-items-center flex-lg-row flex-column text-lg-left text-center">
        <h1 class="my-0 mb-3 h3-sm">Web Protection that Never Sleeps</h1>
        <div :class="$style.divide"></div>
        <h3 class="mb-4 mt-lg-0 mt-3 h5-sm">Always On Guard</h3>
        <p class="col-lg-10 col-12 p-0 body-1 my-0 mb-5 pb-2">
          Polaris’ Web Application & API Protection (WAAP) applies <b>next-generation Artificial Intelligence (AI)</b>
          to actively detect and deter cyber attacks against your business. <b>Robust</b>, <b>adaptable</b>, and <b>accurate</b>,
          it greatly reduces the level of risk to your most critical asset - your data.
        </p>
        <p-button text="Request a Consultation" :class="$style.button" @click="onClick"/>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
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

  .divide
    display none
  .bannerSection
    padding 161px 152px 238px 152px
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
