<template>
  <div :class="$style.contactSalePanel">
    <div :class="$style.contactSaleSection" class="app-width">
      <b-row
        class="d-flex mx-0 justify-content-lg-between justify-content-center align-items-center black-text text-lg-left text-center">
        <h5 class="fw-500 col-lg-7 col-12 p-0 body-1-sm secondary-1-sm" v-html="$t('partner.contact-sales.content')">

        </h5>
        <p-button class="mt-4 pt-2" v-if="mobileScreen" :show-icon="false" :gradient="2" text="Contact sales"
                  @click="gotoContact"/>
        <nuxt-link :to="localePath('/contact')" class="mr-5 p-0" v-else>
          <div :class="$style.contact" class="fw-500">
            {{ $t('button-group.button-3') }} <span class="ml-2"><img src="@/assets/icons/call_made.png" alt=""
                                                                      width="24"
                                                                      height="24"></span>
          </div>
        </nuxt-link>

      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.contact
  font-size 16px
  line-height 21px
  font-weight 600
  color $text-1

.contactSaleSection
  padding 32px 27px

.contactSalePanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #8BDFAF

@media only screen and (min-width: 992px)
  .contactSaleSection
    padding 20px 60px
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class ContactSale extends Vue {

  get mobileScreen() {
    return window.screen.width < 992.0
  }

  gotoContact() {
    return this.$router.push({path: this.localePath('/contact')})
  }

}
</script>
