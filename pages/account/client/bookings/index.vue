<template>
  <v-container>
    <v-col md="9" cols="12">
      <v-row justify="center" class="text-center">
        <h2>{{ $t('pages.account.client.bookings.title') }}</h2>
      </v-row>

      <v-row justify="center" class="text-center">
        <p>
          {{ $t('pages.account.client.bookings.description') }}
        </p>
      </v-row>

      <v-row>
        <account-client-bookings-list :width="width">
        </account-client-bookings-list>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  layout: 'account-client',
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 240
        case 'sm':
          return 240
        case 'md':
          return 140
        case 'lg':
          return 240
        case 'xl':
          return 400
      }
      return 440
    },
  },
}
</script>
