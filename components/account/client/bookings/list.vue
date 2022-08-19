<template>
  <v-container>
    <v-row>
      <v-col
        v-for="{ experience, id } in bookings"
        :key="id"
        cols="12"
        md="4"
        class="pa-md-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <like-thumbnail-experience
            :experience="experience"
            :link="`/account/client/bookings/${id}`"
          >
          </like-thumbnail-experience>

          <v-card-title class="justify-center">
            <h3 class="ml-md-2 my-md-1 title--text">{{ experience.title }}</h3>
          </v-card-title>
          <v-card-text>
            <v-row class="px-md-4">
              <v-col md="6" cols="12" class="pa-0">
                <rating :rating="rating"></rating>
              </v-col>
              <v-col md="6" cols="12" class="pa-0 text-center text-md-right">
                <p class="text-subtitle-2 font-weight-normal">
                  {{
                    $t('components.experience.price', {
                      n: experience.price || 0,
                    })
                  }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { rating } from '@/data/mock.js'

export default {
  props: {
    width: {
      type: Number,
      default: 467,
    },
  },
  data() {
    return {
      rating,
    }
  },
  computed: {
    ...mapGetters({
      bookings: 'user/getBookings',
    }),
  },
}
</script>

<style lang="scss" scoped>
.col {
  justify-content: center;
  padding: 0px;
}
</style>
