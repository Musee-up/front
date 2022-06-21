<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.attributes.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-icon color="primary"> mdi-calendar </v-icon>
      </v-col>
      <v-col>
        <p v-if="e_slot">
          {{ new Date(e_slot.start) | moment('dddd MM YYYY HH:mm') }}
        </p>
      </v-col>
      <v-col>
        <p class="primary--text text-right">
          {{
            $t('components.account.client.bookings.attributes.price', {
              total: booking.total,
              unit: booking.unitPrice,
            })
          }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['e_slot'],
  data() {
    return {
      booking: {
        total: 0,
        unitPrice: 0,
      },
    }
  },
}
</script>
