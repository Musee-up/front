<template>
  <v-slide-group
    show-arrows
    class="pa-4" style="height: 100%">
    <v-slide-item class="slide-item pa-2">
      <experience-creation-photo-input class="ma-2"/>
    </v-slide-item>
    <div class="d-flex flex-column middle-item">
      <v-slide-item class="slide-item-2 ma-2">
        <experience-creation-photo-input />
      </v-slide-item>
      <v-slide-item class="slide-item-2 ma-2">
        <experience-creation-photo-input />
      </v-slide-item>
    </div>
    <v-slide-item class="slide-item ma-2">
      <experience-creation-photo-input />
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    upload(img) {
      console.log(img)
    },
  },
}
</script>

<style scoped>
.middle-item {
  height: 94%;
  width: 33%;
}

.slide-item-2 {
  height: 50% !important;
}

.slide-item {
  height: 98% !important;
  width: 33%;
}
</style>
