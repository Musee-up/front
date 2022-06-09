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
      <v-row>
      <experience-registration-date
        :allowed-dates="allowedDates"
        @picked="date => day = date"
        >
      </experience-registration-date>

      </v-row>

      <v-row>
        <p>
        </p>
      </v-row>
      <v-row>
        <experience-registration-hour
          v-if="day"
          :slot="hours"
          >
        </experience-registration-hour>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <base-blue-button>
        {{ $t('Réserver') }}
      </base-blue-button>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['slots'],
  data () {
    return {
      day: null,
      dates: []
    }
  },
  computed: {
    hours () {
      if (!this.day) return []
      console.log(new Date(this.day).getDay())
      return this.slots.data.filter(slot =>
        new Date(slot.attributes.start).getDay() === new Date(this.day).getDay()
      )
    },
  },
  mounted () {
    this.dates = this.slots.data.map(x =>
      this.$moment(x.attributes.start).format('YYYY-MM-DD'))
  },
  methods: {
    allowedDates(date) { return this.dates.includes(date) }
  },
}
</script>
