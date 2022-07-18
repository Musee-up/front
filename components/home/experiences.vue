<template>
  <v-container class="pt-16">
    <v-row justify="center" class="text-center">
      <h2>
        {{ $t('components.home.experiences.title') }}
      </h2>
    </v-row>

    <v-row>
      <experience-list-horizontal :experiences="experiences">
      </experience-list-horizontal>
    </v-row>
  </v-container>
</template>

<script>
import Experience from '@/types/Experience'
import experienceQuery from '@/graphql/queries/experienceHome'

export default {
  apollo: {
    experiences: {
      query: experienceQuery,
      update(query) {
        return Experience.mapList(query.experiences)
      },
    },
  },
}
</script>
