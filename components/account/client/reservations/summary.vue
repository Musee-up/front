<template>
  <v-container>
    <v-row>
      <h2 class="summary-title my-4 title--text">
        {{ $t('pages.account.client.reservations.id.summary') }}
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
  props: ['experience', 'guide'],
  data() {
    return {
      components: [
        {
          component: 'account-client-reservations-experience',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-guide',
          data: {
            guide: this.guide,
          },
        },
        {
          component: 'account-client-reservations-attributes',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-address',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-group',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-reference',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-cancel',
          data: {
            experience: this.experience,
          },
        },
        {
          component: 'account-client-reservations-footer',
          data: {
            experience: this.experience,
          },
        },
      ],
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
