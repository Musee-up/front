<template>
  <v-btn filled rounded class="ma-2 btn">
    {{ props.text }}
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.btn {
  background-color: $_blue !important;
  color: $white !important;
  align-self: center;
}
</style>
