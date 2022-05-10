<template>
  <v-container>
    <experience-calendar-form>
    </experience-calendar-form>
    <experience-calendar-slot v-if="loaded"
    ></experience-calendar-slot>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      loaded:false
    }
  },
  async mounted() {
    await this.$store.dispatch('guide/load')
    this.loaded = true
  },

}
</script>
