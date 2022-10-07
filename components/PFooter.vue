<template>
  <b-container fluid :class="$style.footer">
    <div :class="$style.footerSection" class="app-width">
      <b-row class="d-flex justify-content-between flex-row">
        <b-col lg="3" cols="12" class="p-0">
          <nuxt-link :to="localePath('/home')">
            <img
              src="~/assets/images/polaris-logo.png"
              class="d-inline-block align-baseline mt-2"
              alt="Kitten"
              height="30"
              width="175"
            />
          </nuxt-link>
          <div class="mt-4 body-3">
            <a href="mailto:hello@polarisec.com"
              ><p class="brand-2 mb-3">hello@polarisec.com</p></a
            >
            <p class="mb-1">
              <span class="brand-2">
                {{ $t("footer.nation.singapore") }}:
              </span>
              {{ $t("footer.nation.singapore-address") }}
            </p>
            <p class="m-0 mb-1 p-0">
              <span class="brand-2"> {{ $t("footer.nation.vietnam") }}: </span>
              {{ $t("footer.nation.vietnam-address") }}
            </p>
            <p class="d-flex align-items-center">
              <img
                src="@/assets/icons/phone.png"
                width="18"
                height="18"
                class="mr-1"
              />
              (+84) 28.7101.7755
            </p>
          </div>
        </b-col>
        <b-col col lg="7" class="mr-3 p-0">
          <b-row class="d-flex justify-content-between">
            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              <div>{{ $t("footer.solution") }}</div>
              <div class="d-flex flex-column mt-4 body-5">
                <a href="https://polarisec.io" target="_blank">
                  <span class="color-text-7">
                    {{ $t("nav.platform-access") }}
                  </span>
                </a>
                <a href="https://support.polarisec.com" target="_blank">
                  <span class="color-text-7">
                    {{ $t("nav.support-center") }}
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              {{ $t("footer.company") }}
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link :to="localePath('/company')">
                  <span class="color-text-7">
                    {{ $t("nav.about") }}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/whyus')">
                  <span class="color-text-7">
                    {{ $t("nav.why-us") }}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/partner')">
                  <span class="color-text-7">
                    {{ $t("nav.partners") }}
                  </span>
                </nuxt-link>
                <a href="https://polarisec.substack.com/" target="_blank">
                  <span class="color-text-7">
                    {{ $t("nav.blog") }}
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              {{ $t("footer.resources") }}
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link :to="localePath('/web-protection')">
                  <span class="color-text-7">
                    {{ $t("nav.pricing") }}
                  </span>
                </nuxt-link>
                <a
                  href="https://support.polarisec.com/portal/en/kb/polaris-kb/frequently-asked-questions-faq"
                >
                  <span class="color-text-7">
                    {{ $t("pricing.tags.faqs") }}
                  </span>
                </a>
                <nuxt-link :to="localePath('/contact')">
                  <span class="color-text-7">
                    {{ $t("nav.contact") }}
                  </span>
                </nuxt-link>
              </div>
            </div>

            <div
              class="body-6 col-lg-3 p-0 col-5 mt-mb-36px d-flex flex-column align-items-lg-end"
              :class="$style.socialContact"
            >
              <div>
                <p class="my-0">{{ $t("footer.connect-with-us") }}</p>
                <div class="d-flex mt-4 body-5">
                  <b-col lg="12" cols="11" class="mb-2 p-0 d-flex flex-wrap">
                    <a
                      href="https://linkedin.com/company/polarisec"
                      target="_blank"
                      class="mr-3"
                    >
                      <img
                        src="~/assets/icons/linked-in.png"
                        class="d-inline-block align-baseline"
                        alt="Kitten"
                        height="24"
                        width="24"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UChjg05_AKIRTg8ZXgwhroYw"
                      target="_blank"
                      class="mr-3"
                    >
                      <img
                        src="~/assets/icons/youtube.png"
                        class="d-inline-block align-baseline"
                        alt="Kitten"
                        height="24"
                        width="24"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/polarisinfosec"
                      target="_blank"
                      class="mr-3"
                    >
                      <img
                        src="~/assets/icons/facebook.png"
                        class="d-inline-block align-baseline"
                        alt="Kitten"
                        height="24"
                        width="24"
                      />
                    </a>
                    <a
                      href="https://twitter.com/polarisinfosec"
                      target="_blank"
                      class="mr-3"
                    >
                      <img
                        src="~/assets/icons/twitter.png"
                        class="d-inline-block align-baseline"
                        alt="Kitten"
                        height="24"
                        width="24"
                      />
                    </a>
                    <a href="https://polarisec.substack.com/" target="_blank">
                      <img
                        src="~/assets/icons/substack.png"
                        class="d-inline-block align-baseline"
                        alt="Kitten"
                        height="24"
                        width="24"
                      />
                    </a>
                  </b-col>
                </div>
              </div>
              <!-- <div>{{ GartnerPI_Widget(e) }}</div> -->

              <!-- <div class="widget-container" style="padding: 10px;background-color: black; margin top: 10 px; margin-bottom:10px; text-align: center">
<a href=“https://www.gartner.com/reviews/market/ABC/vendor/ABC”><img src="https://blogs.gartner.com/reviews-pages/files/2021/01/GartnerPeerInsightsLogo_light_2x.png" title="Read reviews on Gartner peer insights" width="180" style="margin-bottom: 20px" ></a>
<p>
  <a style="color: white" target="_blank" href="https://www.gartner.com/reviews/market/cloud-web-application-and-api-protection/vendor/polaris-infosec/product/polaris-waap/reviews?marketSeoName=cloud-web-application-and-api-protection&vendorSeoName=polaris-infosec&productSeoName=polaris-waap">Read Reviews</a>
</p>  
<p>
  <a style="color: white" target="_blank" href="https://www.gartner.com/reviews/market/ABC/vendor/ABC">Submit a Review</a>
</p>
</div> -->

              <div class="widget-container">
                <div
                  id="gartner-pi-widget"
                  :class="$style.gartnerPiWidget"
                  data-size="small"
                  data-theme="dark"
                >
                  <a
                    id="gartner-pi-link"
                    href="https://www.gartner.com/reviews/market/cloud-web-application-and-api-protection/vendor/polaris-infosec?utm_source=polaris-infosec&amp;utm_medium=referral&amp;utm_campaign=widget&amp;utm_content=YWFmMzMxODUtMzUyNC00YzhmLTljNGItZThiOGYzNGVkODVl"
                    :class="$style.gartnerPiLink"
                    target="_blank"
                    rel="nofollow"
                    ><div
                      :class="$style.gartnerPiDatacontainer"
                    >
                      <div :class="$style.gartnerPiGradient"></div>
                      <div class="gartner-pi-card">
                        <div :class="$style.gartnerPiLogo"></div>
                        <div :class="$style.gartnerPiHeader">
                          <h1 :class="$style.gartnerPiH1">Polaris Infosec</h1>
                          <h2 :class="$style.gartnerPiH2">
                            Cloud Web Application and API Protection
                          </h2>
                        </div>
                        <div :class="$style.gartnerPiStats">
                          <div :class="$style.gartnerPiOverallRating">
                              <span :class="$style.gartnerPiScore">{{ stars }}</span
                              ><span :class="$style.gartnerPiStarRating"
                                ><span
                                  :class="$style.gartnerPiStarRatingScore"
                                  :style="{'width':ratingScore}"
                                ></span
                              ></span>
                            </div>
                          <div :class="$style.gartnerPiAlignLeft">
                            <div :class="$style.gartnerPiReviewsLink">
                              <span
                                >{{ reviews }} Ratings<span :class="$style.gartnerPiChevron"></span
                              ></span>
                            </div>
                          </div>
                          <div :class="$style.gartnerPiAlignRight">
                            <div>
                              <a
                                id="https://gtnr.io/w4vtLlWwM"
                                href="https://gtnr.io/w4vtLlWwM"
                                target="_blank"
                                :class="$style.gartnerPiSourcingLink"
                                >Submit a review</a
                              ><span :class="$style.gartnerPiChevron"></span>
                            </div>
                          </div>
                          <div
                            :class="$style.gartnerPiAsOfDate"
                          >
                            As of {{ date }}
                          </div>
                        </div>
                      </div>
                    </div></a
                  >
                </div>
                <iframe
                  src="https://www.gartner.com/reviews/public/Widget/data?widget_id=YWFmMzMxODUtMzUyNC00YzhmLTljNGItZThiOGYzNGVkODVl&amp;size=small"
                  width="0"
                  height="0"
                  frameborder="0"
                  id="gartner-pi-widget-data"
                ></iframe>
              </div>
            </div>
          </b-row>
        </b-col>
      </b-row>

      <b-row :class="$style.divide" class="mb-3 mt-4"></b-row>

      <b-row class="d-flex justify-content-between align-content-center p-0">
        <b-col class="col-12 col-lg-3 p-0 text-lg-left text-center">
          <span class="body-4"> @ Polaris Infosec Pte. Ltd. </span>
        </b-col>
        <b-col
          class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end p-0"
        >
          <nuxt-link :to="localePath('/terms')">
            <div
              class="pr-2 text-center"
              style="border-right: 0.03em solid #a9b7c6; color: white"
            >
              <span class="body-4">
                {{ $t("footer.term") }}
              </span>
            </div>
          </nuxt-link>
          <a href="docs/polaris_privacy_notice.pdf" download>
            <div class="pl-2 white-text text-center">
              <span class="body-4">
                {{ $t("footer.privacy") }}
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

.gartnerPiWidget
  background-color rgba(0, 0, 0, 0) !important

.gartnerPiLink
  cursor pointer
  color #fff !important
  display block
  padding 8px 6px 0 6px
  font-weight 300
  font-size 12px

.gartnerPiDatacontainer
  width 100%

.gartnerPiGradient
  background linear-gradient(to top,#002856 5%,rgba(65,66,113,0) 15%)

.gartnerPiLogo
  background-image url(https://reviews.static.gartner.com/public/Widget/img/logo-bubble-purple-bg-2x-min.png) !important
  color #fff !important
  background url(https://reviews.static.gartner.com/public/Widget/img/logo-bubble-purple-bg-2x-min.png) no-repeat 0 0
  background-size100px 34.72px
  background-position right
  margin-bottom 10px
  height 34.72px
  width 100%

.gartnerPiHeader
  min-height 54px

.gartnerPiH1
  font-size 20px
  margin 0 0 3px 0
  line-height normal
  font-weight bolder

.gartnerPiH2
  font-size 11px
  letter-spacing .3px
  line-height normal
  margin 0 0 4px
  opacity .75
  font-weight 300

.gartnerPiStats
  border-top solid 1px #40b3e1
  padding-bottom 4px
  display block
  height 58px

.gartnerPiOverallRating
  padding 8px 0 3px 4px
  align-items right
  display inline-block
  height 27px

.gartnerPiScore
  font-weight 500
  font-size 24px
  margin-right 8px
  display inline-block

.gartnerPiStarRating
  display inline-block
  background url(https://reviews.static.gartner.com/public/Widget/img/stars.png) repeat-x 0 0
  margin-top -14px
  height 20px
  width 100px
  background-size 20px

.gartnerPiStarRatingScore
  width v-bind(ratingScore)
  display inline-block
  background url(https://reviews.static.gartner.com/public/Widget/img/stars.png) repeat-x 0 -16px
  height 20px
  background-size 20px
  background-position 0 -20px

.gartnerPiAlignLeft
  width 36%
  display inline-block

.gartnerPiReviewsLink
  font-weight 300
  display inline-block
  line-height 15px !important

.gartnerPiChevron
  width 5px
  height 9.4px
  margin -2px 0 0 3px
  display inline-block
  background url(https://reviews.static.gartner.com/public/Widget/img/chevron-right.png) no-repeat 0 0
  vertical-align middle

.gartnerPiAlignRight
  width 60%
  display inline-block
  font-weight 300
  font-size 12px
  text-align initial

.gartnerPiSourcingLink
  color #fff !important
  font-size 12px
  position relative
  line-height 15px !important

.gartnerPiAsOfDate
  transform rotate(-90deg) translate(112px,100px) !important
  opacity .7
  font-size 7px
  letter-spacing .5px
  top 18px
  text-align left

</style>

<script lang="ts" type="text/javascript">
import { Vue, Component } from "nuxt-property-decorator";
import { GartnerPI_Widget } from "../plugins/widget.js";

@Component({})
export default class PFooter extends Vue {
  title: string[] = ["SOLUTION", "COMPANY", "RESOURCES", "CONNECT WITH US"];
  stars: number = localStorage.stars;
  reviews: number = localStorage.reviews;
  date: string = localStorage.date;

  created(){
    GartnerPI_Widget({
        size: "small",
        theme: "dark",
        sourcingLink: "https://gtnr.io/w4vtLlWwM",
        widget_id: "YWFmMzMxODUtMzUyNC00YzhmLTljNGItZThiOGYzNGVkODVl",
        container: document.querySelector(".widget-container")
    });
  };

  data() {
    return {
      ratingScore: localStorage.ratingScore + '%'
    }
  }
}
</script>
