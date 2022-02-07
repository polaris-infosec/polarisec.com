<template>
  <div class="container-fluid p-0">
    <div :class="$style.container">
      <h2>Sign up for our newsletter</h2>
      <h5>Be the first to receive new feature and product updates.</h5>
      <p-button text="Sign up" @click="onClick"/>
    </div>
  </div>
</template>

<style module lang='stylus'>
  @import "@/styles/config.styl"

  .container
    background-color: #0F0F0F;
    padding 58px 0 101px
    text-align center

    h2
      color $text-8

    h5
      font-weight normal
      color $text-6
      margin-top 19px
      margin-bottom 49px

  .textContainer
    padding-right 60px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class HomeNewsletter extends Vue {

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }

}
</script>
