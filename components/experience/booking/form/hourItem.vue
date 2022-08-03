<template>
  <v-row>
    <v-col>
      <p>
        {{ e_slot.start | moment('hh:mm') }}
        - {{ e_slot.end | moment('hh:mm') }}
      </p>
    </v-col>

    <v-col>
      <p>{{ remainingPlaces }} places restantes</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    e_slot: {
      type: Object,
      required: true,
    },
  },
  computed: {
    remainingPlaces() {
      return this.e_slot.groupSize.max - this.e_slot.groupSize.current
    },
  },
}
</script>
