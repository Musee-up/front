<template>
  <v-card class="rounded-xl" rounded outlined>
    <v-card-text>
      <v-card-title class="text-center"> Mes revenus du mois </v-card-title>
      <v-divider class="ma-2"></v-divider>

      <v-card-text>
        <div class="pa-2 d-flex text-center">
          <v-icon x-large class="mx-2">{{ balance.icon }}</v-icon>
          <h2 class="align-self-center ma-0 mx-2 black--text">
            {{ balance.label }}
          </h2>
        </div>

        <div class="my-4 d-flex text-center green--text">
          <v-icon class="mx-2">{{ chart.icon }}</v-icon>
          <h2 class="align-self-center ma-0 mx-2">{{ chart.label }}</h2>
        </div>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      balance: {
        label: '1558€',
        icon: 'mdi-sack',
      },
      chart: {
        label: '4.2%',
        icon: 'mdi-finance',
      },
    }
  },
}
</script>
