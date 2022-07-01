<template>
  <v-container class="justify-center">
    <guide-title class="my-2"> </guide-title>

    <guide-filters :filters="filters"></guide-filters>

    <v-row align="center" justify="center">
      <v-col v-for="(guide, i) in guides" :key="i" cols="4">
        <guide-list-item :guide="guide" class="guide"> </guide-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import guidesQuery from '@/graphql/queries/guides'
import Guide from '@/types/Guide'

export default {
  apollo: {
    guides: {
      query: guidesQuery,
      update(query) {
        if (!Guide) return query
        const guides = query.guides.data.map(Guide.map)
        return guides
      },
    },
  },
  data() {
    return {
      Guide,
      filters: [
        'Paris',
        '12 mai',
        'Spécialités',
        'Avis',
        'Langues',
        'Horaires',
      ],
    }
  },
}
</script>
