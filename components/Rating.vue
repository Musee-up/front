<template v-if="rating">
  <div class="rating-container d-flex">
    <v-icon :color="color" class="star">mdi-star</v-icon>
    <p :class="'rating my-auto ' + (color ? color + '--text' : '')">
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
  //include desktop-down
  @include for-desktop-down {
    justify-content: center;
  }
}
</style>
