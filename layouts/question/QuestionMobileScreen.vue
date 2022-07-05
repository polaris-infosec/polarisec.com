<template>
  <div :class="$style.container">
    <div :class="$style.section" class="text-center">
      <h3 class="mb-2">Some quick questions for personalized recommendations</h3>
      <nuxt-link to="/web-protection">
        <p class="mt-4" :class="$style.skipBtn">Skip questions and See all plans -></p>
      </nuxt-link>
      <template v-for="question in questions">
        <question-box-mobile :key="question.number" :question="question" class="mb-5"/>
      </template>
      <p-button text="Submit" style="font-size: 16px !important; line-height: 24px !important;" class="col-12 "
                :show-icon="false" @click="goToRecommendation()"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.skipBtn
  font-weight 600
  font-size 14px
  line-height 21px
  color #93A1B4

.section
  padding 32px 16px

.container
  background-image url("assets/images/question/question-bg.png")
  background-size cover
  background-repeat no-repeat

</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"
import QuestionBoxMobile from "~/layouts/question/QuestionBoxMobile.vue";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton, QuestionBoxMobile}
})
export default class QuestionMobileScreen extends Vue {

  goToRecommendation() {
    return this.$router.push({path: '/recommendation'})
  }

  get questions() {
    return [
      {
        number: 1,
        text: 'How many domains (webpages) does your organization manage?',
        answers: ['Just 1', '2-5', 'I have a lot!']
      },
      {
        number: 2,
        text: 'Do you have your own IT team?',
        answers: ['Yep.', 'No, but maybe one day...', 'What’s an IT team?']
      },
      {
        number: 3,
        text: 'How critical is your website to your operations?',
        answers: ['It’s mostly personal', 'It’s important for business operations', 'It’s mostly for information and promotions']
      },
    ]
  }
}
</script>


