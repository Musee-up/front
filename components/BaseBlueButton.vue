<template>
  <v-btn
    filled
    rounded
    class="ma-2 blue-filled"
    style="align-self: center"
    >
    {{ props.text }}
  </v-btn>

</template>

<script setup>
const props = defineProps({
  text: String
})
</script>
