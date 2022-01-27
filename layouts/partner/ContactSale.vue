<template>
  <div :class="$style.contactSalePanel">
    <b-row class="d-flex justify-content-between">
      <h5 class="col-8 black-text p-0">
        Contact us at hello@polarisec.com for more information on how
        we can combine efforts in bringing cybersecurity solutions to APAC
      </h5>
      <div class="black-text d-flex flex-wrap justify-content-center align-content-center col-3">
        <div>
          <span>Contact sales</span>
          <img src="@/assets/icons/black-arrow.png" class="p-0 mb-1 ml-2" alt="Kitten" height="15">
        </div>
      </div>
    </b-row>
  </div>
</template>

<style module lang='stylus'>
.contactSalePanel
  min-height 115px
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #8BDFAF
  padding 20px 60px 0
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class ContactSale extends Vue {


}
</script>
