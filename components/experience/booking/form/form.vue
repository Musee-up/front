<template v-if="slots">
  <v-card
    rounded
    class="d-flex flex-column rounded-xl align-center text-center"
  >
    <v-card-title>
      <span class="price text-h5 text-center">
        {{ $t('components.experience.price', { n: experience.price || 0 }) }}
      </span>
    </v-card-title>
    <v-card-text>
      <v-row class="my-4">
        <experience-booking-form-date
          :allowed-dates="allowedDates"
          @picked="(date) => (day = date)"
        >
        </experience-booking-form-date>
      </v-row>

      <v-row v-if="day" class="my-4">
        <experience-booking-form-hour
          class="booking"
          :slots="hours"
          @submit="(slot) => (selectedSlot = slot)"
        >
        </experience-booking-form-hour>
      </v-row>

      <v-row v-if="selectedSlot" class="my-4">
        <experience-booking-form-group v-model="quantityPerAges">
        </experience-booking-form-group>
      </v-row>
      <v-row v-if="selectedSlot" justify="center">
        <p class="primary--text text-center">
          Total:
          {{
            calculateAmountPerAgeTotal(
              calculateAmountPerAge(selectedSlot.amountPerAge, quantityPerAges)
            )
          }}
          Euros
        </p>
      </v-row>
    </v-card-text>
    <v-card-actions v-if="booking">
      <experience-booking-summary
        :booking="booking"
        :experience="experience"
        :guide="experience.guide"
      >
      </experience-booking-summary>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  quantityPerAges,
  calculateAmountPerAge,
  calculateAmountPerAgeTotal,
} from '@/types/Group.ts'
import Experience from '@/types/Experience'

export default {
  props: {
    slots: {
      type: Array,
      required: true,
    },
    experience: {
      type: Experience,
      required: true,
    },
  },
  data() {
    return {
      quantityPerAges,
      selectedSlot: null,
      day: null,
      dates: [],
    }
  },
  computed: {
    booking() {
      return !this.selectedSlot
        ? null
        : {
            slot: this.selectedSlot,
            quantityPerAges: this.quantityPerAges,
            guide: this.experience.guide.id,
            amount: calculateAmountPerAgeTotal(
              calculateAmountPerAge(
                this.selectedSlot?.amountPerAge,
                this.quantityPerAges
              )
            ),
          }
    },
    hours() {
      const day = new Date(this.day).getDate()
      const hours = this.slots.filter(
        (slot) => new Date(slot.start).getDate() === day
      )
      return hours
    },
  },
  mounted() {
    this.dates = this.slots.map((x) =>
      this.$moment(x.start).format('YYYY-MM-DD')
    )
  },
  methods: {
    calculateAmountPerAge,
    calculateAmountPerAgeTotal,
    allowedDates(date) {
      return this.dates.includes(date)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}

.booking {
  width: 200px;
}

.price {
  white-space: nowrap;
}
</style>
