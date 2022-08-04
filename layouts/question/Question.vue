<template>
  <div :class="$style.panel">
    <p class="body-2">{{this.$t('question.text')}} {{ step }} {{this.$t('question.text-1')}} 3 </p>
    <h5 class="fw-800 pt-4">{{ step }}. {{ question }}</h5>
    <p class="body-2" v-html="$t('question.sub-text')"></p>
    <div class="d-flex flex-wrap mb-5" style="max-width: 802px">
      <div :class="[$style.answerBox, answer === item && $style.isSelect]" v-for="item in answers" :key="item"
           @click="selectAnswer(item)">
        <span>{{ item }}</span>
      </div>
    </div>
    <p-button
      :text="(step === 3) ? this.$t('question.submit'): this.$t('question.next')"
      :class="$style.button"
      @click="nextStep(step)"/>

    <div @click="previousStep" v-if="step > 1" :class="$style.previous">
      <p class="mt-4 text-center text-7"><- {{this.$t('question.previous')}} </p>
    </div>
  </div>
</template>
<style module lang="stylus">
@media (max-width: 767px)
  .previous
    width 159px !important

  .button
    width 159px !important

@media screen and (min-width: 768px) and (max-width: 1384px)
  .button
    width 363px !important

  .previous
    width 363px !important

.button
  width 758px

.previous
  width 758px

.previous:hover
  cursor pointer

.isSelect
  background linear-gradient(142.19deg, #0D0159 1.08%, #8BDFAF 99.93%) !important
  border none !important

.panel
  padding 77px 0 200px 48px

.borderNone
  border none !important

.answerBox
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 20px;
  margin-right 25px;
  margin-bottom 30px;
  width: 363px;
  min-height: 56px;
  background: #374B61;
  border: 0.25px solid #8BDFAF;
  border-radius: 8px;
</style>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class Questions extends Vue {
  @Prop() step: number | undefined;
  @Prop() question: string | undefined;
  @Prop() answers: string[] | undefined;

  answer: string = '';

  selectAnswer(answer: string) {
    this.answer = answer;
  }

  nextStep() {
    if (!this.answer) {
      return;
    }

    switch (Number(this.step)) {
      case 1:
        localStorage.setItem('question1', this.answer);
        break;
      case 2:
        localStorage.setItem('question2', this.answer);
        break;
      case 3:
        localStorage.setItem('question3', this.answer);
        break;
    }

    if (Number(this.step) === 3) {
      this.$router.replace(this.localePath('/recommendation'));
      return;
    }

    this.$emit('nextStep', (Number(this.step) + 1));
    this.answer = '';
  }

  previousStep() {
    this.$emit('previousStep', (Number(this.step) - 1));
  }
}
</script>

