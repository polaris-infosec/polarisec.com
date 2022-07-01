<template>
  <div>
    <h4>
      {{ title }}
    </h4>
    <b-row class="p-0 m-0 flex-grow-1 justify-content-end" v-for="feature in features" :key="feature.title"
           :class="$style.rowContent">
      <b-col class="p-0" cols="4">
        <span :class="$style.subTitle" class="body-1">
          {{ feature.title }}
        </span>
      </b-col>
      <b-col class="d-flex justify-content-between" :class="$style.box"
             cols="8">
        <div class="p-0 d-flex justify-content-center" :class="$style.icon" v-for="item in feature.support">
          <img v-if="item.isSupport === true" src="@/assets/images/whyus/done-icon.png" width="24" height="24"/>
          <span v-if="item.isSupport !== true" class="body-1 text-center">{{ item.isSupport }}</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style module lang="stylus">
@import "@/styles/config.styl"
.rowContent
  border-bottom 0.03rem solid #374B61
  padding 12px 0 !important

.box
  padding 0 32px

.icon
  width 120px !important

</style>
<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";

export interface IFeature {
  title: string,
  support: ISupport []
}

export interface ISupport {
  comp: string,
  isSupport: any
}

@Component({})
export default class FeaturesComparisonDetailsTable extends Vue {
  @Prop() features: IFeature[];
  @Prop() title: string;
}
</script>


