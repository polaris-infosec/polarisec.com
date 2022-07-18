<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0 justify-content-between">
        <b-col class="p-0 d-flex justify-content-center" cols="12" lg="6">
          <img :class="$style.img" src="@/assets/images/home/web-application-security.png" alt="">
        </b-col>
        <b-col :class="$style.textContainer" class="p-0 d-flex flex-column justify-content-center text-lg-left text-center mt-lg-0 mt-5" lg="5" cols="12">
          <h2 class="my-0 mb-4 text-lg-left">Web application security<span class="brand-2">.</span></h2>
          <p class="my-0 body-1 mb-4">
            <b>Protects your website from cyber attacks</b> such as Distributed Denial of Service (DDoS), SQL
            Injection, Zero-Day attacks, and other OWASP Top 10 vulnerabilities before your application server is
            exploited.
          </p>
          <p class="body-1 my-0">
            Comes pre-configured with default expert-crafted protection rules, which means once enrolled, <b>you’re
            defended immediately</b>. If needed, you can also customize rules to easily fit your security policy
            requirements.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-repeat no-repeat
  background-image url("@/assets/images/home/web-application-security-bg.png")
  background-size: cover;
  background-position center
  background-color $background-1

.bodyContainer
  padding 70px 16px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-left 152px

@media only screen and (max-width: 768px)
  .img
    max-width 345px
    max-height 275px

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 100px 60px 98px 108px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeWebApplicationSecurity extends Vue {


}
</script>
