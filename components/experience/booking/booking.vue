<template>
  <v-card active-class="rounded-xl ma-4" class="rounded-xl">
    <v-card-title>
      <v-container>
        <v-row class="mb-4">
          <h2>
            {{ $t('components.experience.booking.summary') }}
          </h2>
        </v-row>
        <v-row class="mt-4">
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-card-title>
    <v-card-text>
      <v-container class="mx-4">
        <account-client-bookings-experience
          v-if="experience"
          :experience="experience"
        >
        </account-client-bookings-experience>
        <v-divider></v-divider>
        <account-client-bookings-guide
          v-if="guide.user"
          :id="guide.id"
          :user="guide.user"
        >
        </account-client-bookings-guide>
        <v-divider></v-divider>
        <account-client-bookings-group :experience="experience">
        </account-client-bookings-group>
        <v-divider></v-divider>
        <account-client-bookings-attributes :e-slot="booking.slot">
        </account-client-bookings-attributes>
      </v-container>
    </v-card-text>

    <v-card-actions class="justify-center">
      <div v-if="stripeKey">
        <StripeElements v-slot="{ elements }" ref="elms" :stripe-key="stripeKey">
        <StripeElement ref="card" type="card" :elements="elements" />
        </StripeElements>
      </div>

      <v-btn
        color="primary"
        class="rounded-xl white--text"
        @click="createBooking"
      >
        {{ $t('components.experience.booking.submit') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { StripeElements, StripeElement } from 'vue-stripe-elements-plus'
import createBooking from '@/graphql/mutations/createBooking.gql'
import Experience from '@/types/Experience'
import Guide from '@/types/Guide'

export default {
  components: {
    StripeElements,
    StripeElement,
  },
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
      stripeKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
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
              slot: this.booking.slot.id,
            },
          },
        })
        .then(() => this.$emit('success'))
        .catch((error) => console.log(error))
    },
  },
}
</script>
