<template>
  <v-container>
    <v-row v-for="experience in experiences" :key="experience.id">
      <v-card class="ma-6 rounded-xl" style="width:100%">
        <experience-list-item
          :id="experience.id"
          :experience="experience"
          >
          <template #link>
            <nuxt-link :to="`/experiences/${experience.id}`">
              <base-blue-button>
                {{ $t('Réserver') }}
              </base-blue-button>
            </nuxt-link>
          </template>
        </experience-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { PropType } from "vue"
import Experience from '@/types/Experience'

export default{
  props: {
    experiences: {
      type: Array as PropType<Array<Experience>>,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
