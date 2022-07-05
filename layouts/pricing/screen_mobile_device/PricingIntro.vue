<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 text-center flex-column align-items-center">
        <h3 class="my-0 mb-3">Web Protection Plans</h3>
        <p class="body-1 my-0 mb-4">
          Try Polaris free - forever
        </p>
        <p-button class="col-6 my-0 mt-2" text="Request a Consultation" :show-icon="false" @click="goToContact()"/>
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
export default class PricingIntro extends Vue {
  goToContact() {
    return this.$router.push({path: '/contact'})
  }
}
</script>

<style module lang="stylus">
.section
  padding 48px 0

.container
  background-image url("@/assets/images/pricing/intro-bg.png")
  background-position top
  background-repeat no-repeat
  background-size cover
  background-color black
</style>
