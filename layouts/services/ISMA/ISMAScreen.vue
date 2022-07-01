<template>
  <div>
    <assessment/>
    <dimensions/>
  </div>
</template>
<style module lang="stylus">

</style>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import Assessment from "~/layouts/services/ISMA/Assessment.vue";
import Dimensions from "~/layouts/services/ISMA/Dimensions.vue";

@Component({
  components: {Dimensions, Assessment, PButton}
})
export default class ISMAScreen extends Vue {

}
</script>


