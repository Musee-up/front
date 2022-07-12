<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="2">
        <h3 class="title--text">
          {{ $t('components.account.client.bookings.cancel.title') }}
        </h3>
      </v-col>
      <v-col
        md="8"
        cols="12">
        <p class="text-decoration-underline">
          {{ $t('components.account.client.bookings.cancel.detail') }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="2">
        <v-row
          justify="center"
          justify-md="end">
        <base-blue-button>
          {{ $t('components.account.client.bookings.cancel.action') }}
        </base-blue-button>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experience from '@/types/Experience'
export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
  },
}
</script>
