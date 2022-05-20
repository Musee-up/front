<template>
  <div class="rating-container d-flex justify-center text-center">
    <v-icon class="star">mdi-star</v-icon>
    <p class="rating my-auto">
      {{ guide.rating }}/5 ({{ guide.ratingNbr }} avis)
    </p>
  </div>
</template>

<script>
export default {
  props: ['guide'],
}
</script>

<style lang="scss" scoped>
.rating-container {
  > * {
    @extend .mx-1;
  }
}
</style>
