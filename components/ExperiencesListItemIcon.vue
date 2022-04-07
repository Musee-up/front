<template>
  <v-col class="d-inline-flex">
    <p class="ma-2 bold list-attributes font-weight-bold">
      {{ props.iconValue }}
    </p>
    <v-icon class="ma-1" color="primary">{{ props.icon }}</v-icon>
  </v-col>
</template>

<script setup>
const props = defineProps({
  experience: Object,
  icon: String,
  iconValue: String,
})
</script>
