<template v-if="guide && guide.user">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">
    <nuxt-link :to="`guides/${guide.id}`" class="guideProfileLink">
      <like-overview :photo="url + guide.user.picture.formats.thumbnail.url">
        <guide-location
          color="white"
          :guide="guide.location"
          class="guide-location"
          ></guide-location>
      </like-overview>
    </nuxt-link>

    <v-card-text class="d-flex flex-column justify-center">
      <h3 class="name">{{ guide.user.firstname }}</h3>
      <!-- <rating class="justify-center" :rating="guide.rating"></rating> -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      url: process.env.API_URL
    }
  },
}
</script>

<style lang="scss" scoped>
.name {
  color: #63686e;
}

.image {
  height: 100%;
}
</style>
