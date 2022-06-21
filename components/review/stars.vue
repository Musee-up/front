<template>
  <div>
    <v-icon v-for="i in ratingArray" :key="i" color="primary" small>
      mdi-star
    </v-icon>
  </div>
</template>

<script>
export default {
  props: ['rating'],
  data() {
    return {
      ratingArray: [...Array(this.rating).keys()],
    }
  },
}
</script>
