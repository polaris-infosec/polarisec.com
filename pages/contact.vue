<template>
  <div :class="$style.contactMain">
    <div :class="$style.contactSection" class="app-width text-lg-left text-center">
      <div class="pb-4">
        <h1>{{ $t('contact.title') }}</h1>
      </div>
      <div class="pt-1">
        <p class="text-6">
          {{ $t('contact.content') }}
        </p>
      </div>
      <b-row class="mx-0 align-items-center justify-content-lg-start justify-content-center mb-2">
        <img src="@/assets/icons/phone.png" width="24" height="24">
        <span :class="$style.phoneNumber" class="ml-1">
          {{ $t('contact.phone-number') }}
        </span>
      </b-row>
      <div class="pl-3 mt-4" :class="$style.form">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="name" :placeholder="$t('contact.name')" required
                            class="input-normal"></b-form-input>
            </b-col>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="website" required :placeholder="$t('contact.website')"
                            class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="email" :placeholder="$t('contact.email')" type="email" required
                            class="input-normal"></b-form-input>
            </b-col>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="phone" :placeholder="$t('contact.phone')" required
                            class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="company" :placeholder="$t('contact.company')" required
                            class="input-normal"></b-form-input>
            </b-col>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="role" :placeholder="$t('contact.role')" required
                            class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <p-select class="mb-3 input-normal" :item-select="itemSelect" :options="topicOptions"
                        :placeHolder="$t('contact.topic.text').toString()"/>
            </b-col>
            <b-col lg="4" cols="12" class="p-0 mr-3">
              <b-form-input v-model="country" :placeholder="$t('contact.country')" class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="9" cols="12" class="p-0 pr-lg-2">
              <b-form-textarea
                id="textarea"
                v-model="message"
                required
                :placeholder="$t('contact.message')"
                rows="3"
                max-rows="6"
                class="input-normal col-lg-11 col-12"
                :class="$style.messageInput"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <p-button class="col-12" style="max-width: 840px" :class="$style.sendMessageBtn" :show-icon="false"
                      type="submit"
                      :text="$t('button-group.button-2')"></p-button>
          </b-row>
        </b-form>
      </div>

      <div class="d-flex justify-content-center">
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          :class="[$style.message, status]"
        >
          {{ alert }}
        </b-alert>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"
.phoneNumber
  font-weight 800
  font-size 22px
  line-height 32px
  background linear-gradient(100.84deg, #3C68DC 0%, #9D659E 70.83%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  background-clip text
  text-fill-color transparent

.placeHolderSelect
  color #6c757a !important

  option
    color white !important

.success
  background-color #8BDFAF
  border-color #8BDFAF

.error
  background-color red
  border-color red

.message
  position fixed
  bottom 0
  z-index 2
  color white

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 10px

.sendMessageBtn
  height 54px
  width 199px
  font-size 16px
  line-height 21px
  font-weight 600

.messageInput
  height 245px !important

.contactSection
  padding 48px 28px 88px

.contactMain
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/contact-bg.png")

@media only screen and (min-width: 992px)
  .contactSection
    padding 120px 98px 121px 122px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PButton from "~/components/PButton.vue";
import PSelect, {IOption} from "~/components/PSelect.vue";

@Component({
  components: {
    PSelect,
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
  country: string = '';
  itemSelect: IOption | null = null

  dismissSecs: number = 5;
  dismissCountDown: number = 0;
  alert: string = '';
  statusType: string = '';

  mounted() {
    this.$nuxt.$on('setSelectOption', (topic: IOption) => {
      this.topic = topic.content
      this.itemSelect = topic
    });
  }

  get options() {
    return [
      {
        value: 'Request a demo',
        text: 'Request a demo'
      }, {
        value: 'Technical support',
        text: 'Technical support'
      }, {
        value: 'Contact sales',
        text: 'Contact sales'
      }, {
        value: 'Others',
        text: 'Others'
      },
    ]
  }

  get topicOptions() {
    return [
      {
        content: this.$t('contact.topic.option-1.text'),
        isSelect: false,
        subOptions: [
          {
            content: this.$t('contact.topic.option-1.sub-option-1'),
            isSelect: false,
          },
          {
            content: this.$t('contact.topic.option-1.sub-option-2'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-3'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-4'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-5'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-6'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-7'),
            isSelect: false,
          }, {
            content: this.$t('contact.topic.option-1.sub-option-8'),
            isSelect: false,
          },
        ]
      }, {
        content: this.$t('contact.topic.option-2'),
        isSelect: false,
      }, {
        content: this.$t('contact.topic.option-3'),
        isSelect: false,
      }, {
        content: this.$t('contact.topic.option-4'),
        isSelect: false,
      },
    ]
  }


  countDownChanged(dismissCountDown: any) {
    this.dismissCountDown = dismissCountDown
  }

  showAlert() {
    this.dismissCountDown = this.dismissSecs
  }

   head() {
    return {
      title: this.$t('contact.header-title')
    }
  }

  showButton() {
    return !!this.name && !!this.website && !!this.email && !!this.phone && !!this.company && !!this.role && !!this.topic && !!this.message;
  }

  async onSubmit(event: any) {
    event.preventDefault();
    if (!this.showButton) return;

    if (!this.topic) {
      this.alert = "Please Select Your Topic";
      this.statusType = 'error';
      this.showAlert();
      return
    }

    const response = await this.$axios.$post('https://polarisec.io/api/contact-us', {
      'name': this.name,
      'email': this.email,
      'phone': this.phone,
      'company': this.company,
      'position': this.role,
      'topic': this.topic,
      'website': this.website,
      'country': this.country,
      'message': this.message,
    });

    if (response.success) {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.company = '';
      this.role = '';
      this.topic = '';
      this.website = '';
      this.message = '';
      this.country = '';
      this.itemSelect = null;
      this.alert = 'Thanks, message received. We will get back to you soon';
      this.statusType = 'success';
    } else {
      this.alert = response.message;
      this.statusType = 'error';
    }

    this.showAlert();
  }

  get status() {
    switch (this.statusType) {
      case 'success':
        return this.$style.success;
      case 'error':
        return this.$style.error;
    }
  }
}
</script>
