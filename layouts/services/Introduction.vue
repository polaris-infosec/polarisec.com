<template>
  <b-row class="p-0 m-0 d-flex justify-content-lg-between justify-content-center pr-lg-5">
    <b-col class="col-lg-8 col-12 p-0 m-0 order-lg-0 order-1 text-lg-left text-center">
      <div class="d-flex justify-content-lg-start justify-content-center align-items-center p-0 mb-4 col-12">
        <span class="mr-lg-3 text-left text-9 h3-sm">{{ introduction.title }}</span>
        <template v-if="introduction.cert">
          <img :src="introduction.cert.image" :height="introduction.cert.height"/>
        </template>
      </div>
      <template v-if="introduction.subTitle">
        <p class="p-0 m-0 mb-4 body-1"><b>{{ introduction.subTitle }}</b></p>
      </template>

      <p class="p-0 m-0 mt-2 body-1" v-html="introduction.content" style="max-width: 670px">
      </p>
      <p-button class="mt-5" :text="$t('button-group.button-1')" @click="onClick()"/>
    </b-col>
    <b-col
      class="col-lg-4 col-12 mx-0 p-0 pt-4 mb-4 mt-lg-0 justify-content-center justify-content-lg-end d-flex order-0 order-lg-1">
      <img src="~/assets/images/services/introduction.png" alt="" :class="$style.image"/>
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
.image
  width 320px
  height 320px

@media only screen and (max-width: 575px)
  .image
    width 280px !important
    height 280px !important
</style>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

export interface IItroduction {
  title?: string,
  subTitle?: string,
  cert?: {
    image?: any,
    height?: number,
  },
  content?: string,
  route?: string
}

@Component({
  components: {
    PButton
  }
})
export default class Introduction extends Vue {
  @Prop() introduction: IItroduction;

  onClick() {
    this.$router.push({path: this.localePath('/contact')});
  }
}
</script>


