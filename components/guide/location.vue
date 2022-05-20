<template>
  <div class="location d-flex align-center">
    <v-icon class="locationIcon">mdi-map-marker</v-icon>
    <h2 class="locationAdress my-0">{{ guide.location }}</h2>
  </div>
</template>

<script>
export default {
  props: ['guide'],
}
</script>
