<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 text-center flex-column align-items-center black-text">
        <h4 class="my-0 mb-3">Polaris for Enterprises</h4>
        <p class="body-2 col-9 my-0 mb-4">
          Need enterprise-grade scalability, security, and support - contact
          our sales team
        </p>
        <p-button class="col-4 my-0 mt-2" :gradient="2" text="Contact sales" :show-icon="false"/>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingContactSales extends Vue {

}
</script>

<style module lang="stylus">
@import "@/styles/config.styl"
.section
  padding 32px 0

.container
  background-color $brand-2
</style>
