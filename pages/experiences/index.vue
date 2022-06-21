<template>
  <div>
    <experience-filter-list></experience-filter-list>
    <experience-list :query="query" :variables="variables" />
  </div>
</template>

<script>
import experiencesWithFilterQuery from '@/graphql/queries/experiencesWithFilter'
import experiencesQuery from '@/graphql/queries/experiences'

export default {
  data() {
    return {
      query: this.$route.query ? experiencesQuery : experiencesWithFilterQuery,
      variables: {
        guideID: this.$route.query.guideID,
      },
    }
  },
}
</script>

<style scoped>
.v-main {
  background: url('@/static/home_bg.svg');
  background-size: cover;
}
</style>
