<template>
  <v-container fluid class="my-2 d-flex">
    <v-row justify="center" class="px-md-12 justify-space-between">
      <v-col cols="12" md="2">
        <v-row justify="center">
          <nuxt-img
            class="rounded-xl"
            :width="img.width"
            :height="img.height"
            fit="cover"
            :src="img.url"
          >
          </nuxt-img>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="pb-0 text-center">
        <p>{{ experience.title }}</p>
        <p>{{  }}</p>
      </v-col>

      <v-col cols="12" class="pa-0 text-center" md="2">
        <p>{{ date }}</p>
      </v-col>

      <v-col cols="12" md="1" class="pa-0 text-center">
        <v-row justify="center" align="center">
          <v-icon large color="primary">
            {{ icon }}
          </v-icon>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Booking from '@/types/Booking'
import { verticalWidth, verticalHeight, getFormatFromBreakpoint } from '@/tools/photos.js'

export default {
  props: {
    booking: {
      type: Booking,
      required: true,
    },
  },
  data() {
    return {
      experience: this.booking?.experience,
      icon: 'mdi-ticket-confirmation',
    }
  },
  computed: {
    img() {
      return {
        url: getFormatFromBreakpoint(
          this.experience.photos[0]?.formats,
          this.$vuetify.breakpoint.name,
        ),
        width: verticalWidth(this.$vuetify.breakpoint),
        height: verticalHeight(this.$vuetify.breakpoint)
      }
    },
    date() {
      return this.$moment(this.booking.createdAt).format('DD/MM/YY')
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  padding: 0px;
}
</style>
