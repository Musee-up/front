<template>
  <experience-creation-template
    v-if="experience"
    :experience="experience">
  </experience-creation-template>
</template>

<script>

import experienceQuery from '@/graphql/queries/experience'

export default {
  data () {
    return {
      experience: null
    }
  },
  async mounted() {
    this.experience = (
      await this.$apollo.query({
        query: experienceQuery,
        variables: {
          id: this.$route.params.id
        }
      })
    ).data.experience
  },
}
</script>
