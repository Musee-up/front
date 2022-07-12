<template v-if="rating">
  <div class="rating-container d-flex text-center">
    <v-icon :color="color" class="star">mdi-star</v-icon>
    <p
      class="text-subtitle-2 text-center"
      :class="'rating my-auto ' + (color ? color + '--text' : '')">
      {{ rating.value }}/5 ({{ rating.length }} avis)
    </p>
  </div>
</template>

<script>
export default {
  props: ['rating', 'color'],
}
</script>

<style lang="scss" scoped>
.rating-container {
  @include for-desktop-down {
    justify-content: center;
  }
}
</style>
