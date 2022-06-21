<template>
  <v-container>
    <v-row v-for="event in experiences.data" :key="parseInt(event.id)">
      <v-col cols="12">
        <v-card style="height: 400px" class="ma-6 rounded-xl">
          <experience-list-item
            :id="parseInt(event.id)"
            :experience="event.attributes"
          >
            <template #link>
              <nuxt-link :to="`/experiences/${parseInt(event.id)}`">
                <base-blue-button>
                  {{ $t('Réserver') }}
                </base-blue-button>
              </nuxt-link>
            </template>
          </experience-list-item>
        </v-card>
      </v-col>
    </v-row>
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
