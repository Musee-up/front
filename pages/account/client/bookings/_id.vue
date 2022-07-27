<template>
  <v-container v-if="booking && slot">
    <v-row>
      <v-col cols="12" md="9">
        <v-row justify="center" class="ma-md-4">
          <h2>
            {{ $t('pages.account.client.bookings.id.title') }}
            <span class="primary--text">
              {{ slot.start | moment('dddd mm YYYY') }} </span
            >:
            {{ experience.title }}
          </h2>
        </v-row>

        <v-row justify="center" class="ma-4">
          <p>
            {{ $t('pages.account.client.bookings.id.description')[0] }}
            <span class="primary--text">
              {{ $t('pages.account.client.bookings.id.description')[1] }}
            </span>
            {{ $t('pages.account.client.bookings.id.description')[2] }}
            <span class="primary--text">
              {{ $t('pages.account.client.bookings.id.description')[3] }}
            </span>
            {{ $t('pages.account.client.bookings.id.description')[4] }}
          </p>
        </v-row>

        <v-row justify="center">
          <experience-group-slide
            style="width: 100%"
            height="300"
          ></experience-group-slide>
        </v-row>

        <account-client-bookings-summary
          :e-slot="slot"
          :booking="booking"
          :experience="experience"
          :guide="slot.guide"
        >
        </account-client-bookings-summary>
      </v-col>

      <div class="my-div">
        <v-divider vertical></v-divider>
      </div>

      <v-col cols="12" md="2">
        <v-row>
          <nuxt-img
            v-if="experience.photo"
            :src="experience.photo"
            class="mx-auto photo"
          >
          </nuxt-img>
        </v-row>
        <v-row>
          <v-list>
            <v-list-item v-for="(item, i) in leftnav" :key="i">
              <v-list-item-icon>
                <v-icon color="primary">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'account-client',
  data() {
    return {
      leftnav: [],
    }
  },
  computed: {
    ...mapGetters({
      getBooking: 'user/getBooking',
    }),
    booking() {
      const booking = this.getBooking(this.$route.params.id)
      return booking
    },
    slot() {
      return this.booking?.slot
    },
    experience() {
      return this.booking?.experience
    },
  },
  mounted() {
    if (!this.slot) return
    const date = this.$moment(this.slot.start).format('DD MMMM YYYY')
    this.leftnav = [
      {
        text: date,
        icon: 'mdi-calendar',
      },
      {
        text: 'Paris, France',
        icon: 'mdi-map-marker',
      },
      {
        text: this.booking.groupSize + ' personnes',
        icon: 'mdi-account-multiple',
      },
    ]
  },
}
</script>

<style lang="scss" scoped>
.photo {
  width: 70%;
}

.my-div {
  width: 11px !important;
}

* {
  @include for-phone-only {
    text-align: center;
  }
}
</style>
