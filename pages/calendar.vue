<template>
  <experience-slot-calendar
    v-if="guide"
    :guide="guide"
    ></experience-slot-calendar>
</template>

<script>
import singleUserQuery from '@/graphql/queries/user'

export default {
  data() {
    return {
      guide: null
    }
  },
  async mounted() {
    const user = await this.$apollo.query({
      query: singleUserQuery,
      variables: {
        id: this.$strapi.user.id,
      },
    })
    this.guide = user.data.me.guide
  },
}
</script>
