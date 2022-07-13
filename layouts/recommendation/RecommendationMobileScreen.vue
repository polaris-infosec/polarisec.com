<template>
  <div :class="$style.section" class="text-center">
    <h3 class="mb-4">Here’s your personalized recommendation</h3>
    <p class="body-2 pb-3">Based on the type of website you have
      and your needs, we recommend the following plan and add-ons.</p>
    <b-col :class="$style.box" class="d-flex flex-column align-items-center mb-4">
      <div :class="$style.tag">
        <span class="caption text-uppercase">recommendation plan</span>
      </div>
      <h5 class="font-weight-bold brand-2 mb-4">{{ plan }}</h5>
      <p class="body-2 col-8">Advanced features and
        dedicated support.</p>
    </b-col>
    <b-col v-if="addOns && addOns !== 'None'" :class="$style.box"
           class="d-flex flex-column align-items-center justify-content-center mt-2">
      <div :class="$style.tag">
        <span class="caption text-uppercase">Add-on</span>
      </div>
      <p class="body-1 font-weight-bold col-11">
        {{ addOns }}
      </p>
    </b-col>
    <p-button :gradient="2" :show-icon="false" text="Contact sales" @click="goToContact()"/>
  </div>
</template>

<style module lang="stylus">
@import "@/styles/config.styl"
.section
  background-image url("@/assets/images/recommedation/recommendation-bg.png")
  background-repeat no-repeat
  background-size cover
  background-position bottom
  padding 32px 16px 129px

.box
  padding 60px 12px
  border-radius 16px
  background-color #374B61
  position relative

.tag
  padding 8px 12px
  background $gradient-2
  position absolute
  top 0
  right 0
  border-top-right-radius 16px

</style>
<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class RecommendationMobileScreen extends Vue {
  @Prop() plan: string
  @Prop() addOns: string

  goToContact() {
    return this.$router.push({path: '/contact'})
  }
}
</script>

