<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <h2>Sign up for our newsletter</h2>
      <h5>Be the first to receive new feature and product updates.</h5>
      <div class="row justify-content-center mx-0 col-12">
        <b-form
          @submit="onSubmit"
          method="POST"
          class="d-flex justify-content-center col-12">
          <b-form-input v-model="email" placeholder="Your Email *" type="email" required
                        class="input-normal" name="entry.1645255945"></b-form-input>
          <p-button :class="$style.sendMessageBtn" :gradient="1" type="submit" text="Subscribe"
                    variant="primary"></p-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: #0F0F0F;

.bodyContainer
  padding 58px 0 101px
  text-align center

  h2
    color $text-8

  h5
    font-weight normal
    color $text-6
    margin-top 19px
    margin-bottom 49px

  button
    height fit-content
    margin-left 24px

  input
    background: #374b61 !important
    font-size: 1.125rem
    border-radius: 4px;
    width: 280px
    height 52px
    color white !important

.textContainer
  padding-right 60px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import PInput from "~/components/PInput.vue";

@Component({
  components: {PInput, PButton}
})
export default class HomeNewsletter extends Vue {
  email: string = '';
  hintText: string = '';
  showHint: boolean = false;
  isLoading: boolean = false;


  async onSubmit(event: any) {
    event.preventDefault();
    if (this.isLoading) return;

    try {
      this.isLoading = true;
      let result = await this.$axios.$post(`https://docs.google.com/forms/u/0/d/e/1FAIpQLScWdVNRsrAQeOVt5Xj3eDd1i1rot7BHXSjpvlpAwx1Aei7vcw/formResponse`, {
        name: 'entry.1645255945'
      });
      this.hintText = result.data.msg;
      this.showHint = true;
      this.isLoading = false;
      console.log(result)
    } catch (e) {
      await this.$router.replace('/error-page')
    }
    this.showHint = false;
  }

}
</script>
