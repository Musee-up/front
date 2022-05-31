<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.address.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-icon color="primary"> mdi-map-marker </v-icon>
      </v-col>
      <v-col>
        <p>
          {{ experience.meeting_point }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['experience'],
}
</script>
