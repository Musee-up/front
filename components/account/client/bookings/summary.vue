<template>
  <v-container>
    <v-row
      justify="center"
      justify-md="right"
      class="text-center text-md-right"
    >
      <h2 class="summary-title my-md-4 title--text">
        {{ $t('pages.account.client.bookings.id.summary') }}
      </h2>
    </v-row>

    <v-row class="my-4">
      <v-divider></v-divider>
    </v-row>
    <div v-for="(component, i) in components" :key="i">
      <v-row justify="center" justify-md="start" class="my-4">
        <component
          :is="component.component"
          v-bind="component.data"
        ></component>
      </v-row>

      <v-row class="my-4">
        <v-divider></v-divider>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Experience from '@/types/Experience'
import Guide from '@/types/Guide'
import Booking from '@/types/Booking'
import Slot from '@/types/Slot'

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
      type: Booking,
      required: true,
    },
    eSlot: {
      type: Slot,
      required: true,
    },
  },
  data() {
    return {
      components: [
        {
          component: 'account-client-bookings-experience',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-bookings-guide',
          data: {
            user: this.guide.user,
            id: this.guide.id,
          },
        },
        {
          component: 'account-client-bookings-attributes',
          data: {
            eSlot: this.eSlot,
          },
        },
        {
          component: 'account-client-bookings-address',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-bookings-group',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-bookings-reference',
          data: {
            booking: this.booking,
          },
        },
        {
          component: 'account-client-bookings-cancel',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-bookings-footer',
          data: {
            experience: this.experience,
          },
        },
      ].filter((component) => Object.keys(component.data).length > 0),
    }
  },
}
</script>

<style lang="scss" scoped>
.summary-title {
  font-size: 30px;
  font-weight: bold;
}
</style>
