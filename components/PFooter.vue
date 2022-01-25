<template>
  <b-container fluid :class="$style.footer">
    <b-row class="d-flex justify-content-between flex-row">
      <b-col col lg="3">
        <img src="~/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten" height="30"
             width="175">
        <div class="mt-4 body-3">
          <p class="brand-2 mb-3">hello@polarisec.com</p>
          <p class="mb-1">
          <span class="brand-2">
            Singapore:
          </span>
            12 Marina View #11-01
          </p>
          <p>
           <span class="brand-2">
            Vietnam:
          </span>
            H3 Building - CirCo, 384 Hoang Dieu St, District 4, HCMC
          </p>
        </div>
      </b-col>

      <b-col col lg="7" class="mr-4">
        <b-row class="d-flex justify-content-between">
          <div class="body-6">
            SOLUTION
            <div class="d-flex flex-column mt-4 body-5">
                <span>
                  Platform Access
                </span>
              <span>
                Support Center
              </span>
            </div>
          </div>

          <div class="body-6">
            COMPANY
            <div class="d-flex flex-column mt-4 body-5">
              <span>
                About
              </span>
              <span>
                Why us
              </span>
              <span>
                Partners
              </span>
              <span>
                Blog
              </span>
            </div>
          </div>

          <div class="body-6">
            RESOURCES
            <div class="d-flex flex-column mt-4 body-5">
              <span>
                Pricing
              </span>
              <span>
                FAQ
              </span>
              <span>
                Contact
              </span>
            </div>
          </div>

          <div class="body-6">
            CONNECT WITH US
            <div class="d-flex flex-column justify-content-between mt-4 body-5 pl-3">
              <b-row class="mb-2 d-flex">
                <a href="#" class="mr-3">
                  <img src="~/assets/icons/facebook.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                       width="24">
                </a>
                <a href="#" class="mr-3">
                  <img src="~/assets/icons/twitter.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                       width="24">
                </a>
                <a href="#">
                  <img src="~/assets/icons/youtube.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                       width="24">
                </a>
              </b-row>

              <b-row class="d-flex">
                <a href="#" class="mr-3">
                  <img src="~/assets/icons/medium.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                       width="24">
                </a>
                <a href="#">
                  <img src="~/assets/icons/linked-in.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                       width="24">
                </a>
              </b-row>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-row>

    <div :class="$style.divide" class="mb-3 mt-5"></div>

    <b-row class="d-flex justify-content-between align-content-center">
      <b-col col lg="3">
        <span class="body-4">
          @ Polaris Infosec Pte. Ltd.
        </span>
      </b-col>
      <b-col col lg="3" class="d-flex justify-content-end">
        <nuxt-link to="/terms">
          <div class="pr-2" style="border-right: 0.03em solid #A9B7C6; color: white">
           <span class="body-4">
            Terms of Service
          </span>
          </div>
        </nuxt-link>
        <a href="https://polarisec.com/polaris_privacy_notice.pdf" download target="_blank">
          <div class="pl-2" style="color: white">
           <span class="body-4">
          Privacy and Support
        </span>
          </div>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<style module lang="stylus">
.socialGroup
  width 120px

.divide
  width 100%
  border-bottom 0.03em solid #A9B7C6

.footer
  height 364px
  padding 40px 60px 0 60px
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


