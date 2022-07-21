<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 justify-content-center">
        <b-col cols="12" lg="8" class="p-0">
          <h1 class="h3-sm mb-4 text-center">Web protection platform facts and benefits</h1>
          <h2 class="h5-sm text-center">Web protection fundamentals</h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-explained.png" alt="web protection explained"
            />
          </div>
          <p class="mt-5">
            <nuxt-link to="/web-protection"><span class="brand-2">Web protection</span></nuxt-link>
            is a method to protect your website from cyber threats - hackers. Each website has its own
            server which is responsible for hosting the site and networking it with other online resources such as
            users. When connected to the server, the website has a private IP address - an address that allows other
            resources to find your website, that should be encrypted and secured.
          </p>
          <p>
            However, when an attack occurs, your website is accessed by another IP address trying to inject malicious
            code or with the intent of stealing data and extracting personal information. In a nutshell, website
            security is the process and practice of keeping your website, and underlying network infrastructure and data
            safe through technical solutions and policies to regulate human behaviors.
          </p>
          <h2 class="mt-4 text-center">The risks of not having web protection.</h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-benefits.png" alt="web protection benefits"
            />
          </div>
          <p class="mt-5">
            <nuxt-link to="/web-protection"><span class="brand-2">Web protection</span></nuxt-link>
            Web protection is something that every website must-have. Most businesses believe that their websites have
            zero value to hackers, however, they have different reasons to attack your website. Sometimes they want to
            steal your valuable customer information in order to seek a ransom payment, other times they may want to
            disrupt supply chains and operations.
          </p>
          <p>
            Technology is always evolving and growing, and with that comes new vulnerabilities and risks as part of the
            growing pains. Most websites are now integrated with online payment functions or other 3rd applications and
            tech platforms in delivering services. These connections with other parties on your web domain are
            attractive attack points for hackers who intend to infiltrate the server system by exploiting the
            vulnerabilities at the API endpoints. Hacker attack methodologies and exploitations grow along with the
            evolution of technology. Website security and protection are primary ways to mitigate the growing risk of
            hackers accessing your internal systems and networks.
          </p>
          <h2 class="mt-4 text-center">
            Our web protection platform is secure, effective, and easy to use.
          </h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-platform.png" alt="web protection benefits"
            />
          </div>
          <b-col class="justify-content-start p-0" cols="12">
            <p class="mt-5 text-left">
              Polaris’ <span class="brand-2">Web Application & API Protection</span> (<span class="brand-2">WAAP</span> or <span class="brand-2">WAF</span>) platform
              defends any business that has any kind of
              online presence, from simple to complex transactions, to the storage of confidential customer financial
              and
              personal data. Using proprietary artificial intelligence (AI) technology as the core of our protection
              methodology,
              our platform is able to:
            </p>
            <div class="d-flex">
              <ul class="text-left">
                <li>Automate and optimize web security processes and tasks.</li>
                <li>Improve threat detection accuracy.</li>
                <li>Reduce false positives.</li>
                <li>Increase productivity and improve efficiency through continued self-learning and growth.</li>
                <li>Learn from data to generate threat correlation.</li>
                <li>Enables customization of security capabilities for different business requirements.</li>
              </ul>
            </div>
          </b-col>
          <b-col class="justify-content-start p-0" cols="12">
            <p class="mt-4 text-left">Our platform also includes remarkable features such as:</p>
            <b-col cols="12" class="d-flex p-0">
              <ul class="text-left">
                <li>Next-Generation Web Application Firewall</li>
                <li>API Security</li>
                <li>DDoS Defense</li>
                <li>Bots Management</li>
                <li>Access Lists & Geographic Control</li>
                <li>Threat Intelligence</li>
                <li>Zero Trust Access</li>
                <li>Managed Security Services</li>
                <li>Cloud and/or On-Premise Deployment Options</li>
              </ul>
            </b-col>
          </b-col>
          <p>
            Registration takes less than 10 minutes and once the installation is complete your site is protected immediately with optimal default security configurations.
          </p>
        </b-col>

      </b-row>
    </div>
  </div>
</template>

<style module lang="stylus">
@import "@/styles/config.styl"
.section
  img
    max-height 300px
  padding 32px 16px

.container
  background-image url("@/assets/images/pricing/pricing-banner-background.png")
  background-color: $background-1
  background-position: center
  background-repeat: no-repeat
  background-size: cover

@media only screen and (min-width: 992px)
  .section
    padding 112px 60px 118px

    img
      max-height 386px

</style>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({})
export default class WebProtectionPlatformScreen extends Vue {

}
</script>


