<template>
  <div>
    <p-navbar/>
    <main>
      <Nuxt/>
    </main>
    <p-footer/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PNavbar from "~/components/PNavbar.vue";
import PFooter from "~/components/PFooter.vue";

@Component({
  components: {PFooter, PNavbar}
})
export default class MainLayouts extends Vue {

}
</script>
