<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-row justify="center">
        <h1 class="primary--text text-center">
            {{ $t('pages.about.why.title') }}
        </h1>
      </v-row>
      <v-row >
        <p class="primary--text text--center" v-html="$t('pages.about.why.description')">
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>
