<template>
  <v-container>
    <v-row class="my-2">
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.attributes.title') }}
      </h3>
    </v-row>

    <v-row justify="start">
      <v-col cols="12" md="6" class="text-left">
        <p v-if="eSlot">
          <v-icon color="primary"> mdi-calendar </v-icon>
          {{ date }}
        </p>
      </v-col>
      <v-col cols="12" md="6" class="text-left">
        <p class="primary--text">
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
import Slot from '@/types/Slot'

export default {
  props: {
    eSlot: {
      type: Slot,
      required: true,
    },
  },
  data() {
    return {
      booking: {
        total: 0,
        unitPrice: 0,
      },
    }
  },
  computed: {
    date() {
      return this.$moment(this.eSlot.start).format('dddd MM YYYY HH:mm')
    },
  },
}
</script>
