<template>
  <v-row class="primary py-8">
    <v-spacer></v-spacer>
    <v-col cols="4">
      <v-row>
        <h2 class="white--text">
          {{ $t('pages.about.heritage.title') }}
        </h2>
      </v-row>

      <v-row>
        <p class="white--text">
          {{ $t('pages.about.heritage.description') }}
        </p>
      </v-row>

      <v-row>
        <v-col>
          <v-btn rounded color="error">
            {{ $t('pages.about.heritage.buttons.details') }}
          </v-btn>
        </v-col>

        <v-col>
          <v-btn rounded color="primary">
            {{ $t('pages.about.heritage.buttons.list') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <nuxt-img src="/about_demo_mobile.png"></nuxt-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>
