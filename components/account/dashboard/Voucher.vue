<template>
  <v-card class="vouchers rounded-xl" rounded outlined>
    <v-card-title class="pa-2">
      <div class="pa-2 d-flex text-center">
        <h2 class="align-self-center ma-0 mx-2 black--text">
          {{ title.label }}
        </h2>
        <v-icon color="primary" large class="mx-2">
          {{ title.icon }}
        </v-icon>
      </div>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pb-3">
      <v-list v-for="(voucher, i) in vouchers" :key="i">
        <v-list-item>
          <account-dashboard-voucher-item :voucher="voucher">
          </account-dashboard-voucher-item>
        </v-list-item>

        <v-divider v-if="i != 2" class="my-2"></v-divider>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: {
        label: 'Mes paiements',
        icon: 'mdi-credit-card',
      },
      vouchers: [
        {
          img: '/portrait.png',
          title: 'Les recoins de Montmartre',
          type: 'Experience Musée Up',
          icon: 'mdi-map',
          date: Date.now(),
          price: 108,
        },
        {
          img: '/portrait.png',
          title: 'Les recoins de Montmartre',
          type: 'Experience Musée Up',
          icon: 'mdi-map',
          date: Date.now(),
          price: 108,
        },
        {
          img: '/portrait.png',
          title: 'Les recoins de Montmartre',
          type: 'Experience Musée Up',
          icon: 'mdi-map',
          date: Date.now(),
          price: 108,
        },
      ],
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
