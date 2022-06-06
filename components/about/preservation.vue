<template>
  <v-row>
    <v-col>
      <v-row>
        <h2 class="primary--text">
        {{ $t('pages.about.preservation.title') }}
        </h2>
      </v-row>
      <v-row>
        <v-col
          class="ma-8 pa-8"
          v-for="(item, index) in $t('pages.about.preservation.cards')"
          :key="index"
          >
          <v-row justify="center">
            <nuxt-img class="rounded-circle" :src="photos[index]"></nuxt-img>
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
  data () {
    return {
      photos: {
        discovery: '/about/protection/discovery.png',
        patronage: '/about/protection/patronage.png',
        awareness: '/about/protection/awareness.png',
      }
    }
  }
  
}
</script>
