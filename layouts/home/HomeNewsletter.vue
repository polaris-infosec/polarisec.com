<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <h2>Sign up for our newsletter</h2>
      <h5>Be the first to receive new feature and product updates.</h5>
      <div class="row justify-content-center mx-0">
        <p-input class="text-left"
                 v-model.trim="email"
                 type="email"
                 required
                 :hint="hintText"
                 placeholder="Your Email"/>
        <p-button :text="buttonText" @click="onClick"/>
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

  get buttonText() {
    return this.isLoading ? 'Sending...' : 'Subscribe';
  }

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async onClick() {
    if (this.isLoading) return;
    if (!this.email) {
      this.hintText = 'This field is required.';
      this.showHint = true;
      return;
    }
    if (!this.validateEmail(this.email)) {
      this.hintText = 'Please enter a valid email address.';
      this.showHint = true;
      return;
    }
    try {
      this.isLoading = true;
      let result = await this.$axios.$post(`https://polarisec.us4.list-manage.com/subscribe/post-json?u=696c092114cae4f72b6167d14&id=2b21421c4e&c=jQuery19002007047022959092_1644404259280&EMAIL=${this.email}&b_696c092114cae4f72b6167d14_2b21421c4e=&_=1644404259282`);
      this.hintText = result.data.msg;
      this.showHint = true;
      this.isLoading = false;
    } catch (e) {
      await this.$router.replace('/error-page')
    }
    this.showHint = false;
  }

}
</script>
