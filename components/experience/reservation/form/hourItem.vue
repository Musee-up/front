<template>
  <v-row>

    <v-col>
      <p>
        {{ e_slot.start | moment('HH:mm') }}
        - {{ e_slot.end | moment('HH:mm') }}
      </p>
    </v-col>

    <v-col>
      <p>
        5 places restantes
      </p>
    </v-col>

  </v-row>
</template>

<script>
export default {
  props: {
    e_slot: {
      type: Object,
      required: true
    }
  }
}
</script>
