<template>
  <b-navbar :class="$style.navigationBar" toggleable="xl" type="dark" variant="dark">
    <b-navbar-brand class="mr-4 pr-4">
      <nuxt-link to="/home">
        <img src="@/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten" height="24"
             width="140">
      </nuxt-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :class="$style.navBarItem" href="https://polarisec.io/" target="_blank" class="active mr-4 pr-3">
          Platform
        </b-nav-item>
        <b-nav-item-dropdown :class="$style.navBarItem" id="dropdown-1" text="Services" class="mr-4 pr-3 active">
          <b-dropdown-item to="/isma" target="_blank">ISMA</b-dropdown-item>
          <b-dropdown-item to="/iso-27001-audit" target="_blank">ISO 27001 Audit
          </b-dropdown-item>
          <b-dropdown-item to="/gdpr-audit" target="_blank">GDPR Audit</b-dropdown-item>
          <b-dropdown-item to="/pci-dss-audit" target="_blank">PCIDSS Audit</b-dropdown-item>
          <b-dropdown-item to="/incident-response" target="_blank">Incident Response</b-dropdown-item>
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
        <!--        <b-nav-item class="d-lg-flex justify-content-center align-items-center ml-2 pl-1">-->
        <!--          <b-avatar variant="info" :size="24" src="@/assets/icons/eng.png"></b-avatar>-->
        <!--        </b-nav-item>-->
        <!--        <b-nav-item-dropdown  id="dropdown-right" right class="active" :class="[$style.languageSelect, $style.navBarItem]">-->
        <!--          <b-dropdown-item>English</b-dropdown-item>-->
        <!--        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
@media (min-width: 992px)
  .navigationBar
    height 72px !important
    padding 24px 60px !important

.languageSelect
  ul
    padding-left 10px !important

  a
    padding-left 2px !important

.navBarItem
  li
    a:hover
      color $brand-2 !important

  a:hover
      color $brand-2 !important

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
</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PNavbar extends Vue {

  onClick() {
    return this.$router.push({path: '/contact'})
  }

}
</script>

