<template>
  <v-container v-if="guide && guide.user" class="justify-center mt-4">
    <v-row justify="center" class="my-md-8">
      <v-col cols="12" md="2" class="abstract mx-md-6">
        <v-row justify-md="start" class="photo">
          <like-thumbnail-guide :guide="guide" :link="`/guides/${guide.id}`">
            <guide-location
              color="white"
              :guide="guide.location"
              class="guide-location"
              ></guide-location>
          </like-thumbnail-guide>
        </v-row>

        <v-row class="my-4">
          <account-guide-dashboard-summary> </account-guide-dashboard-summary>
        </v-row>

        <v-row class="my-4">
          <guide-profile-skills :guide="guide"> </guide-profile-skills>
        </v-row>
      </v-col>

      <v-col cols="12" md="7" class="summary px-16 px-md-4">
        <v-row justify-md="start" class="location">
          <guide-location
            color="description"
            :location="guide.location"
            class="location-value"
            >
          </guide-location>
        </v-row>

        <v-row justify-md="start">
          <guide-profile-name
            v-if="guide.user"
            :user="guide.user"
            ></guide-profile-name>
        </v-row>

        <v-row justify-md="start">
          <!--   <h3 class="guideType primary--text"> -->
          <!--     {{ guide.userType }} -->
          <!--   </h3> -->
          <rating color="primary" :rating="rating"></rating>
        </v-row>

        <div v-for="(component, i) in components" :key="i" class="mt-4">
          <v-row>
            <component :is="component.view" v-bind="component.props">
            </component>
          </v-row>
          <v-row class="my-4">
            <v-divider></v-divider>
          </v-row>
        </div>
      </v-col>

      <guide-actions :guide-id="guide.id"></guide-actions>
    </v-row>

    <!-- ========================== -->
    <v-row v-if="guide.experiences.length > 0" justify="center">
      <v-col cols="10">
        <v-row class="ma-4">
          <v-divider></v-divider>
        </v-row>

        <v-row justify="center" class="my-2 text-center">
          <h2>
            Les expériences de
            <span class="primary--text">
              {{ guide.user.firstname }}
            </span>
          </h2>
        </v-row>

        <v-row>
          <experience-list-horizontal :experiences="guide.experiences">
          </experience-list-horizontal>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { rating } from '@/data/mock.js'

export default {
  data() {
    return {
      rating,
      url: process.env.API_URL,
    }
  },
  computed: {
    ...mapGetters({
      guide: 'guide/getCore',
    }),
    components() {
      const val = this.guide
      if (!val) return
      return {
        description: {
          view: 'guide-profile-description',
          props: {
            guide: val,
          },
        },
        background: {
          view: 'guide-profile-background',
          props: { background: val.background },
        },
        review: {
          view: 'review',
        },
        favoritePlace: val.favorite_place && {
          view: 'guide-profile-favorite-place',
          props: { favoritePlace: val.favorite_place },
        },
      }
    },
    width() {
      return (
        {
          xs: 260,
          sm: 260,
          md: 140,
          lg: 200,
          xl: 300,
        }[this.$vuetify.breakpoint.name] || 200
      )
    },
  },
  mounted() {
    this.load(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      load: 'guide/loadProfile',
    }),
  },
}
</script>

<style lang="scss" scoped>
.row {
  @include for-phone-only {
    justify-content: center;
  }
}
.abstract > * > * {
  @include for-desktop-up {
    width: 100% !important;
  }
}

.location-value {
  font-size: x-small;
}

.actions > * > * {
  @include for-desktop-up {
    width: 100% !important;
  }
}
</style>
