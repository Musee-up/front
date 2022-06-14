<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <h3 class="title--text">
          {{ $t('components.account.client.bookings.cancel.title') }}
        </h3>
      </v-col>
      <v-col>
        <p class="text-decoration-underline">
          {{ $t('components.account.client.bookings.cancel.detail') }}
        </p>
      </v-col>
      <v-col cols="2">
        <base-blue-button>
          {{ $t('components.account.client.bookings.cancel.action') }}
        </base-blue-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['experience'],
}
</script>
