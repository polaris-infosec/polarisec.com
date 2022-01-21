<template>
  <b-button v-if="backgroundColor === 'gradient-1'" :variant="variant" :class="[$style.button, $style.gradient1]">{{ text }}</b-button>
  <b-button v-else-if="backgroundColor === 'gradient-2'" :variant="variant" :class="[$style.button, $style.gradient2]">{{ text }}</b-button>
  <b-button v-else :variant="variant" :class="[$style.button, $style.gradient3]">{{ text }}</b-button>
</template>
<style module lang="stylus">
@import "../styles/main.styl"

.button
  font-weight 500
  font-size 14px !important
  line-height 18px
  text-align center

.gradient1
  background $gradient-1

.gradient2
  background $gradient-2

.gradient3
  background $gradient-3

</style>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({})
export default class PButton extends Vue {
  @Prop({type: String}) variant: string | undefined;
  @Prop({type: String}) text: string | undefined;
  @Prop({type: String}) backgroundColor: string | undefined;
}
</script>


