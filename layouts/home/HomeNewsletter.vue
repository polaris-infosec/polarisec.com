<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width text-center" :class="$style.bodyContainer">
      <b-row class="mx-0 flex-column align-items-center">
        <h2 class="my-0 mb-4">Sign up for our newsletter</h2>
        <h5 class="my-0 mb-5">Be the first to receive new feature and product updates.</h5>

        <p-button class="col-lg-2" white-icon :class="$style.button" :gradient="2" text="Sign up" @click="gotoPolaris()"></p-button>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.container
  background-color: #0F0F0F;

.bodyContainer
  h2
    color $text-8

  h5
    font-weight normal
    color $text-6
    margin-top 19px
    margin-bottom 49px

  input
    background: #374b61 !important
    font-size: 1.125rem
    border-radius: 4px;
    width: 280px
    height 52px
    color white !important

.textContainer
  padding-right 60px

@media only screen and (min-width: 992px)
  .bodyContainer
    padding 58px 0 101px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import PInput from "~/components/PInput.vue";

@Component({
  components: {PInput, PButton}
})
export default class HomeNewsletter extends Vue {

  gotoPolaris() {
    window.open('http://eepurl.com/hVGfR9', '_blank');
  }
}
</script>
