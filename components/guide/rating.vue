<template v-if="rating">
  <div class="rating-container d-flex justify-center text-center">
    <v-icon class="star">mdi-star</v-icon>
    <p class="rating my-auto">
      {{ rating.value }}/5 ({{ rating.length }} avis)
    </p>
  </div>
</template>

<script>
export default {
  props: ['rating'],
}
</script>

//<style lang="scss" scoped>
//.rating-container {
//  > * {
//    @extend .mx-1;
//  }
//}
//</style>
