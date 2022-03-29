<template>
  <error-page/>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import ErrorPage from "~/pages/error-page.vue";

@Component({
  components: {ErrorPage}
})
export default class _ extends Vue {

}
</script>
