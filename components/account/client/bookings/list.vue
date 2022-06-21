<template>
  <v-container>
    <v-row>
      <v-col
        v-for="experience in experiences"
        :key="experience.id"
        cols="4"
        class="pa-4"
      >
        <v-card elevation="0" class="mx-auto rounded-xl">
          <nuxt-link :to="`/account/client/bookings/${experience.id}`">
            <like-overview :width="width" photo="/exp_photo.png">
            </like-overview>
          </nuxt-link>

          <v-card-title>
            <h3 class="ml-2 my-1 title--text">{{ experience.title }}</h3>
          </v-card-title>
          <v-card-text class="d-flex flex-column justify-right">
            <v-row :class="$vuetify.breakpoint.lgAndDown ? 'flex-column' : ''">
              <v-col>
                <rating :rating="mockExperience.rating"></rating>
              </v-col>
              <v-col>
                <p class="text-center">
                  {{
                    $t('components.experience.price', {
                      n: mockExperience.price,
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
import { experience } from '@/data/mock.js'

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
      id: 1,
      iter: [...Array(3).keys()],
      mockExperience: experience,
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
