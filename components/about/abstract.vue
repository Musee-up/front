<template>
  <v-row class="primary">
    <v-spacer></v-spacer>

    <v-col class="ma-4">
      <v-row>
        <h2 class="white--text">
          {{ $t('pages.about.title') }}
        </h2>
      </v-row>
      <v-row>
        <p class="white--text">
          {{ $t('pages.about.description') }}
        </p>
      </v-row>
      <v-row>
        <v-col justify="center" class="text-center">
          <v-btn class="rounded-xl" color="error">
            {{ $t('pages.about.detail') }}
          </v-btn>
        </v-col>
        <v-col>
          <base-blue-button>
            <v-icon color="white">mdi-play-outline</v-icon>
            {{ $t('pages.about.demo') }}
          </base-blue-button>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="ma-4">
      <v-row justify="center">
        <nuxt-img
          height="200"
          width="200"
          src="/logo_white.svg"
          class="logo"
        ></nuxt-img>
      </v-row>
      <v-row justify="center">
        <h1 class="white--text">Musée up'</h1>
      </v-row>
    </v-col>

    <v-spacer></v-spacer>
  </v-row>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
}
</style>
