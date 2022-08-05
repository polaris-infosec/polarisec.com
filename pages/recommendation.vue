<template>
  <div>
    <recommendation-mobile-screen :plan="planLeftAttribute+ (planRightAttribute ? ` + ` : ``) + planRightAttribute"
                                  :add-ons="addOn"
                                  v-if="mobileScreen"/>
    <div v-else>
      <div :class="$style.introPanel">
        <div class="app-width " :class="$style.introSection">
          <h2 class="text-lg-left m-lg-0" v-html="$t('recommendation.title')"></h2>
          <p class="text-6 pb-4 mt-4" v-html="$t('recommendation.sub-title')">
          </p>
          <nuxt-link :to="localePath('/questions')">
            <p :class="$style.action" class="brand-2 mt-3">
              {{ this.$t('recommendation.start-over') }} ->
            </p>
          </nuxt-link>
        </div>
      </div>

      <div :class="$style.recommendedPlanPanel">
        <div class="app-width d-flex" :class="$style.recommendedPlanSection">
          <div class="col-3 mr-5">
            <p class="text-6" v-html="$t('recommendation.plan')">
            </p>
            <div class="mb-4 mt-4 divide"></div>
            <p class="text-8 pt-2">
              {{ planLeftAttribute }} <span v-if="planRightAttribute"> + </span> {{ planRightAttribute }}
            </p>
            <p class="text-6 pb-3" v-html="$t('recommendation.sub-text')">
            </p>
            <div class="mb-4 mt-4 divide"></div>
            <h5 class="fw-800" v-html="$t('pricing.contact-sales')">
            </h5>
            <p-button class="col-12 mt-5" :gradient="2" :text=" this.$t('pricing.contact-sales')" @click="onClick"/>
          </div>
          <div v-if="planRightAttribute === (this.$t('pricing.add-ons.title'))" class="col-5 ml-5">
            <p class="text-6 pb-3" v-html="$t('recommendation.add-ons')">
            </p>
            <div :class="$style.box">
              <p class="body-1 font-weight-bold">
                {{ addOn }}
              </p>
              <nuxt-link :to="localePath('/web-protection')">
                <p class="brand-2" :class="$style.action">
                  {{ this.$t('recommendation.learn-more') }} ->
                </p>
              </nuxt-link>
            </div>
          </div>
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

.introSection
  padding 76px 0 82px 166px

.introPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/recommendation-bg.png")

.recommendedPlanSection
  padding 59px 0 185px 152px

.recommendedPlanPanel
  background-color #0F0F0F

</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/question/Introduction.vue";
import Question from "~/layouts/question/Question.vue";
import PButton from "~/components/PButton.vue";
import RecommendationMobileScreen from "~/layouts/recommendation/RecommendationMobileScreen.vue";

@Component({
  components: {RecommendationMobileScreen, PButton, Question, Introduction}
})
export default class Recommendation extends Vue {
  planLeftAttribute: string = '';
  planRightAttribute: string = '';
  addOn: string = '';

  created() {
    const question1 = localStorage.getItem('question1');
    const question2 = localStorage.getItem('question2');
    const question3 = localStorage.getItem('question3');

    if (!question1 || !question2 || !question3) {
      return this.$router.push({path: this.localePath('/questions')})
    }

    this.recommendation(question1, question2, question3);
  }

  recommendation(question1: string, question2: string, question3: string) {
    if (question1 === 'question.question-1.option-3') {
      this.planLeftAttribute = this.$t('pricing.plans.enterprise').toString();
      this.planRightAttribute = this.$t('pricing.add-ons.title').toString();
      this.addOn = this.$t('recommendation.add-on').toString();
    } else {
      switch (question3) {
        case 'question.question-3.option-1':
          this.planLeftAttribute = this.$t('pricing.plans.basic').toString();
          break;
        case 'question.question-3.option-3':
          this.planLeftAttribute = this.$t('pricing.plans.standard').toString();
          break;
        case 'question.question-3.option-2':
          this.planLeftAttribute = this.$t('pricing.plans.professional').toString();
          break;
        case 'question.question-3.option-4':
          this.planLeftAttribute = this.$t('pricing.plans.enterprise').toString();
          break;
      }

      if (question2 === 'question.question-2.option-2' || question2 === 'question.question-2.option-3') {
        this.planRightAttribute = this.$t('pricing.add-ons.title').toString();
        switch (this.planLeftAttribute) {
          case this.$t('pricing.plans.enterprise'):
            this.addOn = this.$t('pricing.managed-security-services-add-on.title').toString();
            break;
          case this.$t('pricing.plans.standard'):
            this.addOn = this.$t('pricing.zero-trust-access-add-on.title').toString();
            break;
          case this.$t('pricing.plans.professional'):
            this.addOn = this.$t('pricing.managed-security-services-add-on.title').toString();
            break;
          default:
            this.planRightAttribute = '';
            this.addOn = 'None'
        }
      }
    }
  }

  get mobileScreen() {
    return window.screen.width < 992.0
  }

  onClick() {
    this.$router.push({path: this.localePath('/contact')});
  }
}
</script>

