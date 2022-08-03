<template>
  <v-row class="px-4">
    <v-col cols="12" :md="cols.right">
      <v-row v-for="(item, i) in right" :key="i" class="mb-4">
        <component :is="item" class="right"></component>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>

    <v-col cols="12" :md="cols.middle">
      <v-row>
        <account-guide-dashboard-profile :user="user">
        </account-guide-dashboard-profile>
      </v-row>

      <v-row v-if="guide.bookings">
        <account-guide-booking :bookings="guide.bookings">
        </account-guide-booking>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      user: 'user/getCore',
      guide: 'guide/getCore',
    }),
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
