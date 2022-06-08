<template>
  <v-row justify="center" class="my-8">
    <v-col cols="8">
      <v-row justify="center">
        <h2 class="primary--text text-center ma-4">
          {{ $t('pages.about.why.title') }}
        </h2>
      </v-row>
      <v-row class="text-center">
        <p
          class="primary--text text--center"
          v-html="$t('pages.about.why.description')"
        ></p>
      </v-row>
    </v-col>
  </v-row>
</template>
