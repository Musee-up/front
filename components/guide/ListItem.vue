<template v-if="guide">
  <v-card elevation="0" class="mx-auto rounded-xl justify-center text-center">
    <nuxt-link :to="`guides/${id}`" class="guideProfileLink">
      <like-overview :photo="guide.photo">
        <guide-location :guide="guide"></guide-location>
      </like-overview>
    </nuxt-link>

    <v-card-text class="d-flex flex-column justify-center">
      <h3 class="name">{{ guide.name }}</h3>
      <rating class="justify-center" :rating="guide.rating"></rating>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      id: '1',
    }
  },
}
</script>

<style lang="scss" scoped>
$name: #63686e;

.image {
  height: 100%;
}
</style>
