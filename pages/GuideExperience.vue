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
              <nuxt-link :to="`/guideexperiences/${parseInt(event.id)}`">
                <base-blue-button :text="$t('Modifier')"> </base-blue-button>
              </nuxt-link>
            </template>
          </experience-list-item>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import singleUserQuery from '@/graphql/queries/user'

export default {
  data() {
    return {
      experiences: [],
    }
  },
  async mounted() {
    const user = await this.$apollo.query({
      query: singleUserQuery,
      variables: {
        id: this.$strapi.user.id,
      },
    })
    this.experiences = user.data.me.guide.data.attributes.experiences
  },
}
</script>
