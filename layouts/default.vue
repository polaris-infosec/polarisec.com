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

  get scale() {
    const viewWidth = window.screen.width;
    if (viewWidth < 1280.0) {
      return viewWidth / 1280.0;
    }
    return 1;
  }

  get head() {
    return {
      meta:  [
        {
          name: 'viewport',
          content: `width=device-width, initial-scale=${this.scale}`
        },
      ],
    }
  };

}
</script>
