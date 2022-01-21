<template>
  <b-button :variant="variant" :class="$style.button">{{text}}</b-button>
</template>
<style module lang="stylus">
  @import "../styles/main.styl"

  .button
    font-weight 500
    font-size 14px !important
    line-height 18px
    text-align center

</style>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({})
export default class PButton extends Vue {
  @Prop({type:String}) variant: string | undefined;
  @Prop({type:String}) text: string | undefined;
}
</script>


