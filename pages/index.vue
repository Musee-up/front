<template>
  <v-app :style="image">
    <v-main fluid>
      <HomeSearchBar />
    </v-main>
  </v-app>
</template>

<script>
import bgPath from '@/assets/joseph-barrientos-KV7n8nARXng-unsplash.jpeg'

export default {
  data() {
    return {
      image: { backgroundImage: `url(${bgPath})` },
    }
  },
}
</script>
