<template>
  <web-protection-platform-screen/>
</template>

<style module lang="stylus">

</style>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import WebProtectionPlatformScreen from "~/layouts/platform/WebProtectionPlatformScreen.vue";

@Component({
  components: {WebProtectionPlatformScreen}
})
export default class WebProtectionPlatform extends Vue {

  head() {
    return {
      title: this.$t("web-protection-platform.header-title"),
      meta: [
        {
          name: 'keywords',
          content: 'Web protection, web security, web application firewall, website protection, Website security, website application firewall, waap, waf, cybersecurity, web application, cyber security'
        },
        {
          name: 'description',
          content: 'Web protection explanation - benefits of security, and threats and risks of not securing your website. Polaris Web Application and API protection (WAAP) advantages and what you can do to protect your site now.'
        }
      ]
    }
  }
}
</script>

