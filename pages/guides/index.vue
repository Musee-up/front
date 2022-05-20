<template>
  <v-container class="justify-center">
    <guide-title class="my-2"> </guide-title>

    <guide-filters :filters="filters"></guide-filters>

    <v-row align="center" justify="center">
      <v-col v-for="(_, i) in iter" :key="i" cols="4">
        <guide-list-item :guide="guide" class="guide"> </guide-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        'Paris',
        '12 mai',
        'Spécialités',
        'Avis',
        'Langues',
        'Horaires',
      ],
      iter: Array(15).keys(),
      guide: {
        name: 'Héloise Doiteau',
        photo: '/portrait.png',
        rating: '4.8',
        ratingNbr: '435',
        location: 'Île-de-France',
      },
    }
  },
}
</script>
