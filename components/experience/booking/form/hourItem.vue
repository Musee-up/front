<template>
  <v-row>
    <v-col>
      <p>
        {{ eSlot.start | moment('hh:mm') }}
        - {{ eSlot.end | moment('hh:mm') }}
      </p>
    </v-col>

    <v-col>
      <p>{{ remainingPlaces }} places restantes</p>
    </v-col>
  </v-row>
</template>

<script>
import Slot from '@/types/Slot'

export default {
  props: {
    groupSizeMax: {
      type: Number,
      required: true,
    },
    eSlot: {
      type: Slot,
      required: true,
    },
  },
  computed: {
    remainingPlaces() {
      return this.groupSizeMax - this.eSlot.groupSize
    },
  },
}
</script>
