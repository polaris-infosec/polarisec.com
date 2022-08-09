<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="p-0 m-0 flex-grow-1">
        <p class="text-8 p-0 m-0 col-7 mb-5">
          {{ $t('whyUs.feature-comparison.title') }}
        </p>
        <div class="flex-grow-1 d-flex justify-content-end">
          <b-col :class="$style.partners" class="m-0 d-flex justify-content-between" cols="8">
            <img v-for="item in partners" :key="item.image" :src="item.image" height="48" width="120"/>
          </b-col>
        </div>
      </b-row>
      <features-comparison-details/>
    </div>
  </div>
</template>
<style module lang="stylus">
@import "@/styles/config.styl"
.section
  padding 64px 60px 76px 153px

.container
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: bottom
  background-size cover
  background-image url("assets/images/whyus/comparison-bg.png")

.partners
  padding 24px 32px
  background-color $brand-2
  border-radius 8px
  gap 32px

</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import FeaturesComparisonDetails from "~/layouts/whyus/FeaturesComparisonDetail.vue";

@Component({
  components: {FeaturesComparisonDetails}
})
export default class FeaturesComparison extends Vue {
  partners: any [] = [
    {
      image: require('@/assets/images/whyus/polaris.png')
    }, {
      image: require('@/assets/images/whyus/cloudflare.png')
    }, {
      image: require('@/assets/images/whyus/f5.png')
    }, {
      image: require('@/assets/images/whyus/imperva.png')
    },
  ]
}
</script>


