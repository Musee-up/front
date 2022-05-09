<template>
  <v-container>
    <experience-calendar-form>
    </experience-calendar-form>
    <experience-calendar-slot
      v-if="guide"
      :guide="guide"
      ></experience-calendar-slot>
  </v-container>
</template>

<script>
import singleUserQuery from '@/graphql/queries/user'

export default {
  data() {
    return {
      guide: null,
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
