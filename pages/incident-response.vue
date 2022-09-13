<template>
  <incident-response-screen/>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import IncidentResponseScreen from "~/layouts/services/IncidentResponse/IncidentResponseScreen.vue";

@Component({
  components: {IncidentResponseScreen}
})
export default class IncidentResponse extends Vue {
  head() {
    return {
      title: this.$t('services.incident-response.header-title')
    }
  }
}
</script>


