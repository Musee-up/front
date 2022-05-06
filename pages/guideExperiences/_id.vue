<template>
  <experience-creation-template
    v-if="experience"
    :id="$route.params.id"
    :experience="experience"
    :mutation-query="experienceUpdate"
    >
  </experience-creation-template>
</template>

<script>
import experienceQuery from '@/graphql/queries/experience'
import experienceUpdate from '@/graphql/mutations/experienceUpdate'

export default {
  data() {
    return {
      experience: null,
      experienceUpdate
    }
  },
  async mounted() {
    this.experience = (
      await this.$apollo.query({
        query: experienceQuery,
        variables: {
          id: this.$route.params.id,
        },
      })
    ).data.experience
  },
}
</script>
