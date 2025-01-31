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
        <stripe-elements
          v-if="stripeKey"
          v-slot="{ elements }"
          ref="elms"
          :stripe-key="stripeKey"
        >
          <stripe-element ref="card" type="card" :elements="elements" />
        </stripe-elements>
      </v-container>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn
        color="primary"
        class="rounded-xl white--text"
        @click="createBooking"
      >
        {{ $t('components.experience.booking.submit') }}
      </v-btn>
      <core-snackbar v-if="error" v-model="snackbar" :error="error">
      </core-snackbar>
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
      snackbar: false,
      menu: false,
      error: null,
      stripeKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    }
  },
  methods: {
    async createBooking() {
      const groupComponent = this.$refs.elms
      const cardComponent = this.$refs.card
      const cardElement = cardComponent.stripeElement
      let token

      try {
        token = await groupComponent.instance.createToken(cardElement)
      } catch (err) {
        this.snackbar = true
        this.error = err.response?.data?.error
      }
      console.log()

      this.$apollo
        .mutate({
          mutation: createBooking,
          variables: {
            input: {
              experience: this.experience.id,
              quantityPerAge: this.booking.quantityPerAges,
              user: this.$strapi.user.id,
              slot: this.booking.slot.id,
              amount: this.booking.amount,
              guide: this.guide.id,
              token,
            },
          },
        })
        .then(() => this.$emit('success'))
        .catch((error) => {
          this.snackbar = true
          this.error = error
          console.log(error)
        })
    },
  },
}
</script>
