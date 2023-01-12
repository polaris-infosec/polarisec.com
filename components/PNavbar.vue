<template>
  <b-row class="mx-0 p-0" style="background-color: black">
    <b-navbar :class="$style.navigationBar" class="body-2" toggleable="xl" type="dark" variant="dark">
      <b-navbar-brand class="mr-5">
        <nuxt-link :to="localePath('/home')">
          <img src="@/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten"
               height="24"
               width="140">
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" :class="$style.navCollapse" is-nav>
        <b-navbar-nav :class="$style.navContainer">
          <b-nav-item :class="$style.navBarItem" href="https://polarisec.io/" target="_blank"
                      class="active mr-4 pr-1">
            {{$t('nav.platform')}}
          </b-nav-item>
          <b-nav-item-dropdown :class="$style.navBarItem" id="dropdown-1" :text="$t('nav.services.text')" class="mr-4 pr-1 active">
            <b-dropdown-item :to="localePath('/ISMA')">{{$t('nav.services.option-1')}}</b-dropdown-item>
            <b-dropdown-item :to="localePath('/ISO-27001')">{{$t('nav.services.option-2')}}
            </b-dropdown-item>
            <b-dropdown-item :to="localePath('/GDPR')">{{$t('nav.services.option-3')}}</b-dropdown-item>
            <b-dropdown-item :to="localePath('/PCI-DSS')">{{$t('nav.services.option-4')}}</b-dropdown-item>
            <b-dropdown-item :to="localePath('/incident-response')">{{$t('nav.services.option-5')}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/whyus')" class="active mr-4 pr-1">{{$t('nav.why-us')}}
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/partner')" class="active mr-4 pr-1">{{$t('nav.partners')}}
          </b-nav-item>
          <b-nav-item :class="$style.navBarItem" :to="localePath('/company')" class="active mr-4 pr-1">{{$t('nav.company')}}
          </b-nav-item>
<!--          <b-nav-item :class="$style.navBarItem" :to="localePath('/web-protection')" class="active mr-4 pr-1">{{$t('nav.pricing')}}-->
<!--          </b-nav-item>-->
          <b-nav-item :class="$style.navBarItem" href="https://support.polarisec.com/portal/en/home" target="_blank"
                      class="active mr-4 pr-1">{{$t('nav.support-center')}}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <p-button size="sm" :text="$t('button-group.button-2')" :class="$style.btn" :show-icon="false" @click="onClick"/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row class="mx-0 mr-lg-5 mr-1 ml-lg-3 align-items-lg-center mt-lg-0 pt-lg-0 mt-3 pt-1">
      <p-language-select/>
    </b-row>
  </b-row>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
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
  padding 7px 20px !important

@media only screen and (min-width: 1441px)
  .navigationBar
    width 90%

@media only screen and (max-width: 991px)
  .navigationBar
    width 90% !important

@media only screen and (min-width: 992px)
  .navCollapse
    min-width 1076px !important

  .navContainer
    margin-right 140px

  .navigationBar
    height 72px !important
    padding 24px 21px 24px 44px !important

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
import PLanguageSelect from "~/components/PLanguageSelect.vue";

export interface ILanguage {
  code: string,
  text: string
  icon?: any
}

@Component({
  components: {PLanguageSelect, PButton}
})
export default class PNavbar extends Vue {

  onClick() {
    return this.$router.push({path: this.localePath('/contact')})
  }

}
</script>

