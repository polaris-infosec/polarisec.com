<template>
  <b-row class="mx-0 d-flex justify-content-between mt-5 pt-lg-4 mb-5">
    <b-col
      class="d-flex p-0 m-0 flex-column col-lg-8 col-12 order-1 order-lg-0 text-lg-left text-center">
      <h3 class="p-0 m-0 brand-2 mb-4">
        {{$t('services.PCI-DSS.benefits.text')}}
      </h3>
      <ul :class="$style.content" class="body-1 m-0 p-0 pl-lg-4" style="max-width: 680px">
        <li v-for="item in benefits" :key="item" class="mb-2 pb-1">
          <span v-html="item"></span>
        </li>
      </ul>
    </b-col>
    <b-col
      class="col-lg-4 col-12 p-0 mb-4 mt-lg-0 mt-4 d-flex justify-content-center justify-content-lg-end align-items-center order-lg-1 order-0">
      <img src="~/assets/images/services/benefit.png" alt="" :class="$style.image"/>
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
.content
  li:last-child
    margin-bottom 0 !important
    padding-bottom 0 !important

.image
  width 350px
  height 350px

@media only screen and (max-width: 991px)
  ul.content
    list-style-type none

  .image
    width 250px
    height 250px

</style>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class Benefit extends Vue {
  @Prop() benefits?: string[];
}
</script>


