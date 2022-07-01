<template v-if="guide && user">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">
    <nuxt-link :to="`guides/${guide.id}`" class="guideProfileLink">
      {{ user }}
      <!-- <like-overview :photo="user.picture.format.thumbnail.url"> -->
      <!--   <guide-location -->
      <!--     color="white" -->
      <!--     :guide="guide" -->
      <!--     class="guide-location" -->
      <!--     ></guide-location> -->
      <!-- </like-overview> -->
    </nuxt-link>

    <!-- <v-card-text class="d-flex flex-column justify-center"> -->
    <!--   <h3 class="name">{{ user.name }}</h3> -->
    <!--   <!-1- <rating class="justify-center" :rating="guide.rating"></rating> -1-> -->
    <!-- </v-card-text> -->
  </v-card>
</template>

<script setup lang="ts">
import Guide from '@/types/Guide'

const { guide } = defineProps<{
  guide: Guide
}>()

const user = guide.user
</script>

<style lang="scss" scoped>
.name {
  color: #63686e;
}

.image {
  height: 100%;
}
</style>
