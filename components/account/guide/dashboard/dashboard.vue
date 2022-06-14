<template>
  <v-row>
    <v-col :cols="cols.right">
      <v-row v-for="(item, i) in right" :key="i" class="my-4">
        <component :is="item" class="right"></component>
      </v-row>
    </v-col>

    <v-col> </v-col>

    <v-col :cols="cols.middle">
      <v-row>
        <account-guide-dashboard-profile> </account-guide-dashboard-profile>
      </v-row>

      <v-row>
        <account-guide-dashboard-voucher> </account-guide-dashboard-voucher>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      right: [
        'account-guide-dashboard-calendar',
        'account-guide-dashboard-summary',
        'account-guide-dashboard-settings',
        'account-guide-dashboard-income-summary',
      ],
    }
  },
  computed: {
    cols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { right: 3, middle: 8 }
        case 'sm':
          return { right: 3, middle: 8 }
        case 'md':
          return { right: 3, middle: 8 }
        case 'lg':
          return { right: 3, middle: 8 }
        case 'xl':
          return { right: 2, middle: 9 }
      }
      return { right: 3, middle: 8 }
    },
  },
}
</script>

<style lang="scss" scoped>
.right {
  width: 100% !important;
}
</style>
