<template>
  <v-card active-class="rounded-xl ma-4" class="rounded-xl">
    <v-card-title>
      <v-container>
        <v-row class="mb-4">
          <h2>Récapitulatif</h2>
        </v-row>
        <v-row class="mt-4">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-card-title>
    <v-card-text>
      <v-container class="mx-4">
        <account-client-bookings-experience :experience="experience">
        </account-client-bookings-experience>
        <v-divider></v-divider>
        <account-client-bookings-guide :id="guide.id" :guide="guide.user">
        </account-client-bookings-guide>
        <v-divider></v-divider>
        <account-client-bookings-group> </account-client-bookings-group>
        <v-divider></v-divider>
        <account-client-bookings-attributes :booking="booking">
        </account-client-bookings-attributes>
      </v-container>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn
        color="primary"
        class="rounded-xl white--text"
        @click="createBooking"
      >
        {{ $t('Valider et payer') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import createBooking from '@/graphql/mutations/createBooking.gql'
import Experience from '@/types/Experience'
import Guide from '@/types/Guide'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
    guide: {
      type: Guide,
      required: true,
    },
    booking: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    createBooking() {
      this.$apollo
        .mutate({
          mutation: createBooking,
          variables: {
            input: {
              experience: this.experience.id,
              size: this.booking.size,
              user: this.$strapi.user.id,
              experience_slot: this.booking.slot.id,
            },
          },
        })
        .then(() => this.$emit('success'))
        .catch((error) => console.log(error))
    },
  },
}
</script>
