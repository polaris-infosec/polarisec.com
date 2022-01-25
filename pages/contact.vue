<template>
  <div :class="$style.contactMain">
    <div class="pb-4">
      <h1>Contact us</h1>
    </div>
    <div class="pt-1">
      <p class="text-6">
        Get in touch with us about our products and services.
      </p>
    </div>
    <div class="pl-3" :class="$style.form">
      <b-row>
        <b-col cols="4" class="p-0 pr-20px">
          <b-form-input v-model="name" placeholder="Your Name" class="input-normal"></b-form-input>
        </b-col>
        <b-col cols="4" class="p-0">
          <b-form-input v-model="website" placeholder="Your Website" class="input-normal"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" class="p-0 pr-20px">
          <b-form-input v-model="email" placeholder="Your Email" class="input-normal"></b-form-input>
        </b-col>
        <b-col cols="4" class="p-0">
          <b-form-input v-model="phone" placeholder="Your Phone" class="input-normal"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" class="p-0 pr-20px">
          <b-form-input v-model="company" placeholder="Your Company" class="input-normal"></b-form-input>
        </b-col>
        <b-col cols="4" class="p-0">
          <b-form-input v-model="role" placeholder="Your Role" class="input-normal"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8" class="p-0">
          <b-form-input v-model="topic" placeholder="Your Topic" class="input-normal"></b-form-input>
        </b-col>
        <b-col cols="8" class="p-0">
          <b-form-textarea
            id="textarea"
            v-model="message"
            placeholder="Your Message"
            rows="3"
            max-rows="6"
            class="input-normal"
            :class="$style.messageInput"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <p-button :class="$style.sendMessageBtn" :gradient="1" text="Send Message" class="mr-4"/>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"
.sendMessageBtn
  height 54px
  width 199px
  font-size 16px
  line-height 21px
  font-weight 600

.messageInput
  height 245px !important

.contactMain
  height 1081px
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/contact-bg.png")
  padding 120px 98px 0 122px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PButton from "~/components/PButton.vue";

@Component({
  components:{
    PButton
  }
})
export default class Contact extends Vue {
  name: string = '';
  website: string = '';
  email: string = '';
  phone: string = '';
  company: string = '';
  role: string = '';
  topic: string = '';
  message: string = '';
}
</script>
