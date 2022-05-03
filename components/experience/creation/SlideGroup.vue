<template>
  <v-slide-group>
    <v-slide-item class="slide-item">
      <experience-creation-photo-input />
    </v-slide-item>
    <v-slide-item class="mx-4 slide-item">
      <v-container
        fluid
        class="align-content-space-between"
        style="display: grid"
      >
        <v-row
          ><experience-creation-photo-input class="slide-item-middle"
        /></v-row>
        <v-row
          ><experience-creation-photo-input class="slide-item-middle"
        /></v-row>
      </v-container>
    </v-slide-item>
    <v-slide-item class="slide-item">
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
.slide-item {
  height: 100% !important;
  width: 30%;
}

.slide-item-middle {
  width: 100% !important;
  height: 40%;
}
</style>
