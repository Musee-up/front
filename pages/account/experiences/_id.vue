<template>
  <experience-creation-template
    v-if="experience"
    :id="$route.params.id"
    :experience="experience"
  >
  </experience-creation-template>
</template>

<script>
import experienceQuery from '@/graphql/queries/experience'

export default {
  layout: 'account-guide',
  data() {
    return {
      experience: null,
    }
  },
  mounted() {
    this.$apollo
      .query({
        query: experienceQuery,
        variables: {
          id: this.$route.params.id,
        },
      })
      .then((x) => {
        this.experience = x.data.experience.data
      })
      .catch((err) => console.log(err))
  },
}
</script>
