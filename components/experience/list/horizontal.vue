<template>
  <v-container>
    <v-row>
      <v-col v-for="(_, i) in iter" :key="i" cols="4" class="pa-4">
        <v-card elevation="0" class="mx-auto rounded-xl">
          <nuxt-link :to="`${link}${id}`">
            <like-overview :width="width" :photo="experience.photo">
            </like-overview>
          </nuxt-link>

          <v-card-title>
            <h3 class="ml-2 my-1 title--text">{{ experience.title }}</h3>
          </v-card-title>
          <v-card-text class="d-flex flex-column justify-right">
            <v-row :class="$vuetify.breakpoint.lgAndDown ? 'flex-column' : ''">
              <v-col>
                <rating :rating="experience.rating"></rating>
              </v-col>
              <v-col>
                <p class="text-center">
                  {{
                    $t('components.experience.price', { n: experience.price })
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
    link: {
      type: String,
      default: '/experience/',
    },
  },
  data() {
    return {
      id: 1,
      iter: [...Array(3).keys()],
      experience,
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
