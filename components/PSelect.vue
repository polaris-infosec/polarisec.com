<template>
  <div :class="$style.dropdown" class="text-left">
    <div :class="$style.dropdownSelect" v-click-outside="externalClick" @click="activeDropdownList()">
          <span :class="[$style.select, itemSelect && $style.whiteText]">
            {{ itemSelect ? itemSelect.content : placeHolder }}
          </span>
    </div>

    <div :class="[$style.dropdownList, isActive && dropdownListActive]">
      <div :class="$style.dropdownItem" v-for="option in options" :key="option.content"
           @click="setSelect(option)">
        <b-row class="mx-0 flex-grow-1 align-items-center">
          <b-col class="p-0 d-flex justify-content-center" cols="1">
            <img v-if="option.isSelect" src="@/assets/icons/white-done.png" width="24" height="24">
          </b-col>
          <b-col class="p-0" cols="11">
            <span>{{ option.content }}</span>
          </b-col>
        </b-row>
      </div>
    </div>
    <div :class="[$style.dropdownListExpand, isVisible && dropdownListActive]">
      <template v-if="itemSelect">
        <div :class="$style.dropdownItem" v-for="option in itemSelect.subOptions" :key="option.content"
             @click="setSubOptionSelect(option)" v-click-outside="externalClickOther">
          <b-row class="mx-0 flex-grow-1 align-items-center">
            <b-col class="p-0 d-flex justify-content-center" cols="1">
              <img v-if="option.isSelect" src="@/assets/icons/white-done.png" width="24" height="24">
            </b-col>
            <b-col class="p-0" cols="11">
              <span>{{ option.content }}</span>
            </b-col>
          </b-row>
        </div>
      </template>
    </div>
  </div>
</template>
<style module lang="stylus">
.dropdown
  width 100%

.dropdownListActive
  opacity 1 !important
  visibility visible !important
  display initial !important

.dropdownSelect
  padding 0.375rem 1.75rem 0.375rem 1.025rem
  border-radius inherit
  width 100%
  background-color inherit
  color #6c757a
  display flex
  align-items center
  justify-content space-between
  font-size 1rem
  font-weight 400
  line-height 1.5
  cursor pointer
  height 56px
  position relative

.dropdownList
  border-radius inherit
  width 100%
  background-color #060606
  position absolute
  top 90%
  left 0
  right 0
  z-index 1
  display none

.dropdownItem
  font-size 1rem
  font-weight 400
  line-height 1.5
  color white
  padding 1rem 0
  border-radius inherit

.dropdownItem:hover
  background-color dimgray
  cursor pointer

.dropdownListExpand
  border-radius inherit
  width 100%
  background-color #060606
  position absolute
  top 90%
  left 0
  right 0
  z-index 2
  display none

.whiteText
  color white !important
</style>
<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";

const vClickOutside = require('v-click-outside');

export interface IOption {
  content: string,
  isSelect: boolean,
  subOptions?: IOption[]
}

Vue.directive('v-click-outside', vClickOutside);
@Component({})
export default class PSelect extends Vue {
  @Prop() placeHolder: string;
  @Prop() options: IOption[];
  isActive: boolean = false;
  @Prop() itemSelect: IOption;
  subOptions: IOption [] = [];
  isVisible: boolean = false;

  setSelect(option: IOption) {
    if (option.subOptions) {
      this.subOptions = option.subOptions
      this.isActive = false
      this.isVisible = true
    }

    this.options.forEach((item) => {
      item.content === option.content ? item.isSelect = true : item.isSelect = false
    })
    this.$nuxt.$emit('setSelectOption', option)
  }

  setSubOptionSelect(subOption: IOption) {
    this.itemSelect = subOption
    this.subOptions.forEach((item) => {
      item.content === subOption.content ? item.isSelect = true : item.isSelect = false
    })
    this.$nuxt.$emit('setSelectOption', subOption)
  }

  activeDropdownList() {
    this.isActive = !this.isActive
    this.isVisible = false
  }

  get dropdownListActive() {
    return this.$style.dropdownListActive
  }

  externalClick() {
    this.isActive = false
  }

  externalClickOther() {

  }
}
</script>

