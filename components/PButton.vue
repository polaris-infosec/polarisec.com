<template>
  <b-button :variant="variant"
            :type="type"
            v-bind="$attrs"
            v-on="$listeners"
            :class="[$style.button, classes]">
    {{ text }}
    <span v-if="showIcon" class="ml-2 d-inline-flex">
        ->
    </span>
  </b-button>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
.white
.button
  font-weight 600
  font-size 16px !important
  line-height 24px
  text-align center
  padding 12px 24px
  border none

.gradient1
  background $gradient-1
  padding 16px 32px

.gradient2
  background $gradient-2

.gradient3
  background $gradient-3
  padding 10px 20px

.defaultColor
  background-color $brand-2
  color #011659
  border none !important

@media only screen and (max-width: 991px)
  .button
    font-weight 600
    font-size 14px !important
    line-height 21px
    padding 10px 12px

</style>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({})
export default class PButton extends Vue {
  @Prop({type: String}) variant: string | undefined;
  @Prop() text: any | undefined;
  @Prop({type: Number, default: 0}) gradient: number;
  @Prop({type: Boolean, default: true}) showIcon: boolean;
  @Prop({type: String}) type: string;

  get classes() {
    switch (this.gradient) {
      case 1:
        return this.$style.gradient1;
      case 2:
        return this.$style.gradient2;
      case 3:
        return this.$style.gradient3;
      default:
        return this.$style.defaultColor;
    }
  }

}
</script>


