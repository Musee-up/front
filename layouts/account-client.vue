<template>
  <default-layout>
    <v-container fluid>
      <v-row v-if="!$vuetify.breakpoint.mobile">
        <v-col class="justify-center" cols="2">
          <account-client-navigation> </account-client-navigation>
        </v-col>
        <v-col cols="10">
          <Nuxt></Nuxt>
        </v-col>
      </v-row>
      <Nuxt v-else></Nuxt>
    </v-container>
  </default-layout>
</template>

<script>
import { mapActions } from 'vuex'
import DefaultLayout from '~/layouts/default.vue'

export default {
  components: { DefaultLayout },
  middleware: ['auth'],
  mounted() {
    this.load()
  },
  methods: mapActions({ load: 'user/load' }),
}
</script>
