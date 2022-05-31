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
        <experience-horizontal-list
          width="440"
          link="/account/client/reservations/"
        >
        </experience-horizontal-list>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  layout: 'account-client',
}
</script>
