<template>
  <!-- <h1>{{ experience.data }}</h1> -->
  <experiences-list-item :experience="experience.data.attributes" :id="experience.data.id"/>
</template>

<script>
import { eventQuery } from '@/graphql/query'
export default {
  data() {
    return {
      experience: [],
    }
  },
  apollo: {
    experience: {
      query: eventQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      },
    },
  },
}
</script>
