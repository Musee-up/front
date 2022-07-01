<template v-if="guide && user">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">
    <nuxt-link :to="`/guides/${guide.id}`" class="guideProfileLink">
      <like-overview :photo="url + user.picture.formats.thumbnail.url">
        <guide-location
          color="white"
          :guide="guide.location"
          class="guide-location"
        ></guide-location>
      </like-overview>
    </nuxt-link>

    <v-card-text class="d-flex flex-column justify-center">
      <h3 class="name">{{ user.firstname }} {{ user.lastname}}</h3>
      <!-- <rating class="justify-center" :rating="guide.rating"></rating> -->
    </v-card-text>
  </v-card>
</template>

<script>
import Guide from '@/types/Guide'
export default {
  props: {
    guide: {
      type: Guide,
      required: true
    },
  },
  data() {
    return {
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

.image {
  height: 100%;
}
</style>
