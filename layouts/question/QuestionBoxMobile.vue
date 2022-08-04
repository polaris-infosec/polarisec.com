<template>
  <b-row class="mx-0 justify-content-center">
    <p class="mt-3 body-2">{{this.$t('question.text')}} {{ question.number }} {{this.$t('question.text-1')}} 3</p>
    <p class="mt-3 mb-2 body-1 font-weight-bold">{{ question.number + '. ' + question.text }}</p>
    <p class="caption-2" v-html="$t('question.sub-text')"></p>
    <b-col cols="12" class="body-2 mt-3 text-left" :class="[$style.answerBox, answer === answerSelect && isSelect]"
           v-for="answer in question.answers"
           :key="answer"
           @click="selectAnswer(answer)"
    >
      {{ answer }}
    </b-col>
  </b-row>
</template>
<style module lang="stylus">
@import "@/styles/config.styl"
.isSelect
  background $gradient-2 !important

.answerBox
  padding 10px
  font-weight 700
  background-color #374B61
  border-radius 4px

.section
  padding 32px 16px

.container
  background-image url("assets/images/question/question-bg.png")
</style>
<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator"

export interface IQuestion {
  number: number,
  text: string,
  answers: string[]

}


@Component({})
export default class QuestionBoxMobile extends Vue {
  @Prop() question: IQuestion
  answerSelect: string = ''

  selectAnswer(answer: string) {
    this.answerSelect = answer
    localStorage.setItem('question' + this.question.number, answer);
  }

  get isSelect() {
    return this.$style.isSelect
  }
}
</script>


