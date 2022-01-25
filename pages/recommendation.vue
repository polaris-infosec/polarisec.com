<template>
  <div>
    <div :class="$style.introPanel">
      <h2>Here’s your personalized recommendation</h2>
      <p class="text-6">
        Based on the type of website you have and your needs, we recommend the following plan and add-ons.
      </p>
      <p :class="$style.action" class="brand-2">
        Start over ->
      </p>
    </div>
    <div class="d-flex" :class="$style.recommendedPlanPanel">
      <div class="col-3 mr-5">
        <p class="text-6">
          Recommended Plan
        </p>
        <div class="mb-4 mt-4 divide"></div>
        <p class="text-8">
          Enterprise + Add-Ons
        </p>
        <p class="text-6">
          Advanced features and dedicated support.
        </p>
        <div class="mb-4 mt-4 divide"></div>
        <h5 class="fw-800">
          Contact sales
        </h5>
        <a href="/contact"><p-button class="col-12 mt-5" :gradient="1" text="Next"></p-button></a>
      </div>
      <div class="col-5 ml-5">
          <p class="text-6">
            ADD-ONS AND PRODUCT RECOMMENDATIONS
          </p>
        <div :class="$style.box">
            <p class="body-1 font-weight-bold">
              Enterprise - Managed Security Services
            </p>
            <p class="brand-2" :class="$style.action">
              Learn more ->
            </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style module lang="stylus">
.box
  width 353px
  height 154px
  border 0.25px solid #8BDFAF
  border-radius 12px
  box-sizing border-box
  left: 41.67%;
  right: 33.82%;
  top: 35.17%;
  bottom: 54.64%;
  background-color #1B1C1D
  padding 16px 0 0 18px

.action
  font-weight 600
  font-size 16px
  line-height 21px

.introPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/recommendation-bg.png")
  padding 76px 0 82px 166px

.recommendedPlanPanel
  background-color #0F0F0F
  padding 59px 0 185px 152px

</style>

<script lang="ts">
import {Vue,Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/question/Introduction.vue";
import Question from "~/layouts/question/Question.vue";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton, Question, Introduction}
})
export default class Recommendation extends Vue{

}
</script>

