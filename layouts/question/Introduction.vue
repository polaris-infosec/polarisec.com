<template>
  <div :class="$style.panel">
    <p :class="$style.introduction" v-html="$t('question.introduction')">
    </p>
    <nuxt-link :to="localePath('/web-protection')">
    <p class="brand-2 mt-5 pt-3" :class="$style.action">
      {{this.$t('question.skip-question')}} ->
    </p>
    </nuxt-link>
  </div>
</template>
<style module lang="stylus">
.panel
  background-color #1B1C1D
  padding 138px 28px 0 19px

.action
  font-weight 600
  font-size 16px
  line-height 21px

.introduction
  font-weight 800
  font-size 32px
  line-height 48px
  word-break break-word
</style>

<script lang="ts">
import {Vue,Component} from "nuxt-property-decorator";

@Component({})
export default class Introduction extends Vue{

}
</script>

