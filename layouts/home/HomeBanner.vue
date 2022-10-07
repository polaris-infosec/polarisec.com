<template>
  <div :class="$style.bannerContainer">
    <div class="app-width" :class="$style.bannerSection">
      <b-row class="mx-0">
        <b-col cols="12" lg="8"
               class="p-0 justify-content-lg-start justify-content-center align-items-center flex-lg-row flex-column text-lg-left text-center">
          <h2 class="my-0 text-lg-left mb-3 h3-sm">{{ $t('home.header-title') }}</h2>
          <div :class="$style.divide"></div>
          <h3 class="mb-4 mt-lg-0 mt-3 h5-sm">{{ $t('home.header-slogan') }}</h3>
          <p class="col-lg-11 col-12 p-0 body-1 my-0 mb-5 pb-2" v-html="$t('home.header-content')">
          </p>
          <p-button :text="$t('button-group.button-1')" :class="$style.button" @click="onClick"/>
        </b-col>
        <b-col
          class="p-0 d-flex flex-column align-items-lg-start align-items-center text-lg-left text-center align-items-lg-end mt-5"
          lg="4" cols="12">
          <div>
            <p class="h5 pl-lg-2 ml-1 mb-3" style="font-weight: 400 !important;">As seen on</p>
            <a
              href="https://www.gartner.com/reviews/market/web-application-and-api-protection/vendor/polaris-infosec/product/polaris-waap"
              target="_blank">
              <img src="@/assets/images/home/gartner-peerinsights-color.png" :class="$style.asSeenOn"/>
            </a>
          </div>

          <!-- <div id="widgetContainer" style="min-width: 300px;  color: #fff !important; line-height: normal; margin-top: 10px;">
                <div
                  id="gartner-pi-widget"
                  data-size="small"
                  data-theme="dark"
                  style="background-color: rgba(0, 0, 0, 0); display: inline-block; width: 325px; text-align: initial; font-weight: 400; letter-spacing: 0; font-size: 14px;"
                >
                  <a
                    id="gartner-pi-link"
                    href="https://www.gartner.com/reviews/market/cloud-web-application-and-api-protection/vendor/polaris-infosec?utm_source=polaris-infosec&amp;utm_medium=referral&amp;utm_campaign=widget&amp;utm_content=YWFmMzMxODUtMzUyNC00YzhmLTljNGItZThiOGYzNGVkODVl"
                    class="gartner-pi-link"
                    target="_blank"
                    rel="nofollow"
                    style="cursor: pointer; color: #fff; display: block; padding: 8px 20px 0 14px; font-weight: 300; font-size: 12px; text-decoration: none;"
                    ><div
                      id="gartner-pi-datacontainer"
                      style="width: 100%;"
                    >
                      <div class="gartner-pi-gradient" style="background: linear-gradient(to top,#002856 5%,rgba(65,66,113,0) 15%);"></div>
                      <div class="gartner-pi-card" style="color: #fff !important;">
                        <div class="gartner-pi-header" style="min-height: 77px;">
                          <h1 class="gartner-pi-h1" style="font-size: 20px; margin: 0 0 3px 0; line-height: normal; font-weight: bolder;">Polaris Infosec</h1>
                          <h2 class="gartner-pi-h2" style="font-size: 11px; letter-spacing: .3px; line-height: normal; margin: 0 0 4px; opacity: .75; font-weight: 300;">
                            Cloud Web Application and API Protection
                          </h2>
                        </div>
                        <div class="gartner-pi-stats" style="border-top: solid 1px #40b3e1; padding-bottom: 4px; display: block; height: 58px;">
                          <div class="gartner-pi-alignLeft" style="width: 50%; display: inline-block;">
                            <div class="gartner-pi-overall-rating" style="padding: 4px 0 3px 4px; text-align: left; display: inline-block;">
                              <span class="gartner-pi-score" style="font-weight: 500; font-size: 24px; margin-right: 8px; display: inline-block;">5</span
                              ><span class="gartner-pi-star-rating" style="display: inline-block; background: url(https://reviews.static.gartner.com/public/Widget/img/stars.png) repeat-x 0 0; margin-top: -14px; height: 20px; width: 100px; background-size: 20px;"
                                ><span
                                  class="gartner-pi-star-rating-score"
                                  style="width: 100%; display: inline-block; background: url(https://reviews.static.gartner.com/public/Widget/img/stars.png) repeat-x 0 -16px; height: 20px; background-size: 20px; background-position: 0 -20px;"
                                ></span
                              ></span>
                            </div>
                            <div class="gartner-pi-reviews-link" style="font-weight: 300; font-size: 12px; display: inline-block;">
                              <span
                                >6 Ratings
                                <span class="gartner-pi-chevron" style="width: 5px; height: 9.4px; margin: -2px 0 0 3px; display: inline-block; background: url(https://reviews.static.gartner.com/public/Widget/img/chevron-right.png) no-repeat 0 0; vertical-align: middle;"></span
                              ></span>
                            </div>
                          </div>
                          <div class="gartner-pi-alignRight" style="width: 40%; display: inline-block !important; font-weight: 300; font-size: 12px; text-align: initial;">
                            <div class="gartner-pi-sourcing-link">
                              <a
                                id="https://gtnr.io/w4vtLlWwM"
                                href="https://gtnr.io/w4vtLlWwM"
                                target="_blank"
                                style="color: #fff; font-size: 13px; position: relative;"
                                >Submit a review</a
                              ><span class="gartner-pi-chevron" style="background-image: url(https://reviews.static.gartner.com/public/Widget/img/chevron-right.png); width: 5px; height: 9.4px; margin: -2px 0 0 3px; display: inline-block; background: url(https://reviews.static.gartner.com/public/Widget/img/chevron-right.png) no-repeat 0 0; vertical-align: middle;"></span>
                            </div>
                          </div>
                          <div
                            class="gartner-pi-as-of-date"
                            title="As of 5 Oct 2022"
                            style="transform: rotate(-90deg) translate(150px,160px); opacity: .7; font-size: 7px; letter-spacing: .5px; top: 18px"
                          >
                            As of 5 Oct 2022
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
                        <div :class="$style.gartnerPiHeader">
                          <h1 :class="$style.gartnerPiH1">Polaris Infosec</h1>
                          <h2 :class="$style.gartnerPiH2">
                            Cloud Web Application and API Protection
                          </h2>
                        </div>
                        <div :class="$style.gartnerPiStats">
                          <div :class="$style.gartnerPiAlignLeft">
                            <div :class="$style.gartnerPiOverallRating">
                              <span :class="$style.gartnerPiScore">{{ stars }}</span
                              ><span :class="$style.gartnerPiStarRating"
                                ><span
                                  :class="$style.gartnerPiStarRatingScore"
                                  :style="{'width':ratingScore}"
                                ></span
                              ></span>
                            </div>
                            <div :class="$style.gartnerPiReviewsLink">
                              <span
                                >{{ reviews }} Ratings
                                <span :class="$style.gartnerPiChevron"></span
                              ></span>
                            </div>
                          </div>
                          <div :class="$style.gartnerPiAlignRight">
                            <div :class="$style.gartnerPiSourcingLink">
                              <a
                                id="https://gtnr.io/w4vtLlWwM"
                                href="https://gtnr.io/w4vtLlWwM"
                                target="_blank"
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

          </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.asSeenOn
  width 266px
  height 60px

.divide
  border 2px solid $brand-1
  width 28%
  height 3px
  margin 0 auto

.bannerSection
  padding 45px 16px 65px

.bannerContainer
  background-image url("@/assets/images/home/banner-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.gartnerPiWidget
  background-color rgba(0, 0, 0, 0) !important
  width 325px
  display inline-block

.gartnerPiLink
  cursor pointer
  color #fff !important
  display block
  padding 8px 20px 0 14px
  font-weight 300
  font-size 12px

.gartnerPiDatacontainer
  width 100%

.gartnerPiGradient
  background linear-gradient(to top,#002856 5%,rgba(65,66,113,0) 15%)

.gartnerPiHeader
  min-height 77px

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
  padding 4px 0 3px 4px
  text-align left
  display block

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
  width 58%
  display inline-block

.gartnerPiReviewsLink
  font-weight 300
  font-size 12px
  display inline-block

.gartnerPiChevron
  width 5px
  height 9.4px
  margin -2px 0 0 3px
  display inline-block
  background url(https://reviews.static.gartner.com/public/Widget/img/chevron-right.png) no-repeat 0 0
  vertical-align middle

.gartnerPiAlignRight
  width 40%
  display inline-block
  font-weight 300
  font-size 12px
  text-align initial

.gartnerPiSourcingLink
  color #fff !important
  font-size 12px
  position relative

.gartnerPiSourcingLink a
  color #fff !important

.gartnerPiAsOfDate
  transform rotate(-90deg) translate(155px,160px) !important
  opacity 0.7
  font-size 7px
  letter-spacing .5px
  top 18px
  text-align left

@media only screen and (min-width: 992px)
  .asSeenOn
    width 328px
    height 74px

  .divide
    display none

  .bannerSection
    padding 161px 60px 238px 152px
    
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import { GartnerPI_Widget } from "../../plugins/widget.js";

@Component({
  components: {PButton}
})
export default class HomeBanner extends Vue {

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
  }

  data() {
    return {
      ratingScore: localStorage.ratingScore + '%'
    }
  }

  onClick() {
    this.$router.push({path: this.localePath('/contact')});
  }

}
</script>
