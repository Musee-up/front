<template>
  <v-row>
    <v-col>
      <v-row justify="center" class="my-8">
        <h2 class="primary--text">
          {{ $t('pages.about.values.title') }}
          <core-underline></core-underline>
        </h2>
      </v-row>
      <v-row class="pa-16">
        <v-col
          v-for="(value, index) in $t('pages.about.values.cards')"
          :key="index"
          class="fill-height card"
          cols="4"
        >
          <v-card
            class="d-flex fill-height flex-column rounded-xl align-center"
            outlined
          >
            <nuxt-img
              width="fit-content"
              :src="photos[index]"
              class="justify-self-center"
            >
            </nuxt-img>

            <v-card-title class="justify-center text-center">
              <h3 class="primary--text">
                {{ value.title }}
              </h3>
            </v-card-title>
            <v-card-text class="justify-center text-center">
              <p>
                {{ value.description }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn rounded color="error"> En savoir + </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      photos: {
        ethics: '/about/values/ethics.png',
        protection: '/about/values/protection.png',
        expertise: '/about/values/expertise.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.value {
  height: max-content;
}
.card {
  height: auto;
}
</style>
