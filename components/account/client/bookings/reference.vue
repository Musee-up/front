<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <h3 class="title--text">
          {{ $t('components.account.client.bookings.reference.title') }}
        </h3>
      </v-col>
      <v-col>
        <p>{{ booking.id }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['booking'],
}
</script>
