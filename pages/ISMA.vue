<template>
  <i-s-m-a-screen></i-s-m-a-screen>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue,Component} from 'nuxt-property-decorator'
import ISMAScreen from "~/layouts/services/ISMA/ISMAScreen.vue";

@Component({
  components: {ISMAScreen}
})
export default class ISMA extends Vue {
  head() {
    return {
      title: this.$t('services.ISMA.header-title')
    }
  }
}
</script>


