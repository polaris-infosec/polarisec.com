<template>
  <div class="container-fluid" :class="$style.bannerContainer">
    <div :class="$style.bannerSection" class="d-flex justify-content-center text-center align-items-center app-width">
      <b-col class="p-0" cols="12" lg="7">
        <h1 class="h2-sm">Simplifying the <span class="brand-2">protection of your critical assets</span> from the world’s greatest cyber threats.</h1>
      </b-col>
    </div>
  </div>
</template>

<style module lang='stylus'>
  @import "@/styles/config.styl"
  .bannerSection
    padding 16px
    min-height 515px

  .bannerContainer
    background-image url("@/assets/images/company/banner.png")
    background-color: $background-1
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyBanner extends Vue {

}
</script>
