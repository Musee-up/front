<template>
  <v-btn outlined @click="chooseFile">
    <v-img
      contain
      max-width="100%"
      max-height="100%"
      class="justify-center align-center"
      aspect-ratio="1"
      :src="filePreview ? filePreview : ''"
    >
      <v-icon v-if="!filePreview" color="primary">mdi-download</v-icon>
      <input
        ref="fileInput"
        type="file"
        style="display: none"
        @input="selectImgFile"
      />
    </v-img>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      filePreview: null,
    }
  },
  methods: {
    chooseFile() {
      this.$refs.fileInput.click()
    },
    selectImgFile() {
      const imgFile = this.$refs.fileInput.files

      if (imgFile && imgFile[0]) {
        this.$emit('upload', imgFile[0])

        const reader = new FileReader()
        reader.onload = (e) => {
          this.filePreview = e.target.result
        }
        reader.readAsDataURL(imgFile[0])
      }
    },
  },
}
</script>
