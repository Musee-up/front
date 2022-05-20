<template>
  <v-container class=" justify-center">

    <guide-title>
    </guide-title>

    <v-row class="filter">
      <v-chip-group>
        <v-chip v-for="(filter, i) in filters" :key="i">
          {{filter}}
        </v-chip>
      </v-chip-group>
    </v-row>

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
      iter: Array(3).keys(),
      guide: {
        name: 'Héloise Doiteau',
        photo: '/portrait.png',
        rating: '4.8',
        ratingNbr: '435',
        location: 'Île-de-France'
      },
    }
  },
}
</script>

