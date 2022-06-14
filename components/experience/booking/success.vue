<template>
  <v-card class="pa-4">
    <v-row justify="center" align="center">
      <nuxt-img src="/exp_photo.png"> </nuxt-img>
    </v-row>
    <v-card-title class="justify-center">
      {{ $t('components.booking.success.title') }}
    </v-card-title>

    <v-card-text>
      <p>
        {{ $t('components.booking.success.text') }}
      </p>
    </v-card-text>

    <v-card-actions class="justify-center">
      <nuxt-link to="/account/client/bookings">
        {{ $t('components.booking.success.account') }}
        <v-icon color="primary"> mdi-arrow-right-bold-circle-outline </v-icon>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>
