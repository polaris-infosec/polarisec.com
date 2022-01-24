<template>
  <div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Navbar from "~/components/PNavbar.vue";
import PFooter from "~/components/PFooter.vue";
import Partner from "~/pages/partner.vue";

@Component({
  components: {PFooter, Navbar, Partner}
})
export default class IndexPage extends Vue {

}
</script>
