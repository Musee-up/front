<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <base-blue-button>
          {{ $t('components.account.client.bookings.footer.download') }}
        </base-blue-button>
      </v-col>

      <v-col cols="12" md="2" class="align-self-center">
        <account-client-bookings-review-form :booking="{}">
        </account-client-bookings-review-form>
      </v-col>

      <v-col
        v-for="(item, index) in actions"
        :key="index"
        :md="item.md"
        cols="12"
      >
        <v-btn text>
          <v-icon :color="item.color" class="mx-2">{{ item.icon }}</v-icon>
          <small :class="item.color + '--text'">{{ $t(item.text) }}</small>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      actions: [
        {
          icon: 'mdi-map-marker',
          color: 'detail',
          text: 'components.account.client.bookings.footer.address',
          md: '3',
        },
        {
          icon: 'mdi-printer',
          color: 'special_1',
          text: 'components.account.client.bookings.footer.print',
          md: '2',
        },
        {
          icon: 'mdi-ticket-confirmation',
          color: 'special_2',
          text: 'components.account.client.bookings.footer.receipt',
          md: '2',
        },
      ],
    }
  },
}
</script>
