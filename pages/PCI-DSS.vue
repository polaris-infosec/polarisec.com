<template>
  <p-c-i-d-s-s-audit-screen/>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import PCIDSSAuditScreen from "~/layouts/services/PCIDSSaudit/PCIDSSAuditScreen.vue";

@Component({
  components: {PCIDSSAuditScreen}
})
export default class PciDssAudit extends Vue {

}
</script>


