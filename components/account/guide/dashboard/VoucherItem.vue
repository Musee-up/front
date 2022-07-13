<template>
  <v-container fluid class="my-2 d-flex">
    <v-row
      justify="center"
      class="px-12 justify-space-between">
      <v-col
        cols="12"
        md="2">
        <v-row
          justify="center">
          <nuxt-img
            class="rounded-xl"
            :width="width"
            :height="height"
            fit="cover"
            :src="voucher.img">
          </nuxt-img>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        md="4"
        class="pb-0 text-center"
        >
        <p>{{ voucher.title }}</p>
        <p>{{ voucher.type }}</p>
      </v-col>

      <v-col
        cols="12"
        class="pa-0 text-center"
        md="2">
        <p>{{ date }}</p>
      </v-col>

      <v-col
        cols="12"
        md="1"
        class="pa-0 text-center">
        <v-row justify="center" align="center">
        <v-icon
          large
          color="primary">
          {{ icon }}
        </v-icon>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { verticalWidth, verticalHeight } from '@/tools/photos.js'

export default {
  props: ['voucher'],
  data() {
    return {
      icon: 'mdi-ticket-confirmation',
    }
  },
  computed: {
    width (){ return verticalWidth(this.$vuetify.breakpoint.name, this.$vuetify.breakpoint.width)},
    height (){ return verticalHeight(this.$vuetify.breakpoint.name, this.$vuetify.breakpoint.width)},
    date (){
      return this.$moment(this.voucher.date)
        .format('DD/MM/YY')
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding: 0px
}
</style>
