<template>
  <v-container class="py-8">
    <v-row class="justify-center py-8">
      <h2>
        {{ $t('components.home.partnership.title') }}
        <core-underline></core-underline>
      </h2>
    </v-row>

    <v-row>
      <v-col
        v-for="(partner, index) in partners"
        :key="index"
        cols="3"
        class="d-flex justify-center"
      >
        <nuxt-img style="width: 100%" :src="partner.photo"></nuxt-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          photo: '/partnership/logo_stationf.svg',
        },
        {
          photo: '/partnership/logo_42.svg',
        },
        {
          photo: '/partnership/logo_assas.svg',
        },
        {
          photo: '/partnership/logo_sorbonne.svg',
        },
      ],
    }
  },
}
</script>
