<template>
  <v-menu
    ref="menu"
    v-model="menu"
    content-class="rounded-xl"
    offset-y
    nudge-bottom="10px"
    min-width="0"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="selectedSlot"
        label="choisissez l'heure"
        style="align-self: center"
        hide-details="auto"
        rounded
        filled
        solo
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>

    <v-card active-class="rounded-xl" class="rounded-xl">
      <v-card-text class="rounded-xl">
        <v-list>
          <v-list-item v-for="(slot, index) in slots" :key="index">
            <v-btn text @click="submit(slot)">
              <experience-booking-form-hour-item
                :group-size-max="groupSizeMax"
                :e-slot="slot"
              >
              </experience-booking-form-hour-item>
            </v-btn>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import Slot from '@/types/Slot'

export default {
  props: {
    groupSizeMax: {
      type: Number,
      required: true,
    },
    slots: {
      type: Array<Slot>,
      required: true,
    },
  },
  data() {
    return {
      menu: false,
      selectedSlot: null,
    }
  },
  methods: {
    submit(slot) {
      this.$emit('submit', slot)
      this.selectedSlot = this.$moment(slot.start).format('hh:mm')
    },
  },
}
</script>
