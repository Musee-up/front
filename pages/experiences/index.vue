<template>
  <div>
    <!-- <experience-filter-list></experience-filter-list> -->
    <experience-list
      v-if="!$vuetify.breakpoint.mobile"
      :experiences="experiences"
    />
    <experience-list-horizontal v-else :experiences="experiences" />
  </div>
</template>

<script>
import experiencesWithFilterQuery from '@/graphql/queries/experiencesWithFilter'
import experiencesQuery from '@/graphql/queries/experiences'
import Experience from '@/types/Experience'

export default {
  data() {
    return {
      query: this.$route.query ? experiencesQuery : experiencesWithFilterQuery,
    }
  },
  apollo: {
    experiences() {
      return {
        query: this.query,
        variables() {
          return {
            guideID: this.$route.query.guideID,
          }
        },
        update(query) {
          const experiences = Experience.mapList(query.experiences)
          return experiences
        },
      }
    },
  },
}
</script>

<style scoped>
.v-main {
  background: url('@/static/home_bg.svg');
  background-size: cover;
}
</style>
