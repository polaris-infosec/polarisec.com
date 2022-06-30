<template>
  <b-row class="p-0 m-0 d-flex justify-content-between ml-lg-5 mb-5 mt-5">
    <b-col class="d-flex p-0 m-0 flex-column justify-content-center col-lg-8 col-12 order-1 text-lg-left text-center">
      <h3 class="p-0 m-0 brand-2 mb-4">
        What we do
      </h3>
      <ul :class="$style.content" class="body-1 m-0 p-0 pl-lg-4">
        <li class="mb-2 pb-1">
          Assess current Information Security governance, processes, and technical capabilities in compliance with
          recognized international standards
        </li>
        <li>
          Build up an Information Security Management System (ISMS), assist in rolling out its controls and assist you
          in the certification process for ISO 27001, as well as assisting with annual audits and renewals
        </li>
      </ul>
    </b-col>
    <b-col
      class="col-lg-4 col-12 mx-0 p-0 mb-4 mt-lg-0 justify-content-center align-items-center d-flex order-0">
      <img src="~/assets/images/services/what-we-do.png" alt="" :class="$style.image"/>
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
.image
  width 320px
  height 320px

@media only screen and (max-width: 991px)
  ul.content
    list-style-type none

  .image
    width 250px
    height 250px
</style>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {
    PButton
  }
})
export default class WhatWeDo extends Vue {

}
</script>


