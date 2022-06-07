<template>
  <v-row class="my-8">
    <v-col>
      <v-row justify="center">
        <h2 class="primary--text">
          {{ $t('pages.about.preservation.title') }}
        </h2>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in $t('pages.about.preservation.cards')"
          :key="index"
          class="ma-8 pa-8"
        >
          <v-row justify="center">
            <nuxt-img
              :height="cols"
              :width="cols"
              class="rounded-circle"
              :src="photos[index]"
            ></nuxt-img>
          </v-row>
          <v-row justify="center">
            <h3 class="primary--text text-center">
              {{ item.title }}
            </h3>
          </v-row>
          <v-row>
            <p class="primary--text text-center">
              {{ item.description }}
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      photos: {
        discovery: '/about/protection/discovery.png',
        patronage: '/about/protection/patronage.png',
        awareness: '/about/protection/awareness.png',
      },
    }
  },
  computed: {
    cols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 129
        case 'sm':
          return 129
        case 'md':
          return 129
        case 'lg':
          return 129
        case 'xl':
          return 129
      }
      return { right: 3, middle: 8 }
    },
  },
}
</script>
