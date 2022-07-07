<template v-if="favoritePlace">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="3" class="justify-center d-flex">
        <nuxt-img
          v-if="favoritePlace.picture"
          :width="width"
          class="profile rounded-xl"
          :src="
            url + favoritePlace.picture.data.attributes.formats.thumbnail.url
          "
        >
        </nuxt-img>
      </v-col>

      <v-col>
        <v-row justify-md="start" justify="center">
          <h2 class="primary--text">
            Son lieu préféré: {{ favoritePlace.title }}
          </h2>
        </v-row>
        <v-row justify-md="start" justify="center">
          <p class="description--text">
            {{ favoritePlace.description }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    favoritePlace: {
      type: Object,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      url: process.env.API_URL,
    }
  },
  computed: {
    width() {
      return {
        xs: 260,
        sm: 260,
        md: 140,
        lg: 200,
        xl: 300,
      }[this.$vuetify.breakpoint.name]
    },
  },
}
</script>
