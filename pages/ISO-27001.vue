<template>
  <i-s-o27001-audit-screen/>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import ISO27001AuditScreen from "~/layouts/services/ISO27001audit/ISO27001AuditScreen.vue";


@Component({
  components: {ISO27001AuditScreen}
})
export default class Iso27001audit extends Vue {
  head() {
    return {
      title: this.$t("services.ISO-27001.header-title")
    }
  }
}
</script>


