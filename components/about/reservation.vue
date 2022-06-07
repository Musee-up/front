<template>
  <v-row class="pa-16 detail">
    <v-col cols="3">
      <v-row>
        <h2 class="primary--text">
          {{ $t('pages.about.reservations.title') }}
        </h2>
      </v-row>
      <v-row>
        <p class="primary--text">
          {{ $t('pages.about.reservations.description') }}
        </p>
      </v-row>
    </v-col>

    <v-col
      v-for="(item, index) in $t('pages.about.reservations.cols')"
      :key="index"
      cols="3"
    >
      <v-row>
        <v-col cols="1">
          <v-row>
            <v-icon>mdi-check</v-icon>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <h3 class="primary--text">
              {{ item.title }}
            </h3>
          </v-row>
          <v-row>
            <p class="primary--text">
              {{ item.description }}
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
