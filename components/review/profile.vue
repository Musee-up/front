<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-avatar color="primary" size="56">
          <nuxt-img :src="review.user.photo"> </nuxt-img>
        </v-avatar>
      </v-col>

      <v-col>
        <v-row>
          {{ review.user.name }}
        </v-row>

        <v-row>
          <review-stars :rating="review.rating"> </review-stars>
        </v-row>

        <v-row>
          <p>{{ review.date }} - {{ review.experienceTitle }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['review'],
}
</script>
