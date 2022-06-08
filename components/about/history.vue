<template>
  <v-row class="my-16">
    <v-col></v-col>
    <v-col cols="4" class="ma-8">
      <v-row class="my-8 text-center" justify="center">
        <h2 class="primary-text">
          {{ $t('pages.about.history.title') }}
        <core-underline></core-underline>
        </h2>
      </v-row>
      <v-row>
        <p
          class="primary--text text-center"
          v-html="$t('pages.about.history.description')"
        ></p>
      </v-row>
    </v-col>
    <v-col cols="4">
      <nuxt-img src="/about/photo_duet.png"></nuxt-img>
    </v-col>
    <v-col> </v-col>
  </v-row>
</template>

