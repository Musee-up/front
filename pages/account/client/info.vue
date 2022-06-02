<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-row>
          <account-guide-dashboard-profile></account-guide-dashboard-profile>
        </v-row>
        <v-row class="d-flex justify-center">
          <account-guide-resume></account-guide-resume>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'account-client',
}
</script>
