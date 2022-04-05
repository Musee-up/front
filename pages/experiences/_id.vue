<template>
  <v-container class="" fluid>
  <v-row>
    <h1 style="color:black"> {{ experience.data.attributes.title }} </h1>
  </v-row>
  </v-container>
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
      variables() {
        return { id: parseInt(this.$route.params.id) }
      },
    },
  },
}
</script>
