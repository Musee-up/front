<template>
  <v-container class="py-8">
    <v-row class="justify-center">
      <h2 >
        {{ $t('components.home.partnership.title') }}
      </h2>
    </v-row>

    <v-row class="px-16">
      <v-col
        v-for="(partner, index) in partners"
        :key="index"
        class="d-flex justify-center"
        >
        <nuxt-img :src="partner.photo"></nuxt-img>
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
        }
      ]
    }
  },
}
</script>
