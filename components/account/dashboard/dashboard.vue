<template>
  <v-container class="ma-4">
    <v-row>
    <v-col cols="2">
      <v-row
        v-for="(item, i) in right"
        class="my-4"
        :key="i">
        
        <component :is="item"></component>
      </v-row>
    </v-col>

    <v-col>
      <v-row class="">
        <account-dashboard-profile>
        </account-dashboard-profile>
      </v-row>

      <v-row>
        <account-dashboard-voucher>
        </account-dashboard-voucher>
      </v-row>
    </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      right: [
        "account-dashboard-summary",
        "account-dashboard-settings",
        "account-dashboard-income-summary",
      ]
    }
  }
}
</script>
