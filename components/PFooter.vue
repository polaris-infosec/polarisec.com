<template>
  <b-container fluid :class="$style.footer">
    <div :class="$style.footerSection" class="app-width">
      <b-row class="d-flex justify-content-between flex-row">
        <b-col lg="3" cols="12" class="p-0">
          <nuxt-link :to="localePath('/home')">
            <img src="~/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten"
                 height="30"
                 width="175">
          </nuxt-link>
          <div class="mt-4 body-3">
            <a href="mailto:hello@polarisec.com"><p class="brand-2 mb-3">hello@polarisec.com</p></a>
            <p class="mb-1">
          <span class="brand-2">
            Singapore:
          </span>
              12 Marina View #11-01
            </p>
            <p class="m-0 mb-1 p-0">
           <span class="brand-2">
            Vietnam:
           </span>
              M Floor, Pax Sky Building,
              <br>
              159C De Tham,
              Co Giang Ward, District 1, HCMC
            </p>
            <p class="d-flex align-items-center">
              <img src="@/assets/icons/phone.png" width="18" height="18" class="mr-1">
              (+84) 28.7101.7755
            </p>
          </div>
        </b-col>
        <b-col col lg="7" class="mr-3 p-0">
          <b-row class="d-flex justify-content-between">
            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              <div>SOLUTION</div>
              <div class="d-flex flex-column mt-4 body-5">
                <a href="https://polarisec.io" target="_blank">
                <span class="color-text-7">
                  Platform Access
                </span>
                </a>
                <a href="https://support.polarisec.com" target="_blank">
                  <span class="color-text-7">
                    Support Center
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              COMPANY
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link :to="localePath('/company')">
                <span class="color-text-7">
                    Company
                </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/whyus')">
                <span class="color-text-7">
                    Why us
                </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/partner')">
                <span class="color-text-7">
                    Partners
                </span>
                </nuxt-link>
                <a href="https://polarisec.substack.com/" target="_blank">
                  <span class="color-text-7">
                    Blog
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              RESOURCES
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link :to="localePath('/web-protection')">
                <span class="color-text-7">
                    Pricing
                </span>
                </nuxt-link>
                <a href="https://support.polarisec.com/portal/en/kb/polaris-kb/frequently-asked-questions-faq">
                <span class="color-text-7">
                    FAQ
                </span>
                </a>
                <nuxt-link :to="localePath('/contact')">
                <span class="color-text-7">
                    Contact
                </span>
                </nuxt-link>
              </div>
            </div>

            <div class="body-6 col-lg-3 p-0 col-5 mt-mb-36px d-flex flex-column align-items-lg-end"
                 :class="$style.socialContact">
              <div>
                <p class="my-0">CONNECT WITH US</p>
                <div class="d-flex mt-4 body-5">
                  <b-col lg="12" cols="11" class="mb-2 p-0 d-flex flex-wrap">
                    <a href="https://linkedin.com/company/polarisec" target="_blank" class="mr-3">
                      <img src="~/assets/icons/linked-in.png" class="d-inline-block align-baseline" alt="Kitten"
                           height="24"
                           width="24">
                    </a>
                    <a href="https://www.youtube.com/channel/UChjg05_AKIRTg8ZXgwhroYw" target="_blank" class="mr-3">
                      <img src="~/assets/icons/youtube.png" class="d-inline-block align-baseline" alt="Kitten"
                           height="24"
                           width="24">
                    </a>
                    <a href="https://www.facebook.com/polarisinfosec" target="_blank" class="mr-3">
                      <img src="~/assets/icons/facebook.png" class="d-inline-block align-baseline" alt="Kitten"
                           height="24"
                           width="24">
                    </a>
                    <a href="https://twitter.com/polarisinfosec" target="_blank" class="mr-3">
                      <img src="~/assets/icons/twitter.png" class="d-inline-block align-baseline" alt="Kitten"
                           height="24"
                           width="24">
                    </a>
                    <a href="https://polarisec.substack.com/" target="_blank">
                      <img src="~/assets/icons/substack.png" class="d-inline-block align-baseline" alt="Kitten"
                           height="24"
                           width="24">
                    </a>
                  </b-col>
                </div>
              </div>
            </div>
          </b-row>
        </b-col>
      </b-row>

      <b-row :class="$style.divide" class="mb-3 mt-4"></b-row>

      <b-row class="d-flex justify-content-between align-content-center p-0">
        <b-col class="col-12 col-lg-3 p-0 text-lg-left text-center">
        <span class="body-4">
          @ Polaris Infosec Pte. Ltd.
        </span>
        </b-col>
        <b-col class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end p-0">
          <nuxt-link to="/terms">
            <div class="pr-2 text-center" style="border-right: 0.03em solid #A9B7C6; color: white">
              <span class="body-4">
                Terms of Service
              </span>
            </div>
          </nuxt-link>
          <a href="docs/polaris_privacy_notice.pdf" download>
            <div class="pl-2 white-text text-center">
              <span class="body-4">
                 Privacy and Support
               </span>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style module lang="stylus">
@media only screen and (max-width: 1020px)
  .socialContact
    padding-left 16px !important

@media only screen and (max-width: 600px)
  .socialContact
    padding-left 16px !important

  .footerSection
    padding 24px !important

.divide
  border-bottom 0.03em solid #A9B7C6

.footerSection
  padding 40px 60px 24px 60px

.footer
  background-color black
</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

@Component({})
export default class PFooter extends Vue {
  title: string[] = [
    'SOLUTION', 'COMPANY', 'RESOURCES', 'CONNECT WITH US'
  ]
}
</script>


