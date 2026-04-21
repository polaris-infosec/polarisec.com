<template>
  <b-dropdown id="dropdownMenuButton" :class="$style.languageSelect" right text="" variant="none">
    <template #button-content>
      <img height="24" :src="language.icon"/>
    </template>
    <b-dropdown-item v-for="language in languages" :key="language.code" @click="selectLang(language)"
                     class="caption-2">
      <div class="d-flex align-items-center">
        <img height="24" :src="language.icon" class="mr-1"/>
        {{ language.text }}
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>
<style module lang="stylus">
.languageSelect
  ul:before
    content ""
    position absolute
    top 0
    right 1rem
    border-left 6px solid transparent
    border-right 6px solid transparent
    border-bottom 6px solid #222222
    transform translateY(-100%)
    color linear-gradient(0deg, #222222, #222222)

.languageSelect
  position relative

  ul
    top 5px !important
    left 10px !important
    background linear-gradient(0deg, #222222, #222222) !important
    border-radius 8px !important
    min-width 1rem !important
    padding 8px !important

    li
      a
        color white !important
        padding 0 !important

      a:hover
        background inherit !important
        color $brand-2 !important

  button:focus
    box-shadow none !important

  button
    width 8px
    background-color black !important
    border-color black !important
    color white !important
    display flex
    justify-content center
    align-items center
    height 26px

@media only screen and (max-width: 991px)
  .languageSelect
    button:after
      display none !important

@media only screen and (min-width: 992px)
  .languageSelect
    ul:before
      right 4rem
      border-left 8px solid transparent
      border-right 8px solid transparent
      border-bottom 8px solid #222222

    ul
      left 53px !important

    button
      height 38px
</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {ILanguage} from "~/components/PNavbar.vue";

@Component({})
export default class PLanguageSelect extends Vue {
  language: ILanguage | undefined = {
    code: '',
    text: '',
    icon: null
  }

  languages: ILanguage [] =
    [
      {
        code: 'en',
        text: "English",
        icon: require("@/assets/icons/eng.png")
      },
      {
        code: 'vi',
        text: "Vietnamese",
        icon: require("@/assets/icons/vietnam.png")
      },
    ]

  mounted() {
    this.language = this.languages.find((item) => item.code === this.$i18n.locale)
    this.languages = this.languages.filter((item) => item !== this.language)
  }

  selectLang(lang: ILanguage) {
    if (!this.language) {
      return
    }

    this.languages = [...this.languages, this.language]
    this.languages = this.languages.filter((item) => item !== lang)
    this.language = lang
    this.$i18n.locale = lang.code
  }
}
</script>


