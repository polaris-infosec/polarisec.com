<template>
  <div class="container-fluid px-0">
    <div :class="$style.bannerContainer">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div :class="$style.title">Oops, something went wrong</div>
        <img src="@/assets/images/404/404.png" :class="$style.img" alt="">
        <div :class="$style.link">
          <nuxt-link to="/home">Go Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"
.img
  width 272px
  height 97px

.bannerContainer
  background-image url("@/assets/images/404/background.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding 100px 16px
  display flex
  align-items center
  justify-content center

.title
  font-size 36px
  line-height 55px
  color: $text-8
  font-weight 800
  text-transform uppercase
  margin-bottom 38px
  text-align center

.link
  margin-top 50px
  font-size 32px
  line-height 42px
  text-decoration-line underline
  font-weight 600
  text-align center

  a
    color $brand-2

@media only screen and (min-width: 992px)
  .img
    width 547px
    height 194px

  padding 200px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class ErrorPage extends Vue {

}
</script>
