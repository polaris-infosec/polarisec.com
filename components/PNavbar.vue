<template>
  <b-row class="mx-0 p-0" style="background-color: black">
    <b-navbar :class="$style.navigationBar" class="flex-grow-1" toggleable="xl" type="dark" variant="dark">
      <b-navbar-brand class="mr-5">
        <nuxt-link :to="localePath('/home')">
          <img src="@/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten"
               height="24"
               width="140">
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :class="$style.navBarItem" href="https://polarisec.io/" target="_blank"
                      class="active mr-4 pr-1">
            Platform
          </b-nav-item>
          <b-nav-item-dropdown :class="$style.navBarItem" id="dropdown-1" text="Services" class="mr-4 pr-1 active">
            <b-dropdown-item :to="localePath('/ISMA')">ISMA</b-dropdown-item>
            <b-dropdown-item :to="localePath('/ISO-27001')">ISO 27001 Audit
            </b-dropdown-item>
            <b-dropdown-item :to="localePath('/GDPR')">GDPR Audit</b-dropdown-item>
            <b-dropdown-item :to="localePath('/PCI-DSS')">PCI-DSS Audit</b-dropdown-item>
            <b-dropdown-item :to="localePath('/incident-response')">Incident Response</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/whyus')" class="active mr-4 pr-1">Why us
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/partner')" class="active mr-4 pr-1">Partners
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/company')" class="active mr-4 pr-1">Company
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/web-protection')" class="active mr-4 pr-1">Pricing
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" href="https://support.polarisec.com/portal/en/home" target="_blank"
                      class="active mr-4 pr-1">Support
            Center
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <p-button text="Get help" :class="$style.btn" :show-icon="false" @click="onClick"/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row class="mx-0 mr-lg-5 mr-1 align-items-lg-center mt-lg-0 pt-lg-0 mt-3 pt-1">
      <b-dropdown id="dropdown-1" :class="$style.languageSelect" right text="" variant="none">
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
    </b-row>
  </b-row>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
.languageSelect
  ul:before
    content ""
    position absolute
    top 0
    right 0.4rem
    border-left 6px solid transparent
    border-right 6px solid transparent
    border-bottom 6px solid #222222
    transform translateY(-100%)
    color linear-gradient(0deg, #222222, #222222)

.languageSelect
  position relative

  ul
    top 8px !important
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


.navBarItem
  li
    padding 8px 4px !important
    border-bottom 0.015em solid $brand-2 !important

  a
    border-bottom 1px solid transparent

  ul > li:last-child
    border-color transparent !important

  ul
    li
      a
        color white !important

      a:hover
        background inherit !important

  ul
  :global(.dropdown-1__BV_toggle_)
    background: linear-gradient(0deg, #222222, #222222) !important

    li
      color white !important

.navbarFont
  font-weight 400
  font-family "Inter"
  font-style normal
  font-size 16px
  line-height 26px

:global(.bg-dark)
  background-color black !important

.btn
  font-weight 500 !important
  font-size 14px !important
  line-height 18px !important

@media only screen and (max-width: 991px)
  .languageSelect
    button:after
      display none !important

  .navigationBar
    width 85% !important

@media only screen and (min-width: 992px)
  .navigationBar
    height 72px !important
    padding 24px 60px !important

  .languageSelect
    ul:before
      right 1.95rem
      border-left 8px solid transparent
      border-right 8px solid transparent
      border-bottom 8px solid #222222

    ul
      left 20px !important

    button
      height 38px

  .navBarItem
    a:hover
      color $brand-2 !important
      border-bottom 1px solid $brand-2 !important

    li
      padding 8px 4px !important
      border-bottom 0.015em solid $brand-2 !important

      a:hover
        color $brand-2 !important
        border-color transparent !important
</style>

<script lang="ts">
import {Vue, Component, Watch} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

export interface ILanguage {
  code: string,
  text: string
  icon?: any
}

@Component({
  components: {PButton}
})
export default class PNavbar extends Vue {
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
    this.$router.replace(this.switchLocalePath(lang.code))
  }

  onClick() {
    return this.$router.push({path: this.localePath('/contact')})
  }

}
</script>

