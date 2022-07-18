<template>
  <v-footer app center flat bottom absolute>
    <v-container fluid class="justify-space-between pa-4">
      <v-divider class="my-4"></v-divider>
      <v-row justify="center">
        <component
          :is="component"
          v-for="(component, index) in components"
          :key="index"
        >
        </component>
      </v-row>
      <home-footer-copyright></home-footer-copyright>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      components: [
        'home-footer-medias',
        'home-footer-links',
        'home-footer-newsletter',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: $white;
}

.v-footer * {
  font-weight: bold;
  font-size: 14px;
}
</style>
