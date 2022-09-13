<template>
  <g-d-p-r-audit-screen/>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import GDPRAuditScreen from "~/layouts/services/GDPRaudit/GDPRAuditScreen.vue";


@Component({
  components: {GDPRAuditScreen}
})
export default class GdprAudit extends Vue {
  head() {
    return {
      title: this.$t('services.GDPR.header-title')
    }
  }
}
</script>


