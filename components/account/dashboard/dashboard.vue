<template>
  <v-container class="ma-4">
    <v-row>
      <v-col cols="2">
        <v-row v-for="(item, i) in right" :key="i" class="my-4">
          <component :is="item" class="right"></component>
        </v-row>
      </v-col>
      <v-col> </v-col>

      <v-col cols="9">
        <v-row>
          <account-dashboard-profile> </account-dashboard-profile>
        </v-row>

        <v-row>
          <account-dashboard-voucher> </account-dashboard-voucher>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      right: [
        'account-dashboard-calendar',
        'account-dashboard-summary',
        'account-dashboard-settings',
        'account-dashboard-income-summary',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.right {
  width: 100% !important;
}
</style>
