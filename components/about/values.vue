<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <h1 class="primary--text">
          {{ $t('pages.about.values.title') }}
        </h1>
      </v-row>
      <v-row class="pa-16">
        <v-col
          cols="4"
          v-for="(value, index) in $t('pages.about.values.cards')"
          :key="index"
          >
          <v-card class="rounded-xl" outlined>
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
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>














