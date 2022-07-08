<template>
  <v-container>
    <v-row>
      <h2 class="summary-title my-4 title--text">
        {{ $t('pages.account.client.bookings.id.summary') }}
      </h2>
    </v-row>

    <div v-for="(component, i) in components" :key="i">
      <v-row class="my-4">
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
export default {
  props: ['experience', 'guide', 'booking', 'e_slot'],
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
            e_slot: this.e_slot,
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
