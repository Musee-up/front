<template>
  <v-container>
    <v-row>
      <h2>Avis</h2>
    </v-row>

    <v-row class="px-4">
      <v-container v-for="(_, i) in reviews" :key="i">
        <v-row>
          <review-profile :review="review"> </review-profile>
        </v-row>

        <v-row>
          <p>
            {{ review.text }}
          </p>
        </v-row>

        <v-row v-if="i != reviews.length - 1" class="my-4">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-row>

    <v-row class="ma-2">
      <v-divider></v-divider>
    </v-row>

    <v-row class="justify-center">
      <v-btn color="primary" rounded outlined> Afficher plus d'avis </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      reviews: [...Array(3).keys()],
      review: {
        rating: 5,
        date: 'Mai 2021',
        experienceTitle: 'Les Recoins de Montmartre',
        text: 'Cette découverte du quartier de Montmartre avec Héloïse a été absolument formidable. Héloïse est une jeune guide passionnée et passionnante qui connaît le quartier comme sa poche et qui vous le fera découvrir dans son authenticité. En plus, Héloïse nous a sensibilisé sur les enjeux qui existent de préservation de ce patrimoine. Je referai cette expérience ou une autre proposée par Héloïse avec grand plaisir ! :)  ',
        user: {
          name: 'Marion Lefebvre',
          photo: '/portrait.png',
        },
      },
    }
  },
}
</script>
