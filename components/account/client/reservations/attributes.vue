<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.attributes.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-icon color="primary">mdi-calendar</v-icon>
      </v-col>
      <v-col>
        <p>{{ experience.date }}</p>
      </v-col>
      <v-col>
        <p class="primary--text text-right">
          {{
            $t('components.account.client.reservations.attributes.price', {
              total: experience.price,
              unit: experience.price,
            })
          }}
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
