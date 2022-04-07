<template>
  <v-container>
    <v-list>
      <v-list-item v-for="event in experiences.data" :key="parseInt(event.id)">
        <v-card class="ma-6 rounded-xl" rounded>
          <experiences-list-item
            :id="parseInt(event.id)"
            :experience="event.attributes"
          />
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { allEventQuery } from '@/graphql/query'
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
