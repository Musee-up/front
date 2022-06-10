<template>
  <v-container>
    <v-col cols="9">
      <v-row class="justify-center">
        <h2>{{ $t('pages.account.client.reservations.title') }}</h2>
      </v-row>

      <v-row class="justify-center">
        <p>
          {{ $t('pages.account.client.reservations.description') }}
        </p>
      </v-row>

      <v-row>
        <experience-list-horizontal
          :width="width"
          link="/account/client/reservations/"
        >
        </experience-list-horizontal>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  layout: 'account-client',
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 140
        case 'sm':
          return 140
        case 'md':
          return 140
        case 'lg':
          return 240
        case 'xl':
          return 440
      }
      return 440
    },
  },
}
</script>
