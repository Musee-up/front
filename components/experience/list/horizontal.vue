<template>
  <v-container>
    <v-row v-if="experiences">
      <v-col
        v-for="(experience, i) in experiences.slice(0, 2)"
        :key="i"
        cols="12"
        md="4"
        class="pa-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <like-thumbnail-experience
            :experience="experience"
            :link="`${link}${experience.id}`"
          >
          </like-thumbnail-experience>

          <v-card-title>
            <h3 class="ml-2 my-1 title--text">{{ experience.title }}</h3>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <rating :rating="rating"></rating>
              </v-col>
              <v-col>
                <p class="text-center">
                  {{
                    $t('components.experience.price', {
                      n: experience.price || 0,
                    })
                  }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-divider v-if="$vuetify.breakpoint.mobile"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { rating } from '@/data/mock'
import Experience from '@/types/Experience'

export default {
  props: {
    experiences: {
      type: Array as PropType<Array<Experience>>,
      required: true,
    },
    link: {
      type: String,
      default: '/experiences/',
    },
  },
  data: () => ({
    rating,
    url: process.env.API_URL,
  }),
}
</script>

<style lang="scss" scoped>
.col {
  justify-content: center;
  padding: 0px;
}
</style>
