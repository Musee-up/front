<template>
  <v-container fluid class="my-2 d-flex">
    <v-row class="px-12 d-flex align-center justify-space-between">
      <v-col cols="2">
        <nuxt-img width="50" height="50" fit="cover" :src="voucher.img">
        </nuxt-img>
      </v-col>

      <v-col cols="4">
        <v-flex>
          <p>{{ voucher.title }}</p>
          <p>{{ voucher.type }}</p>
        </v-flex>
      </v-col>

      <v-col cols="2">
        <p>{{ new Date(voucher.date) | moment('DD/MM/YY') }}</p>
      </v-col>

      <v-col cols="1">
        <v-icon color="blue" class="align-self-right">
          {{ icon }}
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['voucher'],
  data() {
    return {
      icon: 'mdi-ticket-confirmation',
    }
  },
}
</script>
