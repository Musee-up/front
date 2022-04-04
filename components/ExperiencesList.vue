<template>
  <div>
    <v-list>
      <v-list-item v-for="event in experiences.data" :key="event.id">
        <ExperiencesListItem :experience="event.attributes" />
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { allEventQuery } from '../graphql/query'
export default {
  data() {
    return {
      experiences: [],
    }
  },
  apollo: {
    experiences: {
      query: allEventQuery,
    },
  },
}
</script>
