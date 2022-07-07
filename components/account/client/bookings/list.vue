<template>
  <v-container>
    <v-row>
      <v-col
        v-for="experience in experiences"
        :key="experience.id"
        cols="12"
        md="4"
        class="pa-md-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <nuxt-link :to="`/account/client/bookings/${experience.id}`">
            <like-overview :width="width" photo="/exp_photo.png">
            </like-overview>
          </nuxt-link>

          <v-card-title>
            <h3 class="ml-md-2 my-md-1 title--text">{{ experience.title }}</h3>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <rating :rating="rating"></rating>
              </v-col>
              <v-col cols="12">
                <p class="text-center">
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
    link: {
      type: String,
      default: '/experience/',
    },
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
      experiences: 'user/getBookingExperiences',
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
