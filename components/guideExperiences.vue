<template>
  <v-container>
    <v-list v-if="experiences">
      <v-list-item v-for="event in experiences" :key="parseInt(event.id)">
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
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    experiences: 'guide/getExperiences',
  }),
}
</script>
