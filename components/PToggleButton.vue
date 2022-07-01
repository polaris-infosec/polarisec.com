<template>
  <label :class="$style.switch">
    <input type="checkbox">
    <div :class="[$style.slider ,$style.round]">
      <span :class="$style.sliderText">
        <span :class="$style.off" @click="onClick('monthly')">MONTHLY</span>
        <span :class="$style.on" @click="onClick('yearly')">YEARLY</span>
      </span>
    </div>
  </label>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component({})
export default class PToggleButton extends Vue {
  @Prop({type: Boolean, default: true}) isMonthly: boolean;
  @Prop({type: Boolean, default: true}) isYearly: boolean;

  onClick(option: string) {
    option === 'monthly' ? this.$nuxt.$emit('setOption', true, false) : this.$nuxt.$emit('setOption', false, true)
  }
}
</script>

<style module lang="stylus">
@import "@/styles/config.styl"

/*Switch*/
.switch {
  position relative
  width 160px
  height 36px
  display block
  padding 8px 24px
}

.switch input {
  display none
}


.slider.round {
  border-radius 20px
}

.slider {
  position absolute
  cursor pointer
  top 0
  left 0
  right 0
  bottom 0
  background-color #fff
  -webkit-transition .4s
  transition .4s
  border-radius 20px
}

/*Moving SLider Section*/

.slider::before {
  position absolute
  content ""
  height 101%
  width 54%
  left -1px
  bottom 0
  background-color #011659
  -webkit-transition .2s
  transition .2s
  border-radius 20px
}

/*Slider Text*/

.sliderText {
  position absolute
  transform translate(-50%, -50%)
  top 50%
  left 50%
  width 100%
  text-align center
}

.sliderText > span {
  color $brand-2
  width 50%
  display block
  float left
  -webkit-transition .2s
  transition .2s
  font-weight 500
  font-size 12px
  line-height 16px
}


/*Changes on Slide*/

input:checked + .slider::before {
  -webkit-transform translateX(87%)
  -ms-transform translateX(87%)
  transform translateX(87%)
}

input:checked + .slider .off {
  color #93A1B4
}

input:checked + .slider .on {
  color $brand-2
}

.slider .sliderText .on {
  color #93A1B4
}
</style>
