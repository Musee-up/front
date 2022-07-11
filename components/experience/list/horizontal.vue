<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(experience, i) in experiences.slice(0, 2)"
        :key="i"
        cols="12"
        md="4"
        class="pa-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <nuxt-link :to="`${link}${experience.id}`">
            <like-overview
              v-if="experience.photos.data && experience.photos.data.length"
              :width="width"
              :photo="
                url + experience.photos.data[0].attributes.formats.thumbnail.url
              "
            >
            </like-overview>
          </nuxt-link>

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

export default {
  props: {
    experiences: {
      type: Array as PropType<Array<Experience>>,
      default: () => [],
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
  computed: {
    width() {
      return {
        'xs': this.$vuetify.breakpoint.width,
        'sm': 288,
        'md': 288,
        'lg': 288,
        'xl': 288,
      }[this.$vuetify.breakpoint.name]
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  justify-content: center;
  padding: 0px;
}
</style>
