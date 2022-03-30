<template>
  <v-app :style="image">
    <v-main fluid>
      <SearchBar />
    </v-main>
  </v-app>
</template>

<script>
import bg_path from '@/assets/joseph-barrientos-KV7n8nARXng-unsplash.jpeg'

export default {
  data() {
    return {
      image: { backgroundImage: `url(${bg_path})` },
    }
  },
}
</script>
