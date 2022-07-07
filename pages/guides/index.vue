<template>
  <v-container class="justify-center">
    <guide-title class="my-2"> </guide-title>

    <guide-filters
      v-if="!$vuetify.breakpoint.mobile"
      :filters="filters"
    ></guide-filters>

    <v-row justify="left" align="center">
      <v-col v-for="(guide, i) in guides" :key="i" cols="12" md="4" xl="3">
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
        const guides = Guide.mapList(query.guides)
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
