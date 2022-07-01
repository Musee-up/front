<template>
  <v-container class="py-8 my-16">
    <v-row>
      <h2>
        {{ $t('components.home.experiences.title') }}
      </h2>
    </v-row>

    <v-row>
      <experience-list-horizontal :experiences="experiences"> </experience-list-horizontal>
    </v-row>
  </v-container>
</template>

<script>
import experienceQuery from '@/graphql/queries/experienceHome'

export default {
  apollo: {
    experiences: {
      query: experienceQuery,
      update(query) {
        console.log(query)
        const experiences = query.experiences.data.map((experience) => ({
          id: experience.id,
          ...experience.attributes,
        }))
        console.log(experiences)
        return experiences
      },
    },
  },
}
</script>
