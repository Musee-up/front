<template v-if="guide && user">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">
    <like-thumbnail-guide :guide="guide" :link="`/guides/${guide.id}`">
      <guide-location
        color="white"
        :guide="guide.location"
        class="guide-location"
      ></guide-location>
    </like-thumbnail-guide>

    <v-card-text class="d-flex flex-column justify-center">
      <h3 class="name">{{ user.firstname }} {{ user.lastname }}</h3>
      <rating class="justify-center" :rating="rating"></rating>
    </v-card-text>
  </v-card>
</template>

<script>
import Guide from '@/types/Guide'
import { rating } from '@/data/mock'

export default {
  props: {
    guide: {
      type: Guide,
      required: true,
    },
  },
  data() {
    return {
      rating,
      url: process.env.API_URL,
      user: this.guide.user,
    }
  },
}
</script>

<style lang="css" scoped>
.name {
  color: #63686e;
}
</style>
