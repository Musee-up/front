<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <nuxt-img
          v-if="favoritePlace.picture"
          width="200px"
          class="profile rounded-xl"
          :src="
            url + favoritePlace.picture.data.attributes.formats.thumbnail.url
          "
        >
        </nuxt-img>
      </v-col>

      <v-col>
        <v-row>
          <h2 class="primary--text">
            Son lieu préféré: {{ favoritePlace.title }}
          </h2>
        </v-row>
        <v-row>
          <p class="description--text">
            {{ favoritePlace.description }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { favoritePlace } = defineProps<{
  favoritePlace: Object
}>()

const url = process.env.API_URL
</script>
