<template>
  <div class="location d-flex align-center">
    <v-icon :color="color" class="locationIcon">mdi-map-marker</v-icon>
    <h3 :class="`locationAdress my-0 ${color}--text`">
      {{ guide.location }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ['guide', 'color'],
}
</script>
