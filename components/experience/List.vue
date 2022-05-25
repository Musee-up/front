<template>
  <v-container>
    <v-list>
      <v-list-item v-for="event in experiences.data" :key="parseInt(event.id)">
        <v-card class="ma-6 rounded-xl" rounded>
          <experience-list-item
            :id="parseInt(event.id)"
            :experience="event.attributes"
          >
            <template #link>
              <nuxt-link :to="`/experiences/${parseInt(event.id)}`">
                <base-blue-button> {{ $t('Réserver') }} </base-blue-button>
              </nuxt-link>
            </template>
          </experience-list-item>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: ['query', 'variables'],
  data() {
    return {
      experiences: [],
    }
  },
  async mounted() {
    this.experiences = (
      await this.$apollo.query({
        query: this.query,
        variables: this.variables,
      })
    ).data.experiences
  },
}
</script>
