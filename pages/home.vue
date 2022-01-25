<template>
  <div>
    <home-banner/>
    <home-introduce/>
    <home-video-introduce/>
    <home-web-application-security/>
    <home-artificial-intelligence/>
    <home-threat-intelligence/>
    <home-slider/>
    <home-newsletter/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import HomeBanner from "@/layouts/home/HomeBanner.vue";
import HomeIntroduce from "~/layouts/home/HomeIntroduce.vue";
import HomeVideoIntroduce from "~/layouts/home/HomeVideoIntroduce.vue";
import HomeWebApplicationSecurity from "~/layouts/home/HomeWebApplicationSecurity.vue";
import HomeArtificialIntelligence from "~/layouts/home/HomeArtificialIntelligence.vue";
import HomeThreatIntelligence from "~/layouts/home/HomeThreatIntelligence.vue";
import HomeSlider from "~/layouts/home/HomeSlider.vue";
import HomeNewsletter from "~/layouts/home/HomeNewsletter.vue";

@Component({
  components: {
    HomeNewsletter,
    HomeSlider,
    HomeThreatIntelligence,
    HomeArtificialIntelligence,
    HomeWebApplicationSecurity,
    HomeVideoIntroduce,
    HomeIntroduce,
    HomeBanner
  }
})
export default class HomePage extends Vue {

}
</script>
