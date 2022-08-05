<template>
  <div :class="$style.container">
    <div :class="$style.section" class="text-center">
      <h3 class="mb-2" v-html="$t('question.introduction')"></h3>
      <nuxt-link to="/web-protection">
        <p class="mt-4" :class="$style.skipBtn"> {{this.$t('question.skip-question')}} -></p>
      </nuxt-link>
      <template v-for="question in questions">
        <question-box-mobile :key="question.number" :question="question" class="mb-5"/>
      </template>
      <p-button :text=" this.$t('question.submit')" style="font-size: 16px !important; line-height: 24px !important;" class="col-12 "
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
  padding 32px 16px 126px

.container
  background-image url("assets/images/question/question-bg.png")
  background-size cover
  background-repeat no-repeat
  background-position center

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
    return this.$router.push({path: this.localePath('/recommendation')})
  }

  get questions() {
    return [
      {
        number: 1,
        text: this.$t('question.question-1.content').toString(),
        answers: [this.$t('question.question-1.option-1'), this.$t('question.question-1.option-2'), this.$t('question.question-1.option-3')]
      },
      {
        number: 2,
        text: this.$t('question.question-2.content').toString(),
        answers: [this.$t('question.question-1.option-1'), this.$t('question.question-2.option-2'), this.$t('question.question-2.option-3')]
      },
      {
        number: 3,
        text: this.$t('question.question-3.content').toString(),
        answers: [this.$t('question.question-3.option-1'), this.$t('question.question-3.option-2'), this.$t('question.question-3.option-3'), this.$t('question.question-3.option-4')]
      },
    ]
  }
}
</script>


