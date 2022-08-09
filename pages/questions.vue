<template>
  <div :class="$style.questionsPanel" id="questions">
    <div :class="$style.questionsSection" class="d-flex app-width">
      <question-mobile-screen v-if="mobileScreen"/>
      <template v-else>
        <introduction :class="$style.introduction"/>
        <question v-if="step === 1" class="col-8" :step="step" :answers="question1.answers"
                  :question="question1.question"
                  @nextStep="nextStep" @previousStep="previousStep"/>
        <question v-if="step === 2" class="col-8" :step="step" :answers="question2.answers"
                  :question="question2.question"
                  @nextStep="nextStep" @previousStep="previousStep"/>
        <question v-if="step === 3" class="col-8" :step="step" :answers="question3.answers"
                  :question="question3.question"
                  @nextStep="nextStep" @previousStep="previousStep"/>
      </template>
    </div>
  </div>
</template>
<style module lang="stylus">
.introduction
  max-width 354px

.questionsSection
  padding-left 32px 16px
  box-sizing border-box
  min-height 761px

.questionsPanel
  background-color #0F0F0F

@media only screen and (min-width: 992px)
  .questionsSection
    padding-left 152px
</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/question/Introduction.vue";
import Question from "~/layouts/question/Question.vue";
import QuestionMobileScreen from "~/layouts/question/QuestionMobileScreen.vue";

@Component({
  components: {QuestionMobileScreen, Question, Introduction}
})
export default class Questions extends Vue {
  step: number = 1;
  question1 = {
    question: 'question.question-1.content',
    answers: [
      'question.question-1.option-1', 'question.question-1.option-2', 'question.question-1.option-3'
    ]
  }

  question2 = {
    question: 'question.question-2.content',
    answers: [
      'question.question-2.option-1', 'question.question-2.option-2', 'question.question-2.option-3'
    ]
  }

  question3 = {
    question: 'question.question-3.content',
    answers: [
      'question.question-3.option-1', 'question.question-3.option-2', 'question.question-3.option-3', 'question.question-3.option-4'
    ]
  }

  nextStep(step: number) {
    this.step = step;
  }

  previousStep(step: number) {
    this.step = step;
  }

  get mobileScreen() {
    return window.screen.width < 992.0
  }
}
</script>

