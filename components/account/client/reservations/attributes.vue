<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.attributes.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-icon color="primary">
          mdi-calendar
        </v-icon>
      </v-col>
      <v-col>
        <p v-if="booking.slot">
          {{ new Date(booking.slot.attributes.start) | moment('dd MM YYYY HH:mm') }}
        </p>
      </v-col>
      <v-col>
        <p class="primary--text text-right">
          {{
            $t('components.account.client.reservations.attributes.price', {
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
  props: ['booking']
}
</script>
