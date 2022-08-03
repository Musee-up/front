<template>
  <experience-creation-template
    v-if="experience"
    :current-id="$route.params.id"
    :experience="experience"
  >
  </experience-creation-template>
</template>

<script>
import Experience from '@/types/Experience'
import experienceQuery from '@/graphql/queries/experienceProfile'

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
        console.log(x.data.experience)
        this.experience = Experience.map(x.data.experience)
        console.log('experience', this.experience)
      })
      .catch((err) => console.log(err))
  },
}
</script>
