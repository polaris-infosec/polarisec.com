<template>
  <div fluid>
    <navbar></navbar>
    <p-footer></p-footer>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Navbar from "~/components/PNavbar.vue";
import PFooter from "~/components/PFooter.vue";

@Component({
  components: {PFooter, Navbar}
})
export default class IndexPage extends Vue {

}
</script>
