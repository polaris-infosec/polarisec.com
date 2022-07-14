<template>
  <div :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <b-row class="mx-0 flex-grow-1 justify-content-lg-between">
        <b-col class="p-0 mb-lg-0 mb-4 text-center text-lg-left" lg="4" cols="12">
          <h2>Co-Founders</h2>
        </b-col>
        <b-col lg="8" cols="12" class="p-0">
          <b-row  class="mx-0 justify-content-between">
            <template v-for="leader in leaderships">
              <b-col @click="leader.linkedin && goToLinkin(leader.linkedin)" :key="leader.name"
                   class="d-inline-flex align-items-center mr-4" lg="5" cols="12"
                   :class="$style.leaderContainer">
                <img :src="leader.img" alt="" width="87" height="87">
                <div class="ml-3">
                  <div :class="$style.name" class="body-1 mb-1">{{ leader.name }}</div>
                </div>
              </b-col>
            </template>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-image url("@/assets/images/company/team-background.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.bodyContainer
  padding 16px

  h2
    color $text-8

.leaderContainer
  margin-bottom 30px
  border-radius 18px
  background #141414
  box-shadow 0 0 19.5012px rgba(0, 0, 0, 0.25)
  padding 18px 16px
  cursor default
  border 1px solid #C5EFD7

.leaderContainer:hover
  background linear-gradient(142.19deg, #0D0159 1.08%, #8BDFAF 99.93%)
  cursor pointer

  .position
    color white

.advisorContainer
  margin-top 69px

.position
  color $text-3
  font-size 14px
  line-height 25px

.name
  color $text-8

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 93px 152px 121px 145px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class CompanyTeams extends Vue {

  get leaderships() {
    return [
      {
        name: 'Tin Nguyen',
        position: 'CEO, Co-Founder',
        img: require('@/assets/images/company/tin-nguyen.png'),
        linkedin: 'https://www.linkedin.com/in/tin-n/'
      },
      {
        name: 'Thanh Nguyen',
        position: 'Chairman, Co-Founder',
        img: require('@/assets/images/company/thanh-nguyen.png'),
        linkedin: 'https://www.linkedin.com/in/thanh/'
      },
      {
        name: 'Heng Yu Lee',
        position: 'Head of Business Development, APAC',
        img: require('@/assets/images/company/heng-yu-lee.png'),
      },
      {
        name: 'Chuan Kai Toh',
        position: 'Head of Sales, APAC',
        img: require('@/assets/images/company/chuan-kai-toh.png'),
      },
      {
        name: 'Van Hoa Nguyen',
        position: 'Head of Product Development',
        img: require('@/assets/images/company/van-hoa-nguyen.png'),
      },
    ];
  }

  goToLinkin(linkedin: string) {

    window.open(linkedin, '_blank');
  }
}
</script>
