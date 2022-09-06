<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width text-center" :class="$style.bodyContainer">
      <div class="d-flex justify-content-center mb-5">
        <h2 class="h3-sm col-9 mb-4">{{ $t('home.intro') }}</h2>
      </div>
      <b-row class="mx-0 flex-lg-row flex-column">
        <template v-for="introduce in introduces">
          <b-col :class="$style.introduceContainer" :key="introduce.img" class="mt-lg-0 mt-5">
            <img :class="$style.img" :src="introduce.img" alt="">
            <h5 :class="$style.introduceTitle">{{ introduce.title }}</h5>
            <div :class="$style.introduceText" class="body-2">{{ introduce.text }}</div>
          </b-col>
        </template>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color $background-1

.bodyContainer
  padding 48px 16px 42px

.img
  width 150px
  height 150px
  position absolute
  top -50px
  left 50%
  transform: translate(-50%);

.introduceContainer
  background-color: #1B1C1D
  border-radius 12px
  margin 0 18px
  padding 0 29px 46px
  position relative
  width fit-content

.introduceTitle
  font-weight bold
  color $brand-2
  margin-top 112px
  margin-bottom 15px

.introduceText
  color $text-7
  text-align center

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 100px 140px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeIntroduce extends Vue {

  get introduces() {
    return [
      {
        img: require('@/assets/images/home/cutting-edge-technology.png'),
        title: this.$t('home.benefit.title-1'),
        text: this.$t('home.benefit.content-1'),
      },
      {
        img: require('@/assets/images/home/easy-to-deploy.png'),
        title: this.$t('home.benefit.title-2'),
        text: this.$t('home.benefit.content-2'),
      },
      {
        img: require('@/assets/images/home/easy-to-use.png'),
        title: this.$t('home.benefit.title-3'),
        text: this.$t('home.benefit.content-3'),
      },
    ];
  }

}
</script>
