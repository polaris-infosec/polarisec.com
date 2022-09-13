<template>
  <div class="container-fluid px-0">
    <div :class="$style.bannerContainer">
      <div :class="$style.lastUpdate">{{ $t("term.time-line") }}</div>
      <h1 class="color-text-8">{{ $t("term.title") }}</h1>
    </div>
    <div :class="$style.termContainer">
      <div v-html="$t('term.sub-title')">
      </div>
      <div><b>{{ $t("term.commencement-and-duration.text") }}</b></div>
      <div>
        {{ $t("term.commencement-and-duration.content-1") }}
      </div>
      <div>
        {{ $t("term.commencement-and-duration.content-2") }}
      </div>
      <div>
        {{ $t("term.commencement-and-duration.content-3") }}
      </div>
      <div>
        <b>
          {{ $t("term.supplier-obligations.text") }}
        </b>
      </div>
      <div>
        {{ $t("term.supplier-obligations.content-1") }}
      </div>
      <div>
        {{ $t("term.supplier-obligations.content-2") }}
      </div>
      <div>
        <b>
          {{ $t("term.customer-obligations.text") }}
        </b>
      </div>
      <div>
        {{ $t("term.customer-obligations.content-1.text") }}
      </div>
      <div class="ml-4">{{ $t("term.customer-obligations.content-1.sub-content-1") }}</div>
      <div class="ml-4">{{ $t("term.customer-obligations.content-1.sub-content-2") }}
      </div>
      <div class="ml-4">{{ $t("term.customer-obligations.content-1.sub-content-3") }}
      </div>
      <div>{{ $t("term.customer-obligations.content-2") }}
      </div>

      <div><b>{{ $t("term.software.text") }}</b></div>
      <div>{{ $t("term.software.content-1.text") }}</div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-1") }}
      </div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-2") }}
      </div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-3") }}
      </div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-4") }}</div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-5") }}</div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-6") }}
      </div>
      <div class="ml-4">{{ $t("term.software.content-1.sub-content-7") }}
      </div>

      <div><b>{{ $t("term.limitation-of-liability.text") }}</b></div>
      <div>{{ $t("term.limitation-of-liability.content-1") }}
      </div>
      <div>{{ $t("term.limitation-of-liability.content-2") }}
      </div>
      <div>{{ $t("term.limitation-of-liability.content-3") }}
      </div>
      <div>
        {{ $t("term.limitation-of-liability.content-4") }}
      </div>

      <div><b>{{ $t("term.confidentiality.text") }}</b></div>
      <div>{{ $t("term.confidentiality.content-1") }}
      </div>
      <div>{{ $t("term.confidentiality.content-2.text") }}</div>
      <div class="ml-4">{{ $t("term.confidentiality.content-2.sub-content-1") }}
      </div>
      <div class="ml-4">{{ $t("term.confidentiality.content-2.sub-content-2") }}
      </div>

      <div><b>{{ $t("term.data-sharing.text") }}</b></div>
      <div>{{ $t("term.data-sharing.content") }}
      </div>

      <div><b>{{ $t("term.intellectual-property.text") }}</b></div>
      <div>{{ $t("term.intellectual-property.content") }}
      </div>

      <div><b>{{ $t("term.suspension-of-service.text") }}</b></div>
      <div>{{ $t("term.suspension-of-service.content-1.text") }}</div>
      <div class="ml-4">{{ $t("term.suspension-of-service.content-1.sub-content-1") }}
      </div>
      <div class="ml-4">{{ $t("term.suspension-of-service.content-1.sub-content-2") }}
      </div>
      <div class="ml-4">{{ $t("term.suspension-of-service.content-1.sub-content-3") }}
      </div>
      <div class="ml-4">{{ $t("term.suspension-of-service.content-1.sub-content-4") }}
      </div>
      <div>{{ $t("term.suspension-of-service.content-2") }}
      </div>
      <div>{{ $t("term.suspension-of-service.content-3") }}
      </div>
      <div>{{ $t("term.suspension-of-service.content-4") }}</div>

      <div><b>{{ $t("term.termination.text") }}</b></div>
      <div>{{ $t("term.termination.content-1") }}
      </div>
      <div>{{ $t("term.termination.content-2") }}
      </div>
      <div>{{ $t("term.termination.content-3") }}
      </div>
      <div>{{ $t("term.termination.content-4.text") }}</div>
      <div class="ml-4">{{ $t("term.termination.content-4.sub-content-1") }}
      </div>
      <div class="ml-4">{{ $t("term.termination.content-4.sub-content-2") }}
      </div>
      <div>{{ $t("term.termination.content-5") }}</div>

      <div><b>{{ $t("term.exclusions.text") }}</b></div>
      <div>{{ $t("term.exclusions.content-1") }}
      </div>
      <div>{{ $t("term.exclusions.content-2") }}
      </div>
      <div>{{ $t("term.exclusions.content-3") }}
      </div>
      <div>{{ $t("term.exclusions.content-4") }}
      </div>
      <div>{{ $t("term.exclusions.content-5") }}
      </div>
      <div>{{ $t("term.exclusions.content-6") }}
      </div>
      <div>{{ $t("term.exclusions.content-7") }}</div>
      <div>{{ $t("term.exclusions.content-8") }}
      </div>

      <div><b>{{ $t("term.miscellaneous.text") }}</b></div>
      <div v-html="$t('term.miscellaneous.content-1')">
      </div>
      <div v-html="$t('term.miscellaneous.content-2')">
      </div>
      <div><b>{{$t("term.end")}}</b></div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

.bannerContainer
  padding 32px 16px
  background $background-1

.termContainer
  padding 32px 16px
  background #E5E5E5
  color black

  div
    margin-bottom 15px

.lastUpdate
  color $brand-2
  font-weight 400
  font-size 16px
  line-height 26px
  margin-bottom 15px

@media only screen and (min-width: 992px)
  .termContainer
    padding 43px 152px 155px

  .bannerContainer
    padding 58px 152px 51px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class terms extends Vue {

}
</script>
