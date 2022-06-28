<template>

  <v-slide-group show-arrows class="pa-4 fill-height justify-center">
    <v-slide-item class="slide-item pa-2">
      <experience-creation-photo-input class="ma-2" @upload="getUpload" />
    </v-slide-item>
    <!-- <div class="d-flex flex-column middle-item"> -->
    <!--   <v-slide-item class="slide-item-2 ma-2"> -->
    <!--     <experience-creation-photo-input /> -->
    <!--   </v-slide-item> -->
    <!--   <v-slide-item class="slide-item-2 ma-2"> -->
    <!--     <experience-creation-photo-input /> -->
    <!--   </v-slide-item> -->
    <!-- </div> -->
    <!-- <v-slide-item class="slide-item ma-2"> -->
    <!--   <experience-creation-photo-input /> -->
    <!-- </v-slide-item> -->
  </v-slide-group>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    createForm(img) {
      const form = new FormData()

      Object.values(img).forEach((file) => {
        form.append('files', file, file.name)
      })
      return form
    },
    getUpload(img) {
      this.$axios.post('/upload', this.createForm(img))
        .then((res) => {
          const ids = res.data.map((file) => file.id)
          this.$emit('upload', ids)
      })
      .catch((err) => {
        console.log(err)
      })
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
