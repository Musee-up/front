<template v-if="slots">
  <v-card
    rounded
    class="d-flex flex-column rounded-xl align-center text-center"
    style="width: 450px"
  >
    <v-card-title>
      <span class="text-h5 text-center">
        {{ $t('À partir de 18€ par personne') }}
      </span>
    </v-card-title>
    <v-card-text>
      <v-row class="my-4">
        <experience-reservation-form-date
          :allowed-dates="allowedDates"
          @picked="(date) => (day = date)"
        >
        </experience-reservation-form-date>
      </v-row>

      <v-row class="my-4">
        <experience-reservation-form-hour
          v-if="day"
          :slots="hours"
          @submit="(slot) => selectedSlot = slot"
          >
        </experience-reservation-form-hour>
      </v-row>

      <v-row class="my-4">
        <experience-reservation-form-group @submit="(v) => group = v">
        </experience-reservation-form-group>
      </v-row>
      <v-row>
        <p class="primary--text">
        {{ group }}
        </p>
      </v-row>
      <v-row>
        {{ selectedSlot }}
      </v-row>
    </v-card-text>
    <v-card-actions>
      <experience-reservation-summary
        :booking="booking"
        :experience="experience"
        :guide="experience.guide.data.attributes"
        >
      </experience-reservation-summary>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['slots', 'experience'],
  data() {
    return {
      selectedSlot: null,
      group: null,
      day: null,
      dates: [],
    }
  },
   computed: {
    booking() {
      return {
        slot: this.selectedSlot,
        unitPrice: 18,
        total: 18 * 10,
        group: this.group,
      }
    },
    hours() {
      const day = new Date(this.day).getDate()
      const hours = this.slots.data.filter(
        (slot) => new Date(slot.attributes.start).getDate() === day
      )
      return hours
    },
  },
  mounted() {
    this.dates = this.slots.data.map((x) =>
      this.$moment(x.attributes.start).format('YYYY-MM-DD')
    )
  },
  methods: {
    allowedDates(date) {
      return this.dates.includes(date)
    },
  },
}
</script>
