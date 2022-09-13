<template>
  <div :class="$style.container">
    <div :class="$style.section" class="app-width">
      <b-row class="mx-0 justify-content-center">
        <b-col cols="12" lg="8" class="p-0">
          <h1 class="h3-sm mb-4 text-center">{{ $t('web-protection-platform.title') }}</h1>
          <h2 class="h5-sm text-center">{{ $t('web-protection-platform.sub-title') }}</h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-explained.png" alt="web protection explained"
            />
          </div>
          <p class="mt-5">
            <nuxt-link :to="localePath('/web-protection')"><span
              class="brand-2">{{ $t('web-protection-platform.web-protection') }}</span></nuxt-link>
            {{ $t('web-protection-platform.content-1') }}
          </p>
          <p>
            {{ $t('web-protection-platform.content-2') }}
          </p>
          <h2 class="mt-4 text-center">{{ $t('web-protection-platform.title-1') }}</h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-benefits.png" alt="web protection benefits"
            />
          </div>
          <p class="mt-5">
            <nuxt-link :to="localePath('/web-protection')"><span
              class="brand-2">{{ $t('web-protection-platform.web-protection') }}</span></nuxt-link>
            {{ $t('web-protection-platform.content-3') }}
          </p>
          <p>
            {{ $t('web-protection-platform.content-4') }}
          </p>
          <h2 class="mt-4 text-center">
            {{ $t('web-protection-platform.title-2') }}
          </h2>
          <div class="d-flex justify-content-center">
            <img class="mt-5" src="@/assets/images/platform/web-protection-platform.png" alt="web protection benefits"
            />
          </div>
          <b-col class="justify-content-start p-0" cols="12">
            <p class="mt-5 text-left">
              {{ $t("web-protection-platform.content-5.polaris") }}
              <nuxt-link :to="localePath('/web-protection')"><span
                class="brand-2">{{ $t("web-protection-platform.content-5.web-application-and-api-protection") }}</span>
              </nuxt-link>
              (<nuxt-link :to="localePath('/web-protection')"><span
                class="brand-2">{{ $t("web-protection-platform.content-5.WAAP") }}</span></nuxt-link>,
              <nuxt-link :to="localePath('/web-protection')"><span
                class="brand-2">{{ $t("web-protection-platform.content-5.WAF") }}</span></nuxt-link>)
              {{ $t("web-protection-platform.content-5.content") }}
            </p>
            <div class="d-flex">
              <ul class="text-left">
                <li>{{ $t('web-protection-platform.list-1.content-1') }}</li>
                <li>{{ $t('web-protection-platform.list-1.content-2') }}</li>
                <li>{{ $t('web-protection-platform.list-1.content-3') }}</li>
                <li>{{ $t('web-protection-platform.list-1.content-4') }}</li>
                <li>{{ $t('web-protection-platform.list-1.content-5') }}</li>
                <li>{{ $t('web-protection-platform.list-1.content-6') }}</li>
              </ul>
            </div>
          </b-col>
          <b-col class="justify-content-start p-0" cols="12">
            <p class="mt-4 text-left">{{ $t('web-protection-platform.content-6') }}</p>
            <b-col cols="12" class="d-flex p-0">
              <ul class="text-left">
                <li>{{ $t('web-protection-platform.list-2.content-1') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-2') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-3') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-4') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-5') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-6') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-7') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-8') }}</li>
                <li>{{ $t('web-protection-platform.list-2.content-9') }}</li>
              </ul>
            </b-col>
          </b-col>
          <p>
            {{ $t('web-protection-platform.content-7') }}
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


