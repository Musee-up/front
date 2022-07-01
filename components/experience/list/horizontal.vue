<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(experience, i) in experiences.slice(0, 2)"
        :key="i"
        cols="4"
        class="pa-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <nuxt-link :to="`${link}${experience.id}`">
            <like-overview
              v-if="experience.photos"
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
          <v-card-text class="d-flex flex-column justify-right">
            <v-row :class="$vuetify.breakpoint.lgAndDown ? 'flex-column' : ''">
              <v-col>
                <!--   <rating :rating="experience.rating"></rating> -->
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { experience } from '@/data/mock.js'
export default {
  props: {
    experiences: {
      type: Array,
      default: () => [experience],
    },
    link: {
      type: String,
      default: '/experience/',
    },
  },
  data() {
    return {
      url: process.env.API_URL,
    }
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 440
        case 'sm':
          return 440
        case 'md':
          return 440
        case 'lg':
          return 300
        case 'xl':
          return 440
      }
      return { right: 3, middle: 8 }
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
