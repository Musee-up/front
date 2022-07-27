<template>
  <v-card class="vouchers rounded-xl" rounded outlined>
    <v-card-title class="pa-4 text-center">
      <h2 class="black--text">
        {{ title.label }}
        <v-icon large color="primary" class="mx-2">
          {{ title.icon }}
        </v-icon>
      </h2>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pb-3">
      <v-list v-for="(booking, i) in bookings" :key="i">
        <v-list-item>
          <account-guide-voucher-item :voucher="booking">
          </account-guide-voucher-item>
        </v-list-item>

        <v-divider v-if="i != 2" class="my-2"></v-divider>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    bookings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: {
        label: 'Mes paiements',
        icon: 'mdi-credit-card',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.vouchers {
  height: fit-content;
  width: 100%;
}
</style>
