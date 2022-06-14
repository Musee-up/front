<template>
  <v-container>
    <v-row v-for="event in experiences" :key="parseInt(event.id)">
      <v-card class="ma-6 rounded-xl" style="width: 100%">
        <experience-list-item
          :id="parseInt(event.id)"
          :experience="event.attributes"
        >
          <template #link>
            <nuxt-link :to="`/account/experiences/${parseInt(event.id)}`">
              <base-blue-button> {{ $t('Modifier') }} </base-blue-button>
            </nuxt-link>
          </template>
        </experience-list-item>
      </v-card>
    </v-row>
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
