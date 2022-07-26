<template>
  <b-row class="mx-0 p-0" style="background-color: black">
    <b-navbar :class="$style.navigationBar" class="flex-grow-1" toggleable="xl" type="dark" variant="dark">
      <b-navbar-brand class="mr-4 pr-4">
        <nuxt-link to="/home">
          <img src="@/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten"
               height="24"
               width="140">
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :class="$style.navBarItem" href="https://polarisec.io/" target="_blank"
                      class="active mr-4 pr-3">
            Platform
          </b-nav-item>
          <b-nav-item-dropdown :class="$style.navBarItem" id="dropdown-1" text="Services" class="mr-4 pr-3 active">
            <b-dropdown-item to="/ISMA">ISMA</b-dropdown-item>
            <b-dropdown-item to="/ISO-27001">ISO 27001 Audit
            </b-dropdown-item>
            <b-dropdown-item to="/GDPR">GDPR Audit</b-dropdown-item>
            <b-dropdown-item to="/PCI-DSS">PCI-DSS Audit</b-dropdown-item>
            <b-dropdown-item to="/incident-response">Incident Response</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :class="$style.navBarItem" to="/whyus" class="active mr-4 pr-3">Why us</b-nav-item>
          <b-nav-item :class="$style.navBarItem" to="/partner" class="active mr-4 pr-3">Partners</b-nav-item>
          <b-nav-item :class="$style.navBarItem" to="/company" class="active mr-4 pr-3">Company</b-nav-item>
          <b-nav-item :class="$style.navBarItem" to="/web-protection" class="active mr-4 pr-3">Pricing</b-nav-item>
          <b-nav-item :class="$style.navBarItem" href="https://support.polarisec.com/portal/en/home" target="_blank"
                      class="active mr-4 pr-3">Support
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
      <b-dropdown id="dropdown-right" :class="$style.languageSelect" right text="" variant="none">
        <template #button-content>
          <img height="24" src="@/assets/icons/eng.png"/>
        </template>
        <b-dropdown-item v-for="language in languages" :key="language.code" @click="selectLang(language.code)">
          {{ language.text }}
        </b-dropdown-item>
      </b-dropdown>
    </b-row>
  </b-row>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
.languageSelect
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
}

@Component({
  components: {PButton}
})
export default class PNavbar extends Vue {
  language: string = ''

  get languages() {
    return [
      {
        code: 'en',
        text: "English"
      },
      {
        code: 'vi',
        text: "Vietnamese"
      },
    ]
  }

  created() {
    this.language = this.$i18n.locale;
  }

  selectLang(lang: string) {
    if (this.language === lang) {
      return
    }

    this.language = lang
    this.$router.replace(this.switchLocalePath(lang))
  }

  mounted() {
    this.language = this.$i18n.locale
  }

  onClick() {
    return this.$router.push({path: '/contact'})
  }

}
</script>

